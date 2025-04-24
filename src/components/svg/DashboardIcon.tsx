export  const DashboardIcon = ({activePage}:any) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.33334" y="3.33334" width="5.83333" height="5.83333" rx="1" stroke={activePage === "Dashboard" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3.33334" y="12.5" width="5.83333" height="4.16667" rx="1" stroke={activePage === "Dashboard" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="12.5" y="3.33334" width="4.16667" height="9.16667" rx="1" stroke={activePage === "Dashboard" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="12.5" y="15" width="4.16667" height="1.66667" rx="0.833333" stroke={activePage === "Dashboard" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );