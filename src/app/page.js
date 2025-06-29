"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import IframeApp from "@/iframe/App";
import {
  ChartBarIcon,
  RssIcon,
  TrophyIcon,
  SparklesIcon,
  CogIcon,
  CloudIcon,
  BoltIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";
import SvgIllustration from "@/components/ScrollrSVG";

export default function Home() {
  const [activeDemo, setActiveDemo] = useState("finance");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: ChartBarIcon,
      title: "Real-Time Markets",
      description: "Professional-grade market data with millisecond updates",
      color: "text-success",
    },
    {
      icon: TrophyIcon,
      title: "Live Sports",
      description: "Never miss a moment with instant score updates",
      color: "text-warning",
    },
    {
      icon: RssIcon,
      title: "RSS Manager",
      description: "Your personalized news command center",
      color: "text-info",
    },
    {
      icon: BoltIcon,
      title: "Lightning Fast",
      description: "Sub-100ms response times with React 19",
      color: "text-primary",
    },
    {
      icon: CloudIcon,
      title: "Cloud Sync",
      description: "Your settings follow you everywhere",
      color: "text-secondary",
    },
    {
      icon: PaintBrushIcon,
      title: "30+ Themes",
      description: "Beautiful themes for every preference",
      color: "text-accent",
    },
  ];

  const demoContent = {
    finance: [
      "AAPL +2.34%",
      "GOOGL +1.56%",
      "TSLA -0.89%",
      "BTC +5.21%",
      "ETH +3.45%",
    ],
    sports: [
      "Lakers 112 - Celtics 108",
      "Chiefs 28 - Bills 24",
      "Yankees 5 - Dodgers 3",
    ],
    rss: [
      "Breaking: Major Tech Announcement",
      "New Framework Released",
      "Market Analysis: Q4 Outlook",
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-[80vh] relative overflow-hidden">
        <div className="hero-content text-center z-10 container">
          {/* Animated background ticker */}
          <div className="mockup-browser border border-base-300 backdrop-blur-sm overflow-hidden w-full">
            <div className="mockup-browser-toolbar h-8">
              <div className="input">https://example.com</div>
            </div>
            <div className="relative w-full h-[60vh] w-full flex items-center justify-center">
              <div className="max-w-4xl">
                <div className="flex justify-center mb-6">
                  <SvgIllustration
                    width={100}
                    height={100}
                    className={"animate-bounce"}
                  />
                </div>
                <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Scrollr
                </h1>
                <p className="text-2xl mb-8 text-base-content/80">
                  Transform your browser into a real-time data powerhouse
                </p>
                <p className="text-lg mb-10 max-w-2xl mx-auto">
                  Blazing-fast browser extension that brings live financial
                  markets, sports scores, and RSS feeds directly to your
                  browser. Built with enterprise-grade architecture and a
                  buttery-smooth experience.
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                  <Link
                    href="/tutorial"
                    className="btn btn-primary btn-lg gap-2"
                  >
                    <SparklesIcon className="w-5 h-5" />
                    Get Started
                  </Link>
                  <a
                    href="https://github.com/brandon-relentnet/scrollr"
                    target="_blank"
                    className="btn btn-outline btn-lg gap-2"
                  >
                    <CommandLineIcon className="w-5 h-5" />
                    View on GitHub
                  </a>
                </div>

                {/* Floating badges */}
                <div className="flex gap-2 justify-center mt-8 flex-wrap">
                  <div className="badge badge-primary">React 19</div>
                  <div className="badge badge-secondary">TypeScript</div>
                  <div className="badge badge-accent">WXT Framework</div>
                  <div className="badge badge-info">Docker Ready</div>
                </div>
              </div>
              <IframeApp isDemo={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why MyScrollr?
          </h2>
          <p className="text-center text-lg mb-12 text-base-content/70">
            Everything you need for real-time data, right in your browser
          </p>

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

      {/* Interactive Demo Section */}
      <div className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            See It In Action
          </h2>

          <div className="tabs tabs-boxed justify-center mb-8">
            <a
              className={`tab tab-lg ${
                activeDemo === "finance" ? "tab-active" : ""
              }`}
              onClick={() => setActiveDemo("finance")}
            >
              <ChartBarIcon className="w-5 h-5 mr-2" />
              Finance
            </a>
            <a
              className={`tab tab-lg ${
                activeDemo === "sports" ? "tab-active" : ""
              }`}
              onClick={() => setActiveDemo("sports")}
            >
              <TrophyIcon className="w-5 h-5 mr-2" />
              Sports
            </a>
            <a
              className={`tab tab-lg ${
                activeDemo === "rss" ? "tab-active" : ""
              }`}
              onClick={() => setActiveDemo("rss")}
            >
              <RssIcon className="w-5 h-5 mr-2" />
              RSS
            </a>
          </div>

          <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
              <div className="input">https://example.com</div>
            </div>
            <div className="bg-base-200 px-4 py-16 min-h-[400px] relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  Your favorite website here
                </h3>
                <p className="text-base-content/60">
                  MyScrollr overlay appears at the bottom
                </p>
              </div>

              {/* Simulated ticker */}
              <div className="absolute bottom-0 left-0 right-0 bg-base-100 border-t border-base-300 h-16">
                <div className="flex items-center h-full overflow-hidden">
                  <div className="flex gap-6 animate-scroll-left">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="flex gap-6 px-6">
                        {demoContent[activeDemo].map((item, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-2 whitespace-nowrap"
                          >
                            {activeDemo === "finance" && (
                              <ChartBarIcon className="w-4 h-4 text-success" />
                            )}
                            {activeDemo === "sports" && (
                              <TrophyIcon className="w-4 h-4 text-warning" />
                            )}
                            {activeDemo === "rss" && (
                              <RssIcon className="w-4 h-4 text-info" />
                            )}
                            <span className="font-mono">{item}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Features */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Built for Developers
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <CommandLineIcon className="w-8 h-8 text-primary mb-2" />
                <h3 className="card-title">One-Command Setup</h3>
                <div className="mockup-code">
                  <pre>
                    <code>
                      git clone https://github.com/brandon-relentnet/scrollr.git
                    </code>
                  </pre>
                  <pre>
                    <code>cd scrollr && make dev-up</code>
                  </pre>
                  <pre>
                    <code>npm run dev</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <CogIcon className="w-8 h-8 text-secondary mb-2" />
                <h3 className="card-title">Microservices Architecture</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>JWT Authentication Service</li>
                  <li>Real-time Finance WebSocket API</li>
                  <li>Live Sports Data Service</li>
                  <li>Docker Production Ready</li>
                  <li>Health Monitoring & Metrics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-primary-content mb-6">
            Ready to Transform Your Browser?
          </h2>
          <p className="text-xl text-primary-content/80 mb-8">
            Join thousands of users who've supercharged their browsing
            experience
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/tutorial"
              className="btn btn-lg btn-primary bg-base-100 text-primary hover:bg-base-200 border-0"
            >
              Start Tutorial
            </Link>
            <a
              href="https://github.com/brandon-relentnet/scrollr/releases"
              target="_blank"
              className="btn btn-lg btn-outline btn-primary border-base-100 text-base-100 hover:bg-base-100 hover:text-primary"
            >
              Download Extension
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <Image
            src="/icon-128.png"
            alt="MyScrollr"
            width={50}
            height={50}
            className="mb-4"
          />
          <p className="font-bold">MyScrollr - Real-Time Data Ticker</p>
          <p>Built with ❤️ by the MyScrollr Community</p>
          <p className="text-sm opacity-70">
            © 2024 MyScrollr. Mozilla Public License 2.0
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
    </div>
  );
}
