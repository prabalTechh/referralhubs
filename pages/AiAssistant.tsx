// React component for the AI Assistant widget using Tailwind CSS
import React, { useState, useRef, useEffect } from "react";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hey there! I'm Rex Helper. How can I assist? This AI assistant helps keep you up to speed on your analytics, generate campaigns, AI-generated reports out for you. You always get a click away!",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messageEndRef = useRef(null);

  // Quick link actions
  const quickLinks = [
    {
      id: "new-campaign",
      label: "New Campaign",
      action: () => handleQuickAction("new-campaign"),
    },
    {
      id: "create-report",
      label: "Create Report",
      action: () => handleQuickAction("create-report"),
    },
    {
      id: "find-user",
      label: "Find User",
      action: () => handleQuickAction("find-user"),
    },
    {
      id: "view-analytics",
      label: "View Analytics",
      action: () => handleQuickAction("view-analytics"),
    },
  ];

  // Handle quick action clicks
  const handleQuickAction = (action: any) => {
    // Add user message for the action they clicked
    let userMessage = "";
    switch (action) {
      case "new-campaign":
        userMessage = "I want to create a new campaign";
        break;
      case "create-report":
        userMessage = "Generate a report for me";
        break;
      case "find-user":
        userMessage = "Help me find a user";
        break;
      case "view-analytics":
        userMessage = "Show me analytics";
        break;
      default:
        userMessage = "I need help";
    }

    addMessage("user", userMessage);

    // Simulate AI response
    setTimeout(() => {
      let aiResponse = "";
      switch (action) {
        case "new-campaign":
          aiResponse =
            "Let's set up a new campaign! What type of campaign are you looking to create?";
          break;
        case "create-report":
          aiResponse =
            "I can help generate a report. What metrics would you like to include?";
          break;
        case "find-user":
          aiResponse =
            "Which user are you looking for? You can provide their name or ID.";
          break;
        case "view-analytics":
          aiResponse =
            "Here's a summary of your recent analytics. Would you like more details on any specific metric?";
          break;
        default:
          aiResponse = "How can I assist you today?";
      }
      addMessage("ai", aiResponse);
    }, 1000);
  };

  // Scroll to bottom of messages
  useEffect(() => {
    //@ts-ignore
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Toggle assistant visibility
  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  // Add a new message
  const addMessage = (sender: string, text: string) => {
    setMessages([...messages, { sender, text }]);
  };

  // Handle send message
  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    // Add user message
    addMessage("user", inputText);
    setInputText("");

    // Simulate AI response
    setTimeout(() => {
      addMessage(
        "ai",
        "I'm processing your request. Let me help you with that."
      );
      // Here you would normally call your AI service API
    }, 1000);
  };

  // Handle input key press (Enter to send)
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-20 right-16 z-50 font-sans">
      {/* AI Agent button */}
      <button
        className="flex items-center p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        onClick={toggleAssistant}
      >
        {/* <div className="flex items-center justify-center w-6 h-6 bg-white text-blue-600 rounded-full text-xs font-bold mr-2">AI</div>
        <span>Bot</span> */}
        <svg
          width="25"
          height="28"
          viewBox="0 0 25 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative right-1 size-5"
        >
          <path
            d="M8.76547 4.31C9.51297 2.1225 12.5355 2.05625 13.4217 4.11125L13.4967 4.31125L14.5055 7.26125C14.7367 7.93779 15.1102 8.55689 15.601 9.07678C16.0918 9.59667 16.6884 10.0053 17.3505 10.275L17.6217 10.3762L20.5717 11.3838C22.7592 12.1313 22.8255 15.1537 20.7717 16.04L20.5717 16.115L17.6217 17.1238C16.945 17.3548 16.3256 17.7283 15.8055 18.2191C15.2854 18.7099 14.8766 19.3065 14.6067 19.9688L14.5055 20.2388L13.498 23.19C12.7505 25.3775 9.72797 25.4438 8.84297 23.39L8.76547 23.19L7.75797 20.24C7.52695 19.5632 7.15344 18.9439 6.66265 18.4238C6.17186 17.9037 5.57521 17.4949 4.91297 17.225L4.64297 17.1238L1.69297 16.1162C-0.495778 15.3687 -0.562028 12.3462 1.49297 11.4612L1.69297 11.3838L4.64297 10.3762C5.31951 10.1451 5.93861 9.77149 6.4585 9.28071C6.97839 8.78993 7.38699 8.19336 7.65672 7.53125L7.75797 7.26125L8.76547 4.31ZM21.1317 2.25859e-07C21.3656 -2.94965e-07 21.5947 0.0655979 21.7932 0.189339C21.9916 0.313081 22.1513 0.490003 22.2542 0.7L22.3142 0.84625L22.7517 2.12875L24.0355 2.56625C24.2698 2.64587 24.4753 2.79327 24.6258 2.98977C24.7763 3.18627 24.865 3.42302 24.8808 3.67003C24.8966 3.91703 24.8387 4.16316 24.7145 4.37723C24.5903 4.5913 24.4053 4.76367 24.183 4.8725L24.0355 4.9325L22.753 5.37L22.3155 6.65375C22.2357 6.88804 22.0882 7.09337 21.8916 7.24374C21.6951 7.39411 21.4583 7.48274 21.2113 7.4984C20.9643 7.51407 20.7182 7.45606 20.5042 7.33172C20.2902 7.20739 20.1179 7.02233 20.0092 6.8L19.9492 6.65375L19.5117 5.37125L18.228 4.93375C17.9936 4.85413 17.7882 4.70673 17.6377 4.51023C17.4872 4.31373 17.3984 4.07698 17.3826 3.82997C17.3668 3.58297 17.4247 3.33684 17.549 3.12277C17.6732 2.9087 17.8582 2.73633 18.0805 2.6275L18.228 2.5675L19.5105 2.13L19.948 0.84625C20.0323 0.599282 20.1917 0.384886 20.404 0.233124C20.6163 0.0813613 20.8708 -0.000156602 21.1317 2.25859e-07Z"
            fill="white"
          />
        </svg>
      </button>

      {/* Chat dialog */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden">
          <div className="flex justify-between items-center px-4 py-3 bg-gray-100 border-b border-gray-200">
            <div className="font-semibold text-gray-800">AI Agent</div>
            <button className="text-gray-500 text-xl" onClick={toggleAssistant}>
              ×
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start ${
                  message.sender === "user" ? "justify-end" : ""
                }`}
              >
                {/* {message.sender === 'ai' && (
                  <div className="flex items-center justify-center w-7 h-7 bg-blue-600 text-white rounded-full text-xs font-bold mr-2">
                    AI
                  </div>
                )} */}
                <div
                  className={`px-3 py-2 rounded-lg text-sm ${
                    message.sender === "ai"
                      ? "bg-gray-100 text-gray-800 rounded-tl-sm"
                      : "bg-blue-600 text-white rounded-tr-sm"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>

          <div className="px-4 py-2 border-t border-gray-200">
            <div className="text-xs text-gray-500 mb-2">Quick Links:</div>
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-700 hover:bg-gray-200 transition-colors"
                  onClick={link.action}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center px-4 py-3 border-t border-gray-200">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything..."
              className="flex-1 px-3 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500"
            />
            <button
              className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
