import { useState } from "react";
import { Button } from "@/components/ui/button";
import CheckBox from "@/components/ui/Checkbox";
import Setup from "@/components/buisness/Setup";
import CustomerData from "@/components/buisness/CustomerData";
import AgentRules from "@/components/buisness/AgentRule";
import Campagin from "@/components/buisness/Campagin";

type StatusType = "Completed" | "In Progress" | "Not Started";

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
    <div className="grid grid-cols-12 h-full">
      {/* Sidebar */}
      <div className="col-span-3 bg-[#F7F9FF] p-4 border-r border-gray-200">
        <div className="flex flex-col space-y-2 py-5 px-2 border-b border-[#CCCCCC] mb-4">
          <h1 className="font-medium text-[#305AFF]">
            Get Started with ReferralHub
          </h1>
          <p className="text-xs text-[#666666] leading-4">
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
      <div className="col-span-9   ">
        {step === 0 && <Setup />}

        {step === 1 && <CustomerData />}

        {step === 2 && <AgentRules />}

        {step === 3 && <Campagin />}

        <div className="flex justify-center pt-6">
          <Button
            onClick={handleNext}
            className="w-[350px] text-sm bg-gradient-to-r from-blue-700/80 to-[#B5D2FF] text-white py-3 px-4 rounded-lg hover:from-[#4338CA] hover:to-[#6D28D9] transition-colors font-medium"
          >
            {step === 3 ? "Complete Setup" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlatformSetup;
