import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BillCard from "../BillsLayout/BillCard";
import DropdownDemo from "../DropDown";

const Bills = () => {
  let billsData = useLoaderData();
  console.log(billsData);
  let [selectedValue, setSelectedValue] = useState(null);
  console.log(selectedValue);

  return (
    <div>
      <DropdownDemo setSelectedValue={setSelectedValue}></DropdownDemo>
      <div className="bg-gray-700 m-5 rounded-3xl lg:m-15"></div>
      <div className="flex flex-col items-center">
        {!selectedValue && (
          <div className="grid lg:grid-cols-3 gap-3 lg:gap-10 m-5 lg:m-20">
            {billsData.map((billData) => (
              <BillCard key={billData.id} billData={billData}></BillCard>
            ))}
          </div>
        )}
        <div className="grid lg:grid-cols-2 gap-3 lg:gap-10 m-5 lg:m-20">
        {billsData
          .filter((billData) => billData.billType == selectedValue)
          .map((billData) => (
            <BillCard key={billData.id} billData={billData}></BillCard>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Bills;
Bills;
