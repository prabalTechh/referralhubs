import ToggleSwitch from "../ui/ToggleSwitch";

const AgentRules = () => {
    return ( <div className="w-full max-w-xl mx-auto py-8">
        <h2 className="text-xl font-semibold mb-6">
          Set Up AI Agent Rules
        </h2>

        <div className="space-y-6">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tone of Communication
            </label>
            <div className="relative text-xs">
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
            <div className="relative text-xs">
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
      </div> );
}
 
export default AgentRules;