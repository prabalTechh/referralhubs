export const CampaignIcon = (activePage:any) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6667 12.5V14.1667C16.6667 15.0871 15.9205 15.8333 15 15.8333H5C4.07953 15.8333 3.33334 15.0871 3.33334 14.1667V5.83333C3.33334 4.91286 4.07953 4.16667 5 4.16667H15C15.9205 4.16667 16.6667 4.91286 16.6667 5.83333V7.5"
      stroke={activePage === "Campaign" ? "#4D70FF" : "#6B7280"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8333 10C10.8333 9.53976 11.2064 9.16667 11.6667 9.16667H15.8333C16.2936 9.16667 16.6667 9.53976 16.6667 10C16.6667 10.4602 16.2936 10.8333 15.8333 10.8333H11.6667C11.2064 10.8333 10.8333 10.4602 10.8333 10Z"
      stroke={activePage === "Campaign" ? "#4D70FF" : "#6B7280"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
