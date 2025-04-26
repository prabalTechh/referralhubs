"use client";

import React, { useState, useEffect, useRef } from "react";
import PlatformSetup from "../../pages/Platformsetup";
import AiAgent from "../../pages/AiAgent";
import Dashboard from "../../pages/Dashboard";
import Campaign from "../../pages/Campaign";
import Promoters from "../../pages/Promoters";
import Payouts from "../../pages/Payouts";
import Leads from "../../pages/Leads";
import AIAssistant from "../../pages/AiAssistant";
import { Bell, X, ArrowRight } from "lucide-react";
import { PlatformSetupIcon } from "@/components/svg/PlatformSetupIcon";
import { AIAgentIcon } from "@/components/svg/AiAgentIcon";
import { DashboardIcon } from "@/components/svg/DashboardIcon";
import { CampaignIcon } from "@/components/svg/CampaignIcon";
import { PromotersIcon } from "@/components/svg/PromotersIcon";
import { LeadsIcon } from "@/components/svg/LeadsIcon";
import { PayoutsIcon } from "@/components/svg/PayoutsIcon";
import { SettingsIcon } from "@/components/svg/SettingsIcon";
import { HelpIcon } from "@/components/svg/HelpIcon";
import { TourContext } from "../contexts/TourContext";

type Page =
  | "Platform Setup"
  | "AI Agent"
  | "Dashboard"
  | "Campaign"
  | "Promoters"
  | "Leads"
  | "Payouts";

// Define the onboarding tour content
const onboardingSteps = [
  {
    target: "ai-agent",
    title: "AI Agent",
    content:
      "Hey there! I'm (bot Name), your AI agent. This is where I live — your go-to space to ask anything, generate campaigns, or get help filling out forms. I'm always just a click away!",
  },
  {
    target: "dashboard",
    title: "Dashboard",
    content:
      "This is your Dashboard, where you can see an overview of your campaign performance, leads, and promoter activity at a glance.",
  },
  {
    target: "campaign",
    title: "Campaign",
    content:
      "Create and manage your referral campaigns here. Set rewards, tracking parameters, and campaign goals all in one place.",
  },
  {
    target: "promoters",
    title: "Promoters",
    content:
      "View and manage all your promoters. Track their performance, see active promoters, and manage their accounts.",
  },
  {
    target: "leads",
    title: "Leads",
    content:
      "All your campaign leads are tracked here. You can filter, sort, and export lead data for your marketing efforts.",
  },
  {
    target: "payouts",
    title: "Payouts",
    content:
      "Manage all promoter payments from this section. View pending payouts, payment history, and process new payments.",
  },
];

const dummyPages: Record<Page, React.ReactNode> = {
  "Platform Setup": <PlatformSetup />,
  "AI Agent": <AiAgent />,
  Dashboard: <Dashboard />,
  Campaign: <Campaign />,
  Promoters: <Promoters />,
  Leads: <Leads />,
  Payouts: <Payouts />,
};

