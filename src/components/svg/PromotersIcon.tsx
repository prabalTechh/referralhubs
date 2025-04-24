export const PromotersIcon = (activePage:any) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3333 5.83333C13.3333 7.67428 11.8409 9.16667 10 9.16667C8.15905 9.16667 6.66666 7.67428 6.66666 5.83333C6.66666 3.99238 8.15905 2.5 10 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333Z"
      stroke={activePage === "Promoters" ? "#4D70FF" : "#6B7280"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 11.6667C6.31811 11.6667 3.33334 14.6514 3.33334 18.3333H16.6667C16.6667 14.6514 13.6819 11.6667 10 11.6667Z"
      stroke={activePage === "Promoters" ? "#4D70FF" : "#6B7280"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
