// React component for the AI Assistant widget using Tailwind CSS
import React, { useState, useRef, useEffect } from 'react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hey there! I'm Rex Helper. How can I assist? This AI assistant helps keep you up to speed on your analytics, generate campaigns, AI-generated reports out for you. You always get a click away!"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messageEndRef = useRef(null);

  // Quick link actions
  const quickLinks = [
    { id: 'new-campaign', label: 'New Campaign', action: () => handleQuickAction('new-campaign') },
    { id: 'create-report', label: 'Create Report', action: () => handleQuickAction('create-report') },
    { id: 'find-user', label: 'Find User', action: () => handleQuickAction('find-user') },
    { id: 'view-analytics', label: 'View Analytics', action: () => handleQuickAction('view-analytics') },
  ];

  // Handle quick action clicks
  const handleQuickAction = (action:any) => {
    // Add user message for the action they clicked
    let userMessage = '';
    switch(action) {
      case 'new-campaign':
        userMessage = 'I want to create a new campaign';
        break;
      case 'create-report':
        userMessage = 'Generate a report for me';
        break;
      case 'find-user':
        userMessage = 'Help me find a user';
        break;
      case 'view-analytics':
        userMessage = 'Show me analytics';
        break;
      default:
        userMessage = 'I need help';
    }
    
    addMessage('user', userMessage);
    
    // Simulate AI response
    setTimeout(() => {
      let aiResponse = '';
      switch(action) {
        case 'new-campaign':
          aiResponse = "Let's set up a new campaign! What type of campaign are you looking to create?";
          break;
        case 'create-report':
          aiResponse = "I can help generate a report. What metrics would you like to include?";
          break;
        case 'find-user':
          aiResponse = "Which user are you looking for? You can provide their name or ID.";
          break;
        case 'view-analytics':
          aiResponse = "Here's a summary of your recent analytics. Would you like more details on any specific metric?";
          break;
        default:
          aiResponse = "How can I assist you today?";
      }
      addMessage('ai', aiResponse);
    }, 1000);
  };

  // Scroll to bottom of messages
  useEffect(() => {
    //@ts-ignore
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Toggle assistant visibility
  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  // Add a new message
  const addMessage = (sender:string, text:string) => {
    setMessages([...messages, { sender, text }]);
  };

  // Handle send message
  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    // Add user message
    addMessage('user', inputText);
    setInputText('');
    
    // Simulate AI response
    setTimeout(() => {
      addMessage('ai', "I'm processing your request. Let me help you with that.");
      // Here you would normally call your AI service API
    }, 1000);
  };

  // Handle input key press (Enter to send)
  const handleKeyPress = (e:any) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-20 right-20 z-50 font-sans">
      {/* AI Agent button */}
      <button 
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        onClick={toggleAssistant}
      >
        <div className="flex items-center justify-center w-6 h-6 bg-white text-blue-600 rounded-full text-xs font-bold mr-2">AI</div>
        <span>Bot</span>
      </button>

      {/* Chat dialog */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden">
          <div className="flex justify-between items-center px-4 py-3 bg-gray-100 border-b border-gray-200">
            <div className="font-semibold text-gray-800">AI Agent</div>
            <button className="text-gray-500 text-xl" onClick={toggleAssistant}>×</button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-3">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start ${message.sender === 'user' ? 'justify-end' : ''}`}>
                {/* {message.sender === 'ai' && (
                  <div className="flex items-center justify-center w-7 h-7 bg-blue-600 text-white rounded-full text-xs font-bold mr-2">
                    AI
                  </div>
                )} */}
                <div className={`px-3 py-2 rounded-lg text-sm ${
                  message.sender === 'ai' 
                    ? 'bg-gray-100 text-gray-800 rounded-tl-sm' 
                    : 'bg-blue-600 text-white rounded-tr-sm'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>
          
          <div className="px-4 py-2 border-t border-gray-200">
            <div className="text-xs text-gray-500 mb-2">Quick Links:</div>
            <div className="flex flex-wrap gap-2">
              {quickLinks.map(link => (
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