import React from "react";

const FinancialTools = () => {
  return (
    <div>
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Financial Tools</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6.042m0 6.042v6.042m6-3v-3m-12 3v-3"
              />
            </svg>
            EMI Calculator
          </button>
          <button className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10.125v2.25m0-2.25a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
            FD Calculator
          </button>
        </div>
      </section>
    </div>
  );
};

export default FinancialTools;
<section className="mt-8">
  <h2 className="text-xl font-semibold mb-4">Financial Tools</h2>
  <div className="flex flex-wrap gap-4">
    <button className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6.042m0 6.042v6.042m6-3v-3m-12 3v-3"
        />
      </svg>
      EMI Calculator
    </button>
    <button className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 10.125v2.25m0-2.25a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        />
      </svg>
      FD Calculator
    </button>
  </div>
</section>;
