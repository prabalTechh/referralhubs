export const PayoutsIcon = ({activePage}:any) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 15.8333V4.16667" stroke={activePage === "Payouts" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.1667 11.6667L10 15.8333L5.83334 11.6667" stroke={activePage === "Payouts" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );