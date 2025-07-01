"use client";

import Link from "next/link";
import IframeApp from "@/iframe/App";
import { useDevMode } from "@/hooks/useDevMode";
import {
  ChartBarIcon,
  RssIcon,
  TrophyIcon,
  SparklesIcon,
  CloudIcon,
  BoltIcon,
  PaintBrushIcon,
  CommandLineIcon,
  CodeBracketIcon,
  BeakerIcon,
  CubeTransparentIcon,
  SignalIcon,
  DocumentTextIcon,
  ServerIcon,
  UserIcon,
  AcademicCapIcon,
  PlayIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import SvgIllustration from "@/components/ScrollrSVG";

export default function Home() {
  const { devMode } = useDevMode();

  const userFeatures = [
    {
      icon: ChartBarIcon,
      title: "Live Financial Data",
      description: "Track stocks, crypto, and forex in real-time",
      color: "text-success",
    },
    {
      icon: TrophyIcon,
      title: "Sports Scores",
      description: "Never miss a game with live score updates",
      color: "text-warning",
    },
    {
      icon: RssIcon,
      title: "RSS News Feeds",
      description: "Stay informed with your favorite news sources",
      color: "text-info",
    },
    {
      icon: PaintBrushIcon,
      title: "Beautiful Themes",
      description: "Choose from 30+ stunning themes",
      color: "text-accent",
    },
    {
      icon: CloudIcon,
      title: "Cloud Sync",
      description: "Your settings sync across all devices",
      color: "text-secondary",
    },
    {
      icon: BoltIcon,
      title: "Lightning Fast",
      description: "Instant updates with zero lag",
      color: "text-primary",
    },
  ];

  const devFeatures = [
    {
      icon: CodeBracketIcon,
      title: "React 19 + TypeScript",
      description: "Modern stack with full type safety",
      color: "text-primary",
    },
    {
      icon: CubeTransparentIcon,
      title: "Microservices Architecture",
      description: "Scalable backend with Docker deployment",
      color: "text-secondary",
    },
    {
      icon: BeakerIcon,
      title: "WXT Framework",
      description: "Next-gen extension development platform",
      color: "text-accent",
    },
    {
      icon: SignalIcon,
      title: "WebSocket Streaming",
      description: "Real-time data with institutional-grade APIs",
      color: "text-success",
    },
    {
      icon: DocumentTextIcon,
      title: "Redux Toolkit",
      description: "Predictable state management with persistence",
      color: "text-info",
    },
    {
      icon: ServerIcon,
      title: "PostgreSQL + JWT",
      description: "Enterprise security and data persistence",
      color: "text-warning",
    },
  ];

  const features = devMode ? devFeatures : userFeatures;

  const heroContent = devMode
    ? {
        title: "Scrollr",
        subtitle: "Enterprise-Grade Browser Extension Framework",
        description:
          "Built with React 19, TypeScript, and microservices architecture. Features WebSocket streaming, JWT authentication, and Docker deployment. Perfect for developers building real-time data applications.",
        badges: [
          "React 19",
          "TypeScript",
          "WXT Framework",
          "Docker Ready",
          "PostgreSQL",
          "WebSocket",
          "Microservices",
          "JWT Auth",
        ],
        primaryCta: "Explore Architecture",
        secondaryCta: "Clone Repository",
      }
    : {
        title: "Scrollr",
        subtitle: "Transform Your Browser Into a Data Powerhouse",
        description:
          "Get live financial markets, sports scores, and news feeds right in your browser. Beautiful themes, cloud sync, and zero setup required. Join thousands of users who've supercharged their browsing experience.",
        badges: ["Real-Time Data", "30+ Themes", "Cloud Sync", "Zero Setup"],
        primaryCta: "Get Started Free",
        secondaryCta: "Watch Demo",
      };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-[80vh] relative overflow-hidden">
        <div className="hero-content text-center z-10 container">
          <div className="mockup-browser border border-base-300 backdrop-blur-sm overflow-hidden w-full">
            <div className="mockup-browser-toolbar h-8">
              <div className="input">
                {devMode ? "https://localhost:3000" : "https://myscrollr.com"}
              </div>
            </div>
            <div className="relative w-full h-[60vh] flex items-center justify-center">
              <div className="max-w-4xl">
                <div className="flex justify-center mb-6">
                  <SvgIllustration
                    width={100}
                    height={100}
                    className={devMode ? "animate-spin-slow" : "animate-bounce"}
                  />
                </div>
                <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {heroContent.title}
                </h1>
                <p className="text-2xl mb-8 text-base-content/80">
                  {heroContent.subtitle}
                </p>
                <p className="text-lg mb-10 max-w-2xl mx-auto">
                  {heroContent.description}
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                  <Link
                    href={devMode ? "/tutorial" : "/tutorial"}
                    className="btn btn-primary btn-lg gap-2"
                  >
                    {devMode ? (
                      <CodeBracketIcon className="w-5 h-5" />
                    ) : (
                      <SparklesIcon className="w-5 h-5" />
                    )}
                    {heroContent.primaryCta}
                  </Link>
                  <a
                    href={
                      devMode
                        ? "https://github.com/brandon-relentnet/scrollr"
                        : "#demo"
                    }
                    target={devMode ? "_blank" : "_self"}
                    className="btn btn-outline btn-lg gap-2"
                  >
                    {devMode ? (
                      <CommandLineIcon className="w-5 h-5" />
                    ) : (
                      <PlayIcon className="w-5 h-5" />
                    )}
                    {heroContent.secondaryCta}
                  </a>
                </div>

                <div className="flex gap-2 justify-center mt-8 flex-wrap">
                  {heroContent.badges.map((badge, i) => (
                    <div
                      key={i}
                      className={`badge ${
                        devMode
                          ? [
                              "badge-primary",
                              "badge-secondary",
                              "badge-accent",
                              "badge-info",
                              "badge-success",
                              "badge-warning",
                              "badge-error",
                              "badge-neutral",
                            ][i % 8]
                          : [
                              "badge-primary",
                              "badge-secondary",
                              "badge-accent",
                              "badge-info",
                            ][i % 4]
                      }`}
                    >
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
              <IframeApp isDemo={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Mode-Specific Features Grid */}
      <div className="py-20 px-4 bg-base-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              {devMode ? (
                <CodeBracketIcon className="w-8 h-8 text-primary" />
              ) : (
                <UserIcon className="w-8 h-8 text-primary" />
              )}
              <span className="badge badge-primary">
                {devMode ? "Developer Mode" : "User Mode"}
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              {devMode ? "Built for Developers" : "Why Choose Scrollr?"}
            </h2>
            <p className="text-center text-lg text-base-content/70">
              {devMode
                ? "Enterprise-grade architecture with modern development practices"
                : "Everything you need for real-time data, right in your browser"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="card-body">
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                  <h3 className="card-title">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mode-Specific CTA Section */}
      <div
        className={`py-20 ${
          devMode
            ? "bg-gradient-to-r from-neutral to-base-300"
            : "bg-gradient-to-r from-primary to-secondary"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2
            className={`text-4xl font-bold mb-6 ${
              devMode ? "text-base-content" : "text-primary-content"
            }`}
          >
            {devMode
              ? "Ready to Build Something Amazing?"
              : "Ready to Transform Your Browser?"}
          </h2>
          <p
            className={`text-xl mb-8 ${
              devMode ? "text-base-content/70" : "text-primary-content/80"
            }`}
          >
            {devMode
              ? "Clone the repository and start contributing to the open-source community"
              : "Join thousands of users who've supercharged their browsing experience"}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {devMode ? (
              <>
                <a
                  href="https://github.com/brandon-relentnet/scrollr"
                  target="_blank"
                  className="btn btn-lg btn-primary gap-2"
                >
                  <CommandLineIcon className="w-5 h-5" />
                  Clone Repository
                </a>
                <Link href="/tutorial" className="btn btn-lg btn-outline gap-2">
                  <AcademicCapIcon className="w-5 h-5" />
                  Developer Docs
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/tutorial"
                  className="btn btn-lg btn-primary bg-base-100 text-primary hover:bg-base-200 border-0 gap-2"
                >
                  <SparklesIcon className="w-5 h-5" />
                  Start Free Tutorial
                </Link>
                <a
                  href="https://github.com/brandon-relentnet/scrollr/releases"
                  target="_blank"
                  className="btn btn-lg btn-outline btn-primary border-base-100 text-base-100 hover:bg-base-100 hover:text-primary gap-2"
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  Download Extension
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <SvgIllustration width={50} height={50} className="mb-4" />
          <p className="font-bold">
            {devMode
              ? "Scrollr - Open Source Extension Framework"
              : "Scrollr - Real-Time Data Ticker"}
          </p>
          <p>Built with ❤️ by the Scrollr Community</p>
          <p className="text-sm opacity-70">
            © 2024 Scrollr. Mozilla Public License 2.0
          </p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/brandon-relentnet/scrollr"
              target="_blank"
              className="link link-hover"
            >
              GitHub
            </a>
            <a
              href="https://github.com/brandon-relentnet/scrollr/issues"
              target="_blank"
              className="link link-hover"
            >
              Issues
            </a>
            <a
              href="https://github.com/brandon-relentnet/scrollr/discussions"
              target="_blank"
              className="link link-hover"
            >
              Discussions
            </a>
            <a
              href="mailto:scrollr-support@relentnet.dev"
              className="link link-hover"
            >
              Support
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
