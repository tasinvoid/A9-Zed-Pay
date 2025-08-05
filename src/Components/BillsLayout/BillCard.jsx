import React from "react";
import { NavLink } from "react-router";
import { FaCheck } from "react-icons/fa";
const BillCard = ({ billData }) => {
  let { id, billType, icon, organization, amount, dueDate } = billData;
  const alreadyPaid = localStorage.getItem('PaidBillIds')
  console.log(alreadyPaid);
  

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center gap-3">
      <button className="text-white-400 text-lg flex items-center font-bold border-b-1 mb-2">
        {billType} Bill
      </button>
      <img src={icon} className="h-20 w-20 rounded-full " alt="" />
      <div></div>
      {
        alreadyPaid.includes(id) && <div className="bg-green-600 p-1  absolute top-1 left-0"><FaCheck/></div>
        
      }

      <p>{organization}</p>
      <p className="text-sm text-gray-400 mb-2">Due Date : {dueDate}</p>
      <p className="flex items-center ">Amount : {amount} Taka </p>

      <NavLink to={`/bill/${id}`}>
        <button className="text-blue-400 text-sm flex items-center">
          View Details{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </NavLink>
    </div>
  );
};

export default BillCard;
