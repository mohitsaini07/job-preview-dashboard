import { useState } from "react";

const JobPreview = () => {
  const [activeTab, setActiveTab] = useState("Job preview");

  const tabs = ["Job preview", "Applicants", "Match", "Messages"];

  return (
    <div className="flex items-center gap-16 pt-5 border border-custom-gray px-[100px]">
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative cursor-pointer transition-all duration-300 ${
            activeTab === tab
              ? "text-orange-600 font-semibold pb-4"
              : "text-gray-300 font-medium pb-4"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-14 border-b-2 border-orange-600"
              style={{ transition: "width 0.3s" }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JobPreview;
