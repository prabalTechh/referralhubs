import React, { useState, useRef, useEffect } from 'react';

const AiAgent = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'ai',
            content: 'Welcome Back, Kadin! How can I help you today?'
        },
        {
            id: 2,
            type: 'user',
            content: 'Hey, I want to create a new referral campaign, but I\'d like some help from AI to make sure I\'ll set up correctly and performs well. Can you guide me through it?'
        },
        {
            id: 3,
            type: 'ai',
            content: 'I\'d be happy to help you create a high-converting referral campaign that\'ll rock. Let\'s start by defining your main objective. What\'s the primary goal of this campaign?'
        },
        {
            id: 4,
            type: 'user',
            content: 'My main goal is to increase sales through referrals. I want existing customers to bring in new paying customers, and I\'d like to reward them for it.'
        },
        {
            id: 5,
            type: 'ai',
            content: 'That\'s a great goal! Referral campaigns work best when there\'s a strong incentive. What kind of rewards would you like to offer advocates who successfully refer new customers to your business?',
            highlight: true
        },
        {
            id: 6,
            type: 'user',
            content: 'Discount on next purchase'
        },
        {
            id: 7,
            type: 'ai',
            content: 'Smart choice! Discounts are a great way to encourage both referrals and repeat purchases. How much discount would you like to offer your successful referrers?'
        },
        {
            id: 8,
            type: 'user',
            content: '15%'
        },
        {
            id: 9,
            type: 'ai',
            content: '15% sounds like a strong incentive! Now, let\'s define when a referral is considered valid. When should the referrer receive their reward?'
        },
        {
            id: 10,
            type: 'user',
            content: 'When the referred person signs up'
        },
        {
            id: 11,
            type: 'ai',
            content: 'That\'s a great way to ensure that your campaign drives real revenue! Now, how long do you want this referral campaign to run?'
        },
        {
            id: 12,
            type: 'user',
            content: 'I want to test this campaign for a while before making any long-term decisions, so I think 3 months would be ideal. If it works well, I can always extend it later.'
        },
        {
            id: 13,
            type: 'ai',
            content: 'Got it! Here\'s a quick summary of your campaign:',
            summary: {
                goalText: 'Goal: Increase sales',
                rewardText: 'Reward: 15% discount on the next purchase',
                conditionText: 'Condition: Reward is given when the referred person makes a purchase',
                durationText: 'Duration: 3 months'
            }
        }
    ]);
    const [inputText, setInputText] = useState('');
    const messageEndRef = useRef(null);

    const quickLinks = [
        { id: 'new-referral', label: 'NEW REFERRAL', icon: '🔄' },
        { id: 'create-campaign', label: 'CREATE CAMPAIGN', icon: '✏️' },
        { id: 'follow-up', label: 'FOLLOW UP', icon: '👀' },
        { id: 'view-referral', label: 'VIEW REFERRAL', icon: '👁️' },
    ];

    // Scroll to bottom of messages
    useEffect(() => {
        //@ts-ignore
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = () => {
        if (inputText.trim() === '') return;
        
        // Add user message
        setMessages([...messages, { id: messages.length + 1, type: 'user', content: inputText }]);
        setInputText('');
        
        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, { 
                id: prev.length + 1, 
                type: 'ai', 
                content: "I've received your message and I'm processing it. Let me help you with that."
            }]);
        }, 1000);
    };

    const handleKeyPress = (e:any) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleReset = () => {
        setMessages([
            {
                id: 1,
                type: 'ai',
                content: 'Welcome Back, Kadin! How can I help you today?'
            }
        ]);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50 p-2">
            {/* Header */}
            <div className="flex justify-between items-center py-4 px-4 border-b border-gray-200">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <span className="font-medium">AI Agent</span>
                </div>
                <button 
                    onClick={handleReset}
                    className="flex items-center text-gray-500 hover:text-gray-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    Reset
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.type === 'ai' && (
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2 mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                        )}
                        
                        <div className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 text-sm ${
                            message.type === 'ai' 
                                ? message.highlight ? 'border border-blue-300 bg-blue-50' : 'bg-white border border-gray-200' 
                                : 'bg-blue-600 text-white'
                        }`}>
                            {message.content}
                            
                            {message.summary && (
                                <div className="mt-2 bg-blue-50 p-3 rounded-md text-sm">
                                    <div className="flex items-start mb-1">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>{message.summary.goalText}</span>
                                    </div>
                                    <div className="flex items-start mb-1">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>{message.summary.rewardText}</span>
                                    </div>
                                    <div className="flex items-start mb-1">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>{message.summary.conditionText}</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>{message.summary.durationText}</span>
                                    </div>
                                    
                                    <div className="flex mt-4 space-x-2">
                                        <button className="flex-1 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
                                            Edit
                                        </button>
                                        <button className="flex-1 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                            Launch
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {message.type === 'user' && (
                            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center ml-2 mt-1">
                                <span className="text-white text-xs">K</span>
                            </div>
                        )}
                    </div>
                ))}
                
                {messages[messages.length - 1]?.type === 'user' && (
                    <div className="flex justify-end items-center text-xs text-gray-500 pr-10">
                        <span>Launch</span>
                        <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center ml-2">
                            <span className="text-white text-xs">K</span>
                        </div>
                    </div>
                )}
                
                <div ref={messageEndRef} />
            </div>

            {/* Quick Links */}
            <div className="border-t border-gray-200 p-4">
                <div className="mb-2 text-sm font-medium">Quick Links</div>
                <div className="flex flex-wrap gap-2">
                    {quickLinks.map(link => (
                        <button 
                            key={link.id}
                            className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-xs text-gray-600 hover:bg-gray-100"
                        >
                            <span className="mr-1">{link.icon}</span>
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4 flex items-center">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1 p-2 border-none bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSendMessage}
                    className="ml-2 p-2 text-blue-600 hover:text-blue-800"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default AiAgent;