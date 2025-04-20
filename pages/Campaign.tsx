'use client'
import { useState } from 'react';
import { Search, Filter, Plus, Trash2, Eye } from 'lucide-react';

const Campaign = () => {
  const [activeTab, setActiveTab] = useState('past');
  const [activeForm, setActiveForm] = useState('leads');
  const [rewardType, setRewardType] = useState('discount');
  
  // Demo campaigns for the past promoters view
  const campaigns = [
    {
      id: 1,
      name: 'Summer Referral Program',
      status: 'active',
      dateRange: '5/31/2024 - 8/30/2024',
      referrals: 245,
      conversion: 32,
      roi: 287,
      suggestion: 'Increase reward by 10% to boost conversion rates during peak season'
    },
    {
      id: 2,
      name: 'Early Bird Special',
      status: 'inactive',
      dateRange: '8/20/2024 - 9/19/2024',
      referrals: 300,
      conversion: 40,
      roi: 320,
      suggestion: 'Extend your campaign! Strong engagement suggests higher conversions with more time.'
    }
  ];

  const renderTabs = () => (
    <div className="flex space-x-2 mb-6">
      <button 
        className={`px-4 py-2 rounded-md ${activeTab === 'past' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
        onClick={() => setActiveTab('past')}
      >
        Past Promoters
      </button>
      <button 
        className={`px-4 py-2 rounded-md ${activeTab === 'new-promoter' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
        onClick={() => setActiveTab('new-promoter')}
      >
        New Promoters
      </button>
      <button 
        className={`px-4 py-2 rounded-md ${activeTab === 'new-leads' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
        onClick={() => setActiveTab('new-leads')}
      >
        New Leads
      </button>
    </div>
  );

  const renderPastPromoters = () => (
    <div className="w-full">
      <div className="flex justify-between mb-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
          <Plus size={18} className="mr-2" />
          Create New Campaign
        </button>
        <div className="flex space-x-2">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search campaigns..." 
              className="pl-10 pr-4 py-2 border border-[#AAAAAA] rounded-md w-64"
            />
          </div>
          <button className="border border-[#AAAAAA] rounded-md px-4 py-2 flex items-center">
            <Filter size={16} className="mr-2" />
            Filter
          </button>
        </div>
      </div>
      
      <div className="text-sm text-gray-500 mb-4">
        2 Campaigns • 1 Active
      </div>

      <div className="grid grid-cols-2 border-[#AAAAAA] gap-6">
        {campaigns.map(campaign => (
          <div key={campaign.id} className="border border-[#AAAAAA] rounded-lg overflow-hidden">
            <div className="px-4 py-3 flex justify-between items-center border-b border-[#AAAAAA]">
              <div>
                <h3 className="font-medium">{campaign.name}</h3>
                <p className="text-sm text-gray-500">{campaign.dateRange}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs ${campaign.status === 'active' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                {campaign.status === 'active' ? 'Active' : 'Inactive'}
              </div>
            </div>
            
            <div className="grid grid-cols-3 divide-x border-[#AAAAAA] ">
              <div className="px-4 py-3 text-center">
                <p className="text-sm text-gray-500">Referrals</p>
                <p className="font-semibold text-lg">{campaign.referrals}</p>
              </div>
              <div className="px-4 py-3 text-center">
                <p className="text-sm text-gray-500">Conversion</p>
                <p className="font-semibold text-lg">{campaign.conversion}%</p>
              </div>
              <div className="px-4 py-3 text-center">
                <p className="text-sm text-gray-500">ROI</p>
                <p className="font-semibold text-lg">{campaign.roi}%</p>
              </div>
            </div>
            
            <div className={`px-4 py-3 ${campaign.status === 'active' ? 'bg-blue-50' : 'bg-purple-50'}`}>
              <p className="text-sm flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-1.5 mr-2"></span>
                {campaign.suggestion}
              </p>
            </div>
            
            <div className="px-4 py-3 flex space-x-4 text-gray-500">
              <button className="flex items-center">
                <Trash2 size={16} className="mr-1" />
              </button>
              <button className="flex items-center">
                <Eye size={16} className="mr-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFormTabs = () => (
    <div className="flex mb-6">
      <button 
        className={`px-6 py-2 ${activeForm === 'promoter' ? 'border-b-2  border-blue-600 text-blue-600' : 'text-gray-500'}`}
        onClick={() => setActiveForm('promoter')}
      >
        Promoter Settings
      </button>
      <button 
        className={`px-6 py-2 ${activeForm === 'leads' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
        onClick={() => setActiveForm('leads')}
      >
        Leads Settings
      </button>
    </div>
  );

  const renderNewPromoterForm = () => (
    <div className="w-full bg-white p-6 rounded-lg">
      {renderFormTabs()}
      
      <div className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Campaign Name</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded-md"
            defaultValue="Summer Referral Special"
          />
        </div>

        {activeForm === 'promoter' ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Reward Type*</label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    className={`p-2 rounded-md ${rewardType === 'points' ? 'bg-blue-100 text-blue-600' : 'bg-blue-50'}`}
                    onClick={() => setRewardType('points')}
                  >
                    Points
                    <div className="text-xs text-gray-500">(It is measured in points)</div>
                  </button>
                  <button 
                    className={`p-2 rounded-md ${rewardType === 'discount' ? 'bg-blue-100 text-blue-600' : 'bg-blue-50'}`}
                    onClick={() => setRewardType('discount')}
                  >
                    Discount
                  </button>
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium">Reward Value*</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md"
                  value={rewardType === 'points' ? '200 points' : '20%'}
                />
              </div>
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Promoter Message*</label>
              <textarea 
                className="w-full p-2 border rounded-md h-24"
                value="Hey! Share this with your friends and get $20 for each successful signup!"
              ></textarea>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Reward Type*</label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    className={`p-2 rounded-md ${rewardType === 'discount' ? 'bg-blue-100 text-blue-600' : 'bg-blue-50'}`}
                    onClick={() => setRewardType('discount')}
                  >
                    Discount
                  </button>
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium">Reward Value*</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md"
                  defaultValue="20%"
                />
              </div>
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Referree Message*</label>
              <textarea 
                className="w-full p-2 border rounded-md h-24"
                defaultValue="You've been invited! Sign up now and get 15% off your first order"
              ></textarea>
            </div>
            
            <div>
              <label className="flex items-center mb-2 font-medium">
                Form Fields
                <span className="ml-2 text-gray-400 text-sm">•</span>
              </label>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" checked />
                  <label>Full Name</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" checked />
                  <label>Email Address</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label>Phone Number</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label>Agree to Terms & Conditions & Opt-in</label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderContent = () => {
    if (activeTab === 'past') {
      return renderPastPromoters();
    } else if (activeTab === 'new-promoter' || activeTab === 'new-leads') {
      return renderNewPromoterForm();
    }
    return null;
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {renderTabs()}
        {renderContent()}
      </div>
    </div>
  );
};

export default Campaign;