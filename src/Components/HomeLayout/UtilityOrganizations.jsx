import React, { use } from "react";
import { ChevronRight } from "lucide-react";
let utilityOrganizationsData = fetch("/UtilityOrganizations.json").then((res) =>
  res.json()
);
const UtilityOrganizations = () => {
  let utilityOrganizations = use(utilityOrganizationsData);
  return (
    <div className="mb-8 mt-15 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10">
      <div className="flex justify-center items-center mb-8">
        <h2 className="text-xl font-bold">Pay Utility Bills</h2>
      </div>

      <div className="grid grid-cols-4 gap-3 lg:gap-10">
        {utilityOrganizations.slice(0, 8).map((org) => (
          <div key={org.id} className="flex flex-col items-center">
            <div className={` text-white text-2xl mb-1 `}>
              <img src={org.icon} className="w-17 h-17 border-5 border-gray-800 rounded-2xl lg:w-20 lg:h-20 " alt="" />
            </div>
            <span className="lg:text-xl text-center text-xs">{org.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UtilityOrganizations;
