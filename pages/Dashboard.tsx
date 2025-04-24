// app/dashboard/page.tsx
import React from "react";
import { motion } from "framer-motion";
import { BarChart2, DollarSign, TrendingDown, Users } from "lucide-react";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <motion.div
        className="flex justify-between items-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <motion.div
            className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">👤</span> John Smith
          </motion.div>
          <motion.button
            className="bg-red-500 text-white px-3 py-1 rounded-full text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            X
          </motion.button>
        </div>
      </motion.div>

      <div className="flex w-full justify-between items-stretch gap-6 mb-6 bg-white">
  {/* Total Promoters */}
  <motion.div
    className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 flex-1"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    whileHover={{
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div className="rounded-full bg-gray-100 p-3 flex items-center justify-center">
      <Users size={20} className="text-gray-500" />
    </div>
    <div className="flex-1">
      <div className="text-gray-500 text-sm">Total Promoters</div>
      <div className="text-lg font-semibold text-gray-900">1,234</div>
      <div className="flex items-center mt-1">
        <span className="text-green-500 text-xs font-medium">+12%</span>
        <span className="text-gray-400 text-xs ml-1">vs last month</span>
      </div>
    </div>
  </motion.div>

  {/* Conversion Rate */}
  <motion.div
    className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 flex-1"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.7 }}
    whileHover={{
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div className="rounded-full bg-orange-50 p-3 flex items-center justify-center">
      <TrendingDown size={20} className="text-orange-400" />
    </div>
    <div className="flex-1">
      <div className="text-gray-500 text-sm">Conversion Rate</div>
      <div className="text-lg font-semibold text-gray-900">23.5%</div>
      <div className="flex items-center mt-1">
        <span className="text-red-500 text-xs font-medium">-2.4%</span>
        <span className="text-gray-400 text-xs ml-1">vs last month</span>
      </div>
    </div>
  </motion.div>

  {/* Revenue Generated */}
  <motion.div
    className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 flex-1"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    whileHover={{
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div className="rounded-full bg-pink-50 p-3 flex items-center justify-center">
      <DollarSign size={20} className="text-pink-400" />
    </div>
    <div className="flex-1">
      <div className="text-gray-500 text-sm">Revenue Generated</div>
      <div className="text-lg font-semibold text-gray-900">$12,345</div>
      <div className="flex items-center mt-1">
        <span className="text-green-500 text-xs font-medium">+8.7%</span>
        <span className="text-gray-400 text-xs ml-1">vs last month</span>
      </div>
    </div>
  </motion.div>

  {/* Active Campaigns */}
  <motion.div
    className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 flex-1"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.9 }}
    whileHover={{
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div className="rounded-full bg-blue-50 p-3 flex items-center justify-center">
      <BarChart2 size={20} className="text-blue-400" />
    </div>
    <div className="flex-1">
      <div className="text-gray-500 text-sm">Active Campaigns</div>
      <div className="text-lg font-semibold text-gray-900">3</div>
      <div className="flex items-center mt-1">
        <span className="text-gray-400 text-xs">vs 3 last month</span>
      </div>
    </div>
  </motion.div>
</div>

      {/* Circular Progress KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {[
          {
            title: "Repeat Referral Rate",
            value: "42%",
            color: "green",
            question: true,
          },
          {
            title: "Referral Engagement Rate",
            value: "67%",
            color: "red",
            question: true,
          },
          {
            title: "Churn Rate of Leads",
            value: "28%",
            color: "blue",
            question: true,
          },
          {
            title: "Upsell Rate of Leads",
            value: "19%",
            color: "purple",
            question: true,
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="text-gray-600 text-sm">{card.title}</div>
              {card.question && (
                <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                  ?
                </div>
              )}
            </div>
            <div className="flex items-center justify-center py-4">
              <div className="relative w-24 h-24">
                {/* Background circle */}
                <motion.svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke={`${
                      card.color === "green"
                        ? "rgba(74, 222, 128, 0.2)"
                        : card.color === "red"
                        ? "rgba(252, 165, 165, 0.2)"
                        : card.color === "blue"
                        ? "rgba(147, 197, 253, 0.2)"
                        : "rgba(216, 180, 254, 0.2)"
                    }`}
                    strokeWidth="8"
                  />

                  {/* Foreground circle with animation */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke={`${
                      card.color === "green"
                        ? "rgb(22, 163, 74)"
                        : card.color === "red"
                        ? "rgb(225, 29, 72)"
                        : card.color === "blue"
                        ? "rgb(59, 130, 246)"
                        : "rgb(168, 85, 247)"
                    }`}
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="251.2"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={{
                      strokeDashoffset:
                        251.2 - (parseInt(card.value) / 100) * 251.2,
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5 + index * 0.2,
                      ease: "easeOut",
                    }}
                  />
                </motion.svg>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                >
                  <div
                    className={`text-xl font-bold ${
                      card.color === "green"
                        ? "text-green-600"
                        : card.color === "red"
                        ? "text-red-600"
                        : card.color === "blue"
                        ? "text-blue-600"
                        : "text-purple-600"
                    }`}
                  >
                    {card.value}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div
          className="bg-white p-4 rounded-lg shadow-sm "
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Promoter Performance Over Time
            </h2>
            <motion.button
              className="shadow rounded-md px-3 py-1 text-sm text-gray-600 flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              Last 6 months{" "}
              <svg
                className="ml-1 w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>

          <div className="h-72">
            <motion.svg
              className="w-full h-full"
              viewBox="0 0 600 300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Y-axis grid lines */}
              {[0, 10, 20, 30, 40, 50].map((value, index) => (
                <g key={`y-grid-${index}`}>
                  <text
                    x="10"
                    y={300 - value * 6}
                    className="text-xs fill-gray-500"
                  >
                    {value}%
                  </text>
                  <line
                    x1="40"
                    y1={300 - value * 6}
                    x2="580"
                    y2={300 - value * 6}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                </g>
              ))}

              {/* X-axis labels */}
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map(
                (month, index) => (
                  <text
                    key={`x-label-${index}`}
                    x={55 + index * 105}
                    y="295"
                    className="text-xs fill-gray-500"
                    textAnchor="middle"
                  >
                    {month}
                  </text>
                )
              )}

              {/* Data line animation */}
              <motion.path
                d="M 55,210 
           L 90,205 
           C 110,205 130,190 150,220 
           C 170,250 190,210 210,195 
           C 230,185 250,210 270,200 
           C 290,190 310,198 330,190 
           C 350,182 370,180 390,175 
           C 410,170 430,175 450,170 
           C 470,167 490,185 510,178 
           C 530,173 550,180 565,180"
                stroke="#4f46e5"
                strokeWidth="2.5"
                fill="transparent"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />

              {/* Vertical indicator line */}
              <motion.line
                x1="150"
                y1="140"
                x2="150"
                y2="300"
                stroke="#3b82f6"
                strokeWidth="1.5"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                style={{ transformOrigin: "50% 100%" }}
              />

              {/* Data point indicator */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                {/* Tooltip background */}
                <rect
                  x="120"
                  y="110"
                  width="60"
                  height="30"
                  rx="4"
                  fill="#6b7280"
                />

                {/* Tooltip text */}
                <text
                  x="150"
                  y="130"
                  textAnchor="middle"
                  className="text-sm font-medium"
                  fill="white"
                >
                  30%
                </text>

                {/* Blue dot indicator */}
                <circle cx="150" cy="220" r="4" fill="#3b82f6" />
              </motion.g>
            </motion.svg>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded-lg shadow-sm "
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Conversion Success Rate
            </h2>
          </div>

          <div className=" flex flex-col space-y-4">
            {/* Donut Chart Section */}
            <div className="flex items-center justify-center relative">
              <motion.svg
                className="w-40 h-40"
                viewBox="0 0 100 100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                {/* Light Blue Background */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="#EBF0FF"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                />

                {/* Blue Arc */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#4D82F3"
                  strokeWidth="20"
                  strokeDasharray="251.2"
                  strokeDashoffset="251.2"
                  transform="rotate(-90 50 50)"
                  initial={{ strokeDashoffset: 251.2 }}
                  animate={{ strokeDashoffset: 108 }}
                  transition={{ duration: 1.5, delay: 1.6 }}
                />

                {/* Center White Circle */}
                <circle cx="50" cy="50" r="25" fill="white" />
              </motion.svg>
            </div>

            {/* Legend */}
            <motion.div
              className="flex justify-center space-x-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.1 }}
            >
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-gray-600">Referrals sent 57%</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-100 mr-2"></div>
                <span className="text-gray-600">Converted 42%</span>
              </div>
            </motion.div>
          </div>

          {/* Top Performing Channel Section */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Top Performing Channel
            </h2>

            <div className="flex space-x-2">
              {/* Facebook */}
              <div className="flex-1 bg-orange-100 p-4 rounded-lg text-center">
                <div className="mb-1">Facebook</div>
                <div className="font-bold text-xl">78%</div>
              </div>

              {/* Twitter */}
              <div className="flex-1 bg-pink-100 p-4 rounded-lg text-center">
                <div className="mb-1">Twitter</div>
                <div className="font-bold text-xl">45%</div>
              </div>

              {/* LinkedIn */}
              <div className="flex-1 bg-blue-50 p-4 rounded-lg text-center">
                <div className="mb-1">LinkedIn</div>
                <div className="font-bold text-xl">23%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Additional Metrics */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div
          className="bg-white p-4 rounded-lg shadow-sm "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Top Performing Channels
          </h2>
          <div className="space-y-3">
            {[
              { name: "Facebook", value: "70%" },
              { name: "Twitter", value: "45%" },
              { name: "Instagram", value: "23%" },
            ].map((channel, index) => (
              <motion.div
                key={index}
                className="flex flex-col"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">{channel.name}</span>
                  <span className="text-green-600">{channel.value}</span>
                </div>
                <motion.div
                  className="bg-gray-200 h-2 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                >
                  <motion.div
                    className="bg-pink-500 h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: channel.value }}
                    transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded-lg shadow-sm "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span className="w-1/2">Activity</span>
              <span className="w-1/4 text-center">Date</span>
              <span className="w-1/4 text-center">Time</span>
            </div>
            {[
              {
                activity: "John signs up from your referral link",
                date: "20-4-2025",
                time: "10:45 AM",
              },
              {
                activity: "You received $2 when John subscribed",
                date: "20-4-2025",
                time: "10:50 AM",
              },
              {
                activity: "Lisa clicked on your campaign",
                date: "20-4-2025",
                time: "11:30 AM",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex justify-between border-t pt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
              >
                <span className="text-gray-700 w-1/2">{item.activity}</span>
                <span className="text-gray-700 w-1/4 text-center">
                  {item.date}
                </span>
                <span className="text-gray-700 w-1/4 text-center">
                  {item.time}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div> */}

      {/*activity */}
      <motion.div
        className="bg-white p-4 rounded-lg shadow-sm  mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activities
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-gray-600 font-medium">
                  Activities
                </th>
                <th className="py-3 px-4 text-gray-600 font-medium text-right">
                  Date
                </th>
                <th className="py-3 px-4 text-gray-600 font-medium text-right">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  activity: "Julian earned $10",
                  date: "28-4-2024",
                  time: "10:30 AM",
                },
                {
                  activity: "John Doe signed up from your referral link",
                  date: "29-4-2024",
                  time: "9:45 AM",
                },
                {
                  activity: "You reached 50 referrals milestone!",
                  date: "30-4-2024",
                  time: "8:20 AM",
                },
                {
                  activity: "You updated your referral campaign",
                  date: "31-4-2024",
                  time: "7:00 AM",
                },
              ].map((item, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-gray-100"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                >
                  <td className="py-3 px-4 text-gray-700">{item.activity}</td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    {item.date}
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    {item.time}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Leaderboard Table */}
      <motion.div
        className="bg-white p-4 rounded-lg shadow-sm "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Leaderboard Table View
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-gray-600 font-medium">Rank</th>
                <th className="py-3 px-4 text-gray-600 font-medium">
                  Promoter Name
                </th>
                <th className="py-3 px-4 text-gray-600 font-medium">
                  Conversion Rate
                </th>
                <th className="py-3 px-4 text-gray-600 font-medium">
                  Referrals Sent
                </th>
                <th className="py-3 px-4 text-gray-600 font-medium">
                  Successful Conversions
                </th>
                <th className="py-3 px-4 text-gray-600 font-medium">
                  Revenue Generated
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  rank: 1,
                  name: "Emery Dotstill",
                  rate: 150,
                  sent: 80,
                  success: "60%",
                  revenue: "$1,200",
                },
                {
                  rank: 2,
                  name: "Kadin Lipshultz",
                  rate: 132,
                  sent: 90,
                  success: "65%",
                  revenue: "$980",
                },
                {
                  rank: 3,
                  name: "Sandy Culhane",
                  rate: 110,
                  sent: 60,
                  success: "60%",
                  revenue: "$880",
                },
                {
                  rank: 4,
                  name: "Jaxxon Vaccaro",
                  rate: 100,
                  sent: 85,
                  success: "75%",
                  revenue: "$500",
                },
                {
                  rank: 5,
                  name: "Jocelyn Levin",
                  rate: 50,
                  sent: 30,
                  success: "63%",
                  revenue: "$600",
                },
                {
                  rank: 6,
                  name: "Maren Septimus",
                  rate: 80,
                  sent: 35,
                  success: "25%",
                  revenue: "$200",
                },
                {
                  rank: 7,
                  name: "Haylie Saris",
                  rate: 120,
                  sent: 55,
                  success: "45%",
                  revenue: "$150",
                },
                {
                  rank: 8,
                  name: "Randy Horwitz",
                  rate: 110,
                  sent: 90,
                  success: "65%",
                  revenue: "$580",
                },
              ].map((row, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-gray-100"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1.6 + index * 0.05 }}
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                >
                  <td className="py-3 px-4 text-center">{row.rank}</td>
                  <td className="py-3 px-4">{row.name}</td>
                  <td className="py-3 px-4">{row.rate}</td>
                  <td className="py-3 px-4">{row.sent}</td>
                  <td className="py-3 px-4">{row.success}</td>
                  <td className="py-3 px-4">{row.revenue}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
