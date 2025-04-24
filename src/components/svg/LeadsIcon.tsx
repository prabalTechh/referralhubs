export const LeadsIcon = (activePage:any) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 8.33333H12.5" stroke={activePage === "Leads" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 11.6667H12.5" stroke={activePage === "Leads" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.6667 4.99999V15C16.6667 16.3807 15.5474 17.5 14.1667 17.5H5.83334C4.45263 17.5 3.33334 16.3807 3.33334 15V4.99999C3.33334 3.61928 4.45263 2.49999 5.83334 2.49999H14.1667C15.5474 2.49999 16.6667 3.61928 16.6667 4.99999Z" stroke={activePage === "Leads" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
