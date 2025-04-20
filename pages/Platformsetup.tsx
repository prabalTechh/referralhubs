import { useState } from "react";
import { Button } from "@/components/ui/button";
import CheckBox from "@/components/ui/Checkbox";
import FormInput from "@/components/ui/FormInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type StatusType = "Completed" | "In Progress" | "Not Started";

const ToggleSwitch = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <div className="relative inline-block w-10 align-middle select-none">
        <input
          type="checkbox"
          className="sr-only peer"
          id={label.replace(/\s+/g, "-").toLowerCase()}
        />
        <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300"></div>
        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
      </div>
    </div>
  );
};

const PlatformSetup = () => {
  const [step, setStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const getStatus = (index: number): StatusType => {
    // First check if the step is completed
    if (completedSteps.includes(index)) {
      return "Completed";
    }
    // Then check if it's the current step
    else if (index === step) {
      return "In Progress";
    }
    // Otherwise, it's not started
    else {
      return "Not Started";
    }
  };

  const handleNext = () => {
    // Mark the CURRENT step as completed when Next is clicked
    if (!completedSteps.includes(step)) {
      setCompletedSteps((prev) => [...prev, step]);
    }

    // Then move to the next step
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className="grid grid-cols-12 h-screen">
      {/* Sidebar */}
      <div className="col-span-3 bg-[#F7F9FF] p-4 border-r border-gray-200">
        <div className="flex flex-col space-y-4 py-5 px-2 border-b border-[#CCCCCC] mb-4">
          <h1 className="font-medium text-[#305AFF]">
            Get Started with ReferralHub
          </h1>
          <p className="text-sm text-[#666666]">
            To get started with better referrals & rewards, complete your
            account setup in a few easy steps.
          </p>
        </div>
        <CheckBox title="Set Up Business Profile" status={getStatus(0)} />
        <CheckBox title="Sync Your Customer Data" status={getStatus(1)} />
        <CheckBox title="Set Up AI Agent Rules" status={getStatus(2)} />
        <CheckBox title="Set Up First Campaign" status={getStatus(3)} />
      </div>

      {/* Main Content */}
      <div className="col-span-9 pb-4 overflow-y-auto">
        {step === 0 && (
          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="text-center mb-2">
              <h1 className="text-lg font-semibold text-[#333333] mb-1.5">
                Build Your Business Identity
              </h1>
              <p className="text-xs text-[#666666]">
                Help us tailor the referral experience by adding key details
                about your business
              </p>
            </div>

            <div className="space-y-4 p-2">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium w-32 text-left">
                  Business Logo
                </label>
                <Button className="text-sm border px-4 py-1.5 text-[#666666] bg-white hover:bg-gray-50 rounded-md border-[#CCCCCC]">
                  Choose Logo
                </Button>
              </div>

              <div className="space-y-1 ">
                <label className="block text-sm font-medium">
                  Business Description
                </label>
                <textarea
                  placeholder="Enter business description"
                  className="border w-full placeholder:text-xs h-20 p-2.5 rounded-md border-[#CCCCCC] placeholder:text-[#999999]"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter business name"
                    className="border w-full p-2.5 rounded-md border-[#CCCCCC] placeholder:text-[#999999] text-xs"
                  />
                </div>
                <div className="space-y-1 ">
                  <label className="block text-sm font-medium">
                    Business Email
                  </label>
                  <input
                    type="email"
                    placeholder="eg robert.for@mymail.com"
                    className="border w-full p-2.5 rounded-md border-[#CCCCCC] placeholder:text-[#999999] text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1 ">
                  <label className="block text-sm font-medium">
                    Business Phone No.
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone no."
                    className="border w-full p-2.5 rounded-md border-[#CCCCCC] placeholder:text-[#999999] text-xs"
                  />
                </div>
                <div className="space-y-1 ">
                  <label className="block text-sm font-medium">Industry</label>
                  <div className="relative">
                    <select className="w-full border appearance-none border-[#CCCCCC] rounded-md p-2.5 pr-10 text-[#999999]">
                      <option value="">Select Industry</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="saas">SaaS / Software</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="fitness">Fitness & Wellness</option>
                      <option value="retail">Retail</option>
                      <option value="finance">Finance & Banking</option>
                      <option value="education">Education</option>
                      <option value="realEstate">Real Estate</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1 ">
                  <label className="block text-sm font-medium">Services</label>
                  <input
                    type="text"
                    placeholder="Enter services."
                    className="border w-full p-2.5 rounded-md border-[#CCCCCC] placeholder:text-[#999999] text-xs"
                  />
                </div>
                <div className="space-y-1 ">
                  <label className="block text-sm font-medium">Products</label>
                  <input
                    type="text"
                    placeholder="Enter products"
                    className="border w-full p-2.5 rounded-md border-[#CCCCCC] placeholder:text-[#999999] text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1 ">
                  <label className="block text-sm font-medium">
                    Business Type
                  </label>
                  <div className="relative">
                    <select className="w-full border appearance-none border-[#CCCCCC] rounded-md p-2.5 pr-10 text-[#999999]">
                      <option value="">Select Business Type</option>
                      <option value="b2c">B2C (Business to Consumer)</option>
                      <option value="b2b">B2B (Business to Business)</option>
                      <option value="d2c">D2C (Direct to Consumer)</option>
                      <option value="marketplace">Marketplace</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 ">
                  <label className="block text-sm font-medium">
                    Company Size
                  </label>
                  <div className="relative">
                    <select className="w-full border appearance-none border-[#CCCCCC] rounded-md p-2.5 pr-10 text-[#999999]">
                      <option value="">Select Size</option>
                      <option value="solo">Solo (1 person)</option>
                      <option value="small">Small (2-10)</option>
                      <option value="medium">Medium (11-50)</option>
                      <option value="large">Large (51-200)</option>
                      <option value="enterprise">Enterprise (201+)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1 ">
                  <label className="block text-sm font-medium">Zip Code</label>
                  <input
                    type="text"
                    placeholder="Enter zip code"
                    className="border w-full p-2.5 rounded-md border-[#CCCCCC] placeholder:text-[#999999] text-xs"
                  />
                </div>
                <div className="space-y-1 ">
                  <label className="block text-sm font-medium">City</label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    className="border w-full p-2.5 rounded-md border-[#CCCCCC] placeholder:text-[#999999] text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col items-center justify-center h-2/3 space-y-8">
            <h2 className="text-xl font-semibold text-center">
              Import Customer Data: Sync with Zapier or Upload CSV
            </h2>

            <div className="w-full max-w-md">
              <button className="w-full py-2.5 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                Connect with Zapier
              </button>
            </div>

            <div className="text-center w-full">
              <p className="text-sm text-gray-500 my-2">or</p>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-md p-8 w-full max-w-md flex flex-col items-center justify-center">
              <div className="mb-4">
                <div className="rounded-full bg-blue-100 p-4 mb-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 18L12 6M12 6L7 11M12 6L17 11"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Drag and drop files here
              </p>
              <button className="py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm">
                Click to Upload CSV File
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="w-full max-w-xl mx-auto py-8">
            <h2 className="text-xl font-semibold mb-6">
              Set Up AI Agent Rules
            </h2>

            <div className="space-y-6">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tone of Communication
                </label>
                <div className="relative">
                  <select className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-500 appearance-none">
                    <option value="">Select</option>
                    <option value="friendly">Friendly</option>
                    <option value="professional">Professional</option>
                    <option value="casual">Casual</option>
                    <option value="formal">Formal</option>
                    <option value="enthusiastic">Enthusiastic</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Response Style
                </label>
                <div className="relative">
                  <select className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-500 appearance-none">
                    <option value="">Select</option>
                    <option value="concise">Concise</option>
                    <option value="detailed">Detailed</option>
                    <option value="conversational">Conversational</option>
                    <option value="informative">Informative</option>
                    <option value="persuasive">Persuasive</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <ToggleSwitch
                label="Auto-offer help"
                description="AI sends up suggestions automatically when user lands on a page."
              />

              <ToggleSwitch
                label="User-initiated only"
                description="AI only responds when clicked or messaged."
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center justify-center h-2/3 space-y-6">
            <h2 className="text-xl font-semibold text-center">
              Set Up Your First Campaign
            </h2>
            <p className="text-center text-gray-600">
              Create your first referral campaign to start growing your business
            </p>
            {/* Add campaign setup fields here */}
          </div>
        )}

        <div className="flex justify-center pt-6">
          <Button
            onClick={handleNext}
            className="w-[350px] bg-gradient-to-r from-blue-700/80 to-[#B5D2FF] text-white py-3 px-4 rounded-lg hover:from-[#4338CA] hover:to-[#6D28D9] transition-colors font-medium"
          >
            {step === 3 ? "Complete Setup" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlatformSetup;
