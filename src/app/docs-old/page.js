"use client";

import { useDevMode } from "@/hooks/useDevMode";
import UserDocs from "./user/page";

export default function DocsPage() {
  const { devMode } = useDevMode();

  // For now, just show user docs. Dev docs can be added later
  if (devMode) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Developer Documentation</h1>
          <p className="text-lg text-base-content/70">Coming soon...</p>
        </div>
      </div>
    );
  }

  return <UserDocs />;
}
