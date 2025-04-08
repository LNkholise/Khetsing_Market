import React, { useState } from "react";

const Tabs = ({ setFilter }) => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setFilter(tab);
  };

  return (
    <div className="flex justify-center space-x-4 p-4">
      {["all", "product", "service"].map((tab) => (
        <button
          key={tab}
          className={`px-6 py-2 rounded-full text-lg font-medium transition-all 
          ${
            activeTab === tab
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

