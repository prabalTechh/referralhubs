export   const AIAgentIcon = (activePage:any) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke={activePage === "AI Agent" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 10C7.5 8.619 8.619 7.5 10 7.5C11.381 7.5 12.5 8.619 12.5 10C12.5 11.381 11.381 12.5 10 12.5" stroke={activePage === "AI Agent" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.16666 12.5H10" stroke={activePage === "AI Agent" ? "#4D70FF" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );