"use client";

import { useState } from "react";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  BookOpenIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { useDevMode } from "@/hooks/useDevMode";

export const DocLayout = ({ children, navigation }) => {
  const { devMode, toggleMode } = useDevMode();
  const [activeSection, setActiveSection] = useState(
    Object.keys(navigation)[0]?.items
      ? Object.keys(navigation[Object.keys(navigation)[0]].items)[0]
      : ""
  );
  const [expandedSections, setExpandedSections] = useState(
    Object.keys(navigation)
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleExpanded = (sectionId) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  // Find active content
  const findActiveContent = () => {
    for (const [categoryId, category] of Object.entries(navigation)) {
      if (category.items && category.items[activeSection]) {
        return category.items[activeSection];
      }
    }
    return null;
  };

  const activeContent = findActiveContent();

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <div className="sticky top-16 z-40 bg-base-100 border-b border-base-200/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {devMode ? (
                <CodeBracketIcon className="w-6 h-6 text-primary" />
              ) : (
                <BookOpenIcon className="w-6 h-6 text-primary" />
              )}
              <h1 className="text-2xl font-bold">
                {devMode ? "Developer Documentation" : "User Guide"}
              </h1>
            </div>
            <button
              className="lg:hidden btn btn-ghost btn-square"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:block w-72 flex-shrink-0`}
          >
            <nav className="sticky top-32 space-y-2 max-h-[calc(100vh-10rem)] overflow-y-auto">
              {Object.entries(navigation).map(([categoryId, category]) => (
                <div key={categoryId} className="space-y-1">
                  <button
                    onClick={() => toggleExpanded(categoryId)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm font-semibold hover:bg-base-200 rounded-lg transition-colors"
                  >
                    <category.icon className="w-4 h-4 text-base-content/70" />
                    <span className="flex-1 text-left">{category.title}</span>
                    {expandedSections.includes(categoryId) ? (
                      <ChevronDownIcon className="w-4 h-4" />
                    ) : (
                      <ChevronRightIcon className="w-4 h-4" />
                    )}
                  </button>

                  {expandedSections.includes(categoryId) && category.items && (
                    <div className="ml-6 space-y-1">
                      {Object.entries(category.items).map(([itemId, item]) => (
                        <button
                          key={itemId}
                          onClick={() => {
                            setActiveSection(itemId);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all
                            ${
                              activeSection === itemId
                                ? "bg-primary text-primary-content font-medium"
                                : "hover:bg-base-200 text-base-content/80"
                            }`}
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            {activeContent ? (
              <div>
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-2">
                    {activeContent.content.title}
                  </h1>
                  <p className="text-xl text-base-content/70">
                    {activeContent.content.description}
                  </p>
                </div>

                {activeContent.content.component ? (
                  <activeContent.content.component />
                ) : (
                  <div className="prose prose-lg max-w-none">
                    {activeContent.content.sections?.map((section, index) => (
                      <div key={index} className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                          {section.heading}
                        </h2>
                        <div className="text-base-content/80 whitespace-pre-wrap">
                          {section.content}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-base-content/60">
                  Select a topic from the sidebar
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mode Switch Button */}
      <div className="fixed bottom-8 right-8">
        <div
          className="tooltip tooltip-left"
          data-tip={
            devMode ? "Switch to User Guide" : "Switch to Developer Docs"
          }
        >
          <label className="swap swap-flip btn btn-primary btn-circle btn-lg shadow-lg">
            <input type="checkbox" checked={devMode} onChange={toggleMode} />
            <BookOpenIcon className="swap-off w-6 h-6" />
            <CodeBracketIcon className="swap-on w-6 h-6" />
          </label>
        </div>
      </div>
    </div>
  );
};