export default function PlatformLayout( ) {
  const [activePage, setActivePage] = useState<Page>("Platform Setup");
  const [tourCompleted, setTourCompleted] = useState(false);
  const targetRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [showOnboardingModal, setShowOnboardingModal] = useState(true);
  const [currentOnboardingStep, setCurrentOnboardingStep] = useState(0);
  const [modalPosition, setModalPosition] = useState({ top: 128, left: 260 });
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const setTargetRef = (id: string) => (el: HTMLDivElement | null) => {
    targetRefs.current[id] = el;
  };

  // Position the onboarding modals next to the sidebar items
  useEffect(() => {
    if (showOnboardingModal && currentOnboardingStep < onboardingSteps.length) {
      const currentStep = onboardingSteps[currentOnboardingStep];
      const targetElement = targetRefs.current[currentStep.target];

      if (targetElement) {
        const targetRect = targetElement.getBoundingClientRect();
        const top = targetRect.top;
        const left = targetRect.right + 20; // 20px offset from sidebar item
        setModalPosition({ top, left });
        // No automatic page changing
      }
    }
  }, [showOnboardingModal, currentOnboardingStep]);

  const handleOnboardingNext = () => {
    if (currentOnboardingStep < onboardingSteps.length - 1) {
      setCurrentOnboardingStep((prev) => prev + 1);
    } else {
      setShowOnboardingModal(false);
      setTourCompleted(true);
    }
  };

  const handleOnboardingSkip = () => {
    setShowOnboardingModal(false);
    setTourCompleted(true);
  };

  const getIcon = (page: string) => {
    switch (page) {
      case "Platform Setup":
        return <PlatformSetupIcon />;
      case "AI Agent":
        return <AIAgentIcon />;
      case "Dashboard":
        return <DashboardIcon />;
      case "Campaign":
        return <CampaignIcon />;
      case "Promoters":
        return <PromotersIcon />;
      case "Leads":
        return <LeadsIcon />;
      case "Payouts":
        return <PayoutsIcon />;
      default:
        return null;
    }
  };

  // Function to show tooltip on hover
  const handleMouseEnter = (id: string) => {
    setActiveTooltip(id);
  };

  // Function to hide tooltip
  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <TourContext.Provider value={{ tourCompleted, setTourCompleted }}>
      <div className="flex h-screen bg-[#F5F5F5] text-gray-900">
        {/* Sidebar */}
        <aside className="w-64 bg-[#FFFFFF] border-r border-[#EFF0F6] shadow-sm flex flex-col relative">
          <div className="h-16 flex items-center justify-center border-b border-[#EFF0F6]">
            {/* Logo could go here */}
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {Object.keys(dummyPages).map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, "-");
              const isOnboardingStep =
                showOnboardingModal &&
                id === onboardingSteps[currentOnboardingStep]?.target;

              return (
                <div
                  key={item}
                  id={id}
                  ref={setTargetRef(id)}
                  onClick={() => setActivePage(item as Page)}
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative flex items-center px-4 py-2.5 rounded-lg cursor-pointer text-sm transition-all duration-300 ease-in-out
                    ${
                      activePage === item
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }
                    ${isOnboardingStep ? "z-10" : ""}
                  `}
                >
                  <span className="mr-3">{getIcon(item)}</span>
                  {item}
                </div>
              );
            })}
          </nav>

          <div className="mt-auto p-4 space-y-1">
            <div
              className="flex items-center px-4 py-2.5 rounded-lg cursor-pointer text-sm text-gray-600 hover:bg-gray-50"
              onMouseEnter={() => handleMouseEnter("settings")}
              onMouseLeave={handleMouseLeave}
              ref={setTargetRef("settings")}
            >
              <span className="mr-3">
                <SettingsIcon />
              </span>
              Settings
            </div>

            <div
              className="flex items-center px-4 py-2.5 rounded-lg cursor-pointer text-sm text-gray-600 hover:bg-gray-50"
              onMouseEnter={() => handleMouseEnter("help")}
              onMouseLeave={handleMouseLeave}
              ref={setTargetRef("help")}
            >
              <span className="mr-3">
                <HelpIcon />
              </span>
              Help
            </div>
          </div>
        </aside>

        {/* Main Area */}
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center justify-between mx-6 border-b border-[#dfe1ed]">
            <h1 className="text-lg font-medium">{activePage}</h1>
            <div className="flex items-center gap-4">
              <Bell className="text-[#305AFF]" />
              <img
                src="/avatar.png"
                alt="avatar"
                className="w-9 h-9 rounded-full object-cover"
              />
              <span>
                <div className="font-medium text-sm">William</div>
                <div className="text-gray-500 text-xs">
                  lawsome@gmail.com
                </div>
              </span>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto mx-6 p-2 bg-[#FFFFFF]">
            {dummyPages[activePage]}
         
          </main>
        </div>

        <AIAssistant />

        {/* Onboarding Modals with connecting blue line */}
        {showOnboardingModal &&
          currentOnboardingStep < onboardingSteps.length && (
            <>
              {/* Connecting blue line */}
              <div
                className="fixed z-40 bg-blue-500"
                style={{
                  top: `${modalPosition.top + 20}px`, // Position in middle of element
                  left: `${
                    targetRefs.current[
                      onboardingSteps[currentOnboardingStep].target
                    ]?.getBoundingClientRect().right || 0
                  }px`,
                  width: "20px",
                  height: "2px",
                }}
              />

              {/* Modal */}
              <div
                className="fixed z-50 bg-white border border-blue-400 rounded-xl shadow-lg w-96 overflow-hidden"
                style={{
                  top: `${modalPosition.top}px`,
                  left: `${modalPosition.left}px`,
                }}
              >
                {/* Header */}
                <div className="border-b p-4 flex items-center gap-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4M12 16h.01" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-800">
                    {onboardingSteps[currentOnboardingStep].title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                    <p>{onboardingSteps[currentOnboardingStep].content}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between border-t p-3">
                  <button
                    onClick={handleOnboardingSkip}
                    className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
                  >
                    Skip
                  </button>
                  <button
                    onClick={handleOnboardingNext}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-xs"
                  >
                    {currentOnboardingStep < onboardingSteps.length - 1
                      ? "Next"
                      : "Done"}{" "}
                    <span className="text-xs">
                      ({currentOnboardingStep + 1}/{onboardingSteps.length})
                    </span>
                  </button>
                </div>
              </div>
            </>
          )}

        {/* Highlight Border for Onboarding */}
        {showOnboardingModal &&
          (() => {
            const targetEl =
              targetRefs.current[
                onboardingSteps[currentOnboardingStep]?.target
              ];
            if (!targetEl) return null;

            const targetRect = targetEl.getBoundingClientRect();

            return (
              <div
                className="fixed z-45 border-2 border-blue-500 rounded-lg pointer-events-none"
                style={{
                  top: targetRect.top - 2,
                  left: targetRect.left - 2,
                  width: targetRect.width + 4,
                  height: targetRect.height + 4,
                }}
              />
            );
          })()}
      </div>
    </TourContext.Provider>
  );
}