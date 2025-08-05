import React from "react";
import { NavLink } from "react-router";

const QuickAction = () => {
  return (
    <div>
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <NavLink to={"/QuickActions/Transfer"}>
            <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-blue-400 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25v.75a.75.75 0 01-.75.75h-16.5a.75.75 0 01-.75-.75V18z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                />
              </svg>
              Transfer
            </div>
          </NavLink>

          <button className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-green-400 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25v.75a.75.75 0 01-.75.75h-16.5a.75.75 0 01-.75-.75V18z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
              />
            </svg>
            Pay Bills
          </button>
          <button className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-purple-400 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 01-3-3m-6 3a3 3 0 003-3m10.39 7.553a11.25 11.25 0 01-4.477-4.17M3 10.5a8.25 8.25 0 0113.803-4.807 9.75 9.75 0 00-13.803 4.807z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18v-1.5a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75V18a2.25 2.25 0 01-2.25 2.25H8.25a2.25 2.25 0 01-2.25-2.25z"
              />
            </svg>
            Recharge
          </button>
          <button className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-yellow-400 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            Statements
          </button>
        </div>
      </section>
    </div>
  );
};

export default QuickAction;
