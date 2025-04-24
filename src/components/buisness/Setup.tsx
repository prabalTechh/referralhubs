import { Button } from "../ui/button";

const Setup = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 overflow-y-hidden">
      <div className="text-center mb-2">
        <h1 className="text-lg font-semibold text-[#333333] mb-1">
          Build Your Business Identity
        </h1>
        <p className="text-xs text-[#666666]">
          Help us tailor the referral experience by adding key details about
          your business
        </p>
      </div>

      <div className="space-y-2 p-2">
        <div className="flex items-center gap-4 mb-5">
          <label className="text-sm font-medium w-32 text-left ">
            Business Logo
          </label>
          <Button className="text-xs border px-4 py-1.5 text-[#666666] bg-white hover:bg-gray-50 rounded-md border-[#CCCCCC]">
            Choose Logo
          </Button>
        </div>

        <div className="space-y-1 ">
          <label className="block text-sm font-medium">
            Business Description
          </label>
          <textarea
            placeholder="Enter business description"
            className="border w-full placeholder:text-xs h-16 p-2.5 rounded-md border-[#CCCCCC] placeholder:text-[#999999]"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="block text-sm font-medium">Business Name</label>
            <input
              type="text"
              placeholder="Enter business name"
              className="border w-full p-2.5 rounded-md border-[#CCCCCC] placeholder:text-[#999999] text-xs"
            />
          </div>
          <div className="space-y-1 ">
            <label className="block text-sm font-medium">Business Email</label>
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
            <div className="relative text-xs">
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
            <label className="block text-sm font-medium">Business Type</label>
            <div className="relative text-xs">
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
            <label className="block text-sm font-medium">Company Size</label>
            <div className="relative text-xs">
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
  );
};

export default Setup;
