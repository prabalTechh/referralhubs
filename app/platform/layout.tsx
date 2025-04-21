'use client'

import React, { useState } from "react";
import PlatformSetup from "../../pages/Platformsetup";
import AiAgent from "../../pages/AiAgent";
import Dashboard from "../../pages/Dashboard";
import Campaign from "../../pages/Campaign";
import Promoters from "../../pages/Promoters";
import Payouts from "../../pages/Payouts";
import Leads from "../../pages/Leads";
import AIAssistant from "../../pages/AiAssistant";
import { Bell } from "lucide-react";

type Page =
  | "Platform Setup"
  | "AI Agent"
  | "Dashboard"
  | "Campaign"
  | "Promoters"
  | "Leads"
  | "Payouts";

const dummyPages: Record<Page, React.ReactNode> = {
  "Platform Setup": <PlatformSetup />,
  "AI Agent": <AiAgent />,
  "Dashboard": <Dashboard />,
  "Campaign": <Campaign />,
  "Promoters": <Promoters />,
  "Leads": <Leads />,
  "Payouts": <Payouts />,
};

const PlatformLayout = () => {
  const [activePage, setActivePage] = useState<Page>("Platform Setup");

  // Icon components for sidebar
  const PlatformSetupIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 10C7.5 8.619 8.619 7.5 10 7.5C11.381 7.5 12.5 8.619 12.5 10C12.5 11.381 11.381 12.5 10 12.5C8.619 12.5 7.5 11.381 7.5 10Z" fill={activePage === "Platform Setup" ? "#4D70FF" : "#6B7280"} />
      <path d="M16.868 10.868C16.958 10.61 17 10.312 17 10C17 9.688 16.958 9.39 16.868 9.132L18.63 7.642C18.792 7.503 18.838 7.278 18.732 7.092L16.982 3.908C16.875 3.722 16.652 3.638 16.448 3.722L14.392 4.557C14.005 4.267 13.568 4.032 13.097 3.867L12.752 1.692C12.71 1.487 12.528 1.333 12.32 1.333H8.68C8.472 1.333 8.29 1.487 8.248 1.692L7.903 3.867C7.432 4.032 6.995 4.267 6.608 4.557L4.552 3.722C4.348 3.638 4.125 3.722 4.018 3.908L2.268 7.092C2.162 7.278 2.208 7.503 2.37 7.642L4.132 9.132C4.042 9.39 4 9.688 4 10C4 10.312 4.042 10.61 4.132 10.868L2.37 12.358C2.208 12.497 2.162 12.722 2.268 12.908L4.018 16.092C4.125 16.278 4.348 16.362 4.552 16.278L6.608 15.443C6.995 15.733 7.432 15.968 7.903 16.133L8.248 18.308C8.29 18.513 8.472 18.667 8.68 18.667H12.32C12.528 18.667 12.71 18.513 12.752 18.308L13.097 16.133C13.568 15.968 14.005 15.733 14.392 15.443L16.448 16.278C16.652 16.362 16.875 16.278 16.982 16.092L18.732 12.908C18.838 12.722 18.792 12.497 18.63 12.358L16.868 10.868Z" stroke={activePage === "Platform Setup" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const AIAgentIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke={activePage === "AI Agent" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 10C7.5 8.619 8.619 7.5 10 7.5C11.381 7.5 12.5 8.619 12.5 10C12.5 11.381 11.381 12.5 10 12.5" stroke={activePage === "AI Agent" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.16666 12.5H10" stroke={activePage === "AI Agent" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const DashboardIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.33334" y="3.33334" width="5.83333" height="5.83333" rx="1" stroke={activePage === "Dashboard" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3.33334" y="12.5" width="5.83333" height="4.16667" rx="1" stroke={activePage === "Dashboard" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="12.5" y="3.33334" width="4.16667" height="9.16667" rx="1" stroke={activePage === "Dashboard" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="12.5" y="15" width="4.16667" height="1.66667" rx="0.833333" stroke={activePage === "Dashboard" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const CampaignIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.6667 12.5V14.1667C16.6667 15.0871 15.9205 15.8333 15 15.8333H5C4.07953 15.8333 3.33334 15.0871 3.33334 14.1667V5.83333C3.33334 4.91286 4.07953 4.16667 5 4.16667H15C15.9205 4.16667 16.6667 4.91286 16.6667 5.83333V7.5" stroke={activePage === "Campaign" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.8333 10C10.8333 9.53976 11.2064 9.16667 11.6667 9.16667H15.8333C16.2936 9.16667 16.6667 9.53976 16.6667 10C16.6667 10.4602 16.2936 10.8333 15.8333 10.8333H11.6667C11.2064 10.8333 10.8333 10.4602 10.8333 10Z" stroke={activePage === "Campaign" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const PromotersIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3333 5.83333C13.3333 7.67428 11.8409 9.16667 10 9.16667C8.15905 9.16667 6.66666 7.67428 6.66666 5.83333C6.66666 3.99238 8.15905 2.5 10 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333Z" stroke={activePage === "Promoters" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 11.6667C6.31811 11.6667 3.33334 14.6514 3.33334 18.3333H16.6667C16.6667 14.6514 13.6819 11.6667 10 11.6667Z" stroke={activePage === "Promoters" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const LeadsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 8.33333H12.5" stroke={activePage === "Leads" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 11.6667H12.5" stroke={activePage === "Leads" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.6667 4.99999V15C16.6667 16.3807 15.5474 17.5 14.1667 17.5H5.83334C4.45263 17.5 3.33334 16.3807 3.33334 15V4.99999C3.33334 3.61928 4.45263 2.49999 5.83334 2.49999H14.1667C15.5474 2.49999 16.6667 3.61928 16.6667 4.99999Z" stroke={activePage === "Leads" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const PayoutsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 15.8333V4.16667" stroke={activePage === "Payouts" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.1667 11.6667L10 15.8333L5.83334 11.6667" stroke={activePage === "Payouts" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const SettingsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.33334 2.5H11.6667C12.1269 2.5 12.5 2.8731 12.5 3.33333V4.28131C12.5 4.64031 12.7321 4.95487 13.0623 5.07469C13.4757 5.22348 13.8625 5.42392 14.2133 5.66933C14.5243 5.88838 14.9347 5.90431 15.2202 5.6967L15.998 5.13803C16.3857 4.85423 16.9277 4.9321 17.2115 5.31231L19.1667 7.91669C19.4505 8.2969 19.3987 8.83885 19.0537 9.16052L18.3471 9.81568C18.0757 10.0677 18.0241 10.4765 18.2044 10.7873C18.3632 11.067 18.4935 11.362 18.5914 11.6698C18.7121 12.0482 19.0625 12.3057 19.4609 12.3057H19.1667C19.6269 12.3057 20 12.6788 20 13.139V16.4723C20 16.9325 19.6269 17.3057 19.1667 17.3057H18.2187C17.8597 17.3057 17.5451 17.5377 17.4253 17.868C17.2765 18.2813 17.0761 18.6682 16.8307 19.019C16.6116 19.33 16.5957 19.7403 16.8033 20.0259L17.362 20.8037C17.6458 21.1914 17.5679 21.7334 17.1877 22.0172L14.5833 23.9723C14.2031 24.2561 13.6612 24.2043 13.3395 23.8593L12.6843 23.1527C12.4323 22.8812 12.0235 22.8297 11.7127 23.01C11.433 23.1688 11.138 23.2991 10.8302 23.397C10.4518 23.5176 10.1943 23.8681 10.1943 24.2665V25C10.1943 25.4602 9.82122 25.8333 9.36099 25.8333H6.0277C5.56747 25.8333 5.19437 25.4602 5.19437 25V24.052C5.19437 23.693 4.96229 23.3784 4.63201 23.2587C4.21865 23.1099 3.83182 22.9094 3.48098 22.664C3.17001 22.4449 2.75963 22.429 2.474 22.6367L1.69628 23.1953C1.30854 23.4791 0.76658 23.4013 0.48278 23.0211L-1.47228 20.4167C-1.75608 20.0365 -1.70434 19.4945 -1.35931 19.1728L-0.65272 18.5177C-0.38124 18.2657 -0.32975 17.8569 -0.51004 17.5461C-0.6688 17.2664 -0.79906 16.9714 -0.89702 16.6636C-1.01764 16.2852 -1.36807 16.0277 -1.76653 16.0277H-2.5C-2.96024 16.0277 -3.33334 15.6546 -3.33334 15.1943V11.861C-3.33334 11.4008 -2.96024 11.0277 -2.5 11.0277H-1.55202C-1.19302 11.0277 -0.87846 10.7956 -0.75863 10.4653C-0.60985 10.052 -0.40941 9.66515 -0.164 9.31431C0.0550451 9.00335 0.0709778 8.59297 -0.136752 8.30733L-0.6954 7.52962C-0.9792 7.14187 -0.90132 6.59992 -0.52112 6.31612L2.08326 4.36105C2.46347 4.07725 3.00542 4.129 3.32709 4.47402L3.98225 5.18062C4.23427 5.45209 4.64305 5.50358 4.95383 5.3233C5.23353 5.16453 5.52858 5.03427 5.8364 4.93631C6.2148 4.81569 6.47229 4.46527 6.47229 4.0668V3.33333C6.47229 2.8731 6.84538 2.5 7.30562 2.5H8.33334Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const HelpIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 11.6667V10.8333C10.6904 10.8333 11.25 10.2738 11.25 9.58333C11.25 8.89289 10.6904 8.33333 10 8.33333C9.30953 8.33333 8.75 8.89289 8.75 9.58333" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.99996 14.1667C9.77894 14.1667 9.59996 13.9877 9.59996 13.7667C9.59996 13.5457 9.77894 13.3667 9.99996 13.3667C10.221 13.3667 10.4 13.5457 10.4 13.7667C10.4 13.9877 10.221 14.1667 9.99996 14.1667Z" fill="#6B7280" stroke="#6B7280" strokeWidth="0.5" />
    </svg>
  );

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

  return (
    <div className="flex h-screen bg-[#F5F5F5] text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-[#FFFFFF] border-r border-[#EFF0F6] shadow-sm flex flex-col">
        <div className="h-16 flex items-center justify-center border-b border-[#EFF0F6]">
          {/* Logo could go here */}
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {Object.keys(dummyPages).map((item) => (
            <div
              key={item}
              onClick={() => setActivePage(item as Page)}
              className={`flex items-center px-4 py-2.5 rounded-lg cursor-pointer text-sm ${
                activePage === item
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="mr-3">{getIcon(item)}</span>
              {item}
            </div>
          ))}
        </nav>

        <div className="mt-auto p-4 space-y-1">
          <div className="flex items-center px-4 py-2.5 rounded-lg cursor-pointer text-sm text-gray-600 hover:bg-gray-50">
            <span className="mr-3"><SettingsIcon /></span>
            Settings
          </div>
          <div className="flex items-center px-4 py-2.5 rounded-lg cursor-pointer text-sm text-gray-600 hover:bg-gray-50">
            <span className="mr-3"><HelpIcon /></span>
            Help
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-[#dfe1ed]">
          <h1 className="text-lg font-medium">{activePage}</h1>
          <div className="flex items-center gap-4">
            <Bell className="text-[#305AFF]" />
            <img
              src="/avatar.png"
              alt="avatar"
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="text-sm text-left">
              <div className="font-medium">Kadin Stanton</div>
              <div className="text-gray-500">kadinstanton@gmail.com</div>
            </span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto mx-6 p-2 bg-[#FFFFFF]">
          {dummyPages[activePage]}
        </main>
      </div>
      <AIAssistant />
    </div>
  );
};

export default PlatformLayout;