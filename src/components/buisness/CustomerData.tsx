import React from "react";

const CustomerData = () => {
  return (
    <div className="flex flex-col  items-center justify-center  py-8 px-4 space-y-2">
      <h2 className="text-xl font-semibold text-center text-gray-800">
        Import Customer Data: Sync with Zapier or Upload CSV
      </h2>

      <div className="w-full max-w-md mt-24">
        <button className="w-full py-2 text-sm  px-4 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Connect with Zapier
        </button>
      </div>

      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500 font-medium">or</span>
        </div>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 w-full max-w-2xl flex flex-col items-center justify-center hover:border-gray-400 transition-colors">
        <div className="mb-4">
          <div className="rounded-full bg-blue-100 p-4 mb-2 ">
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-10"
            >
              <path
                d="M46.6663 46.6667L34.9997 35L23.333 46.6667"
                stroke="#305AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35 35V61.25"
                stroke="#305AFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M59.4711 53.6374C62.3158 52.0865 64.5631 49.6325 65.8582 46.6626C67.1533 43.6926 67.4225 40.376 66.6234 37.2361C65.8242 34.0962 64.0021 31.3118 61.4447 29.3225C58.8873 27.3331 55.7403 26.252 52.5003 26.2499H48.8253C47.9424 22.8352 46.297 19.6651 44.0126 16.9778C41.7282 14.2906 38.8644 12.1561 35.6364 10.735C32.4084 9.31389 28.9002 8.64304 25.3756 8.7729C21.851 8.90276 18.4017 9.82995 15.287 11.4848C12.1723 13.1396 9.47333 15.479 7.3929 18.327C5.31247 21.1751 3.90476 24.4577 3.27561 27.9281C2.64645 31.3986 2.81222 34.9665 3.76046 38.3636C4.70869 41.7607 6.41471 44.8987 8.75025 47.5416"
                stroke="#305AFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M46.6663 46.6667L34.9997 35L23.333 46.6667"
                stroke="#305AFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4">Drag and drop files here</p>
        <button className="w- py-2 text-sm  px-10 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Click to Upload CSV File
        </button>
      </div>
    </div>
  );
};

export default CustomerData;
