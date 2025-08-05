import React from "react";
import { NavLink } from "react-router";

const LatestOffers = () => {
  return (
    <div className="">
      <section className="my-20">
        <h2 className="text-xl font-semibold mb-4">Latest Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Special Loan Rates</h3>
            <p className="text-sm text-gray-400 mb-2">
              Limited time offer on personal loans.
            </p>
            <NavLink to={"/LatestOffer/LearnMore"}>
              <div href="#" className="text-blue-400 text-sm flex items-center">
                Learn More
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
              </div>
            </NavLink>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Cashback Offer</h3>
            <p className="text-sm text-gray-400 mb-2">
              Earn cashback on specific transactions.
            </p>
            <a href="#" className="text-blue-400 text-sm flex items-center">
              View Details
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
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestOffers;
<section className="mt-8">
  <h2 className="text-xl font-semibold mb-4">Latest Offers</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">Special Loan Rates</h3>
      <p className="text-sm text-gray-400 mb-2">
        Limited time offer on personal loans.
      </p>
      <a href="#" className="text-blue-400 text-sm flex items-center">
        Learn More
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
      </a>
    </div>
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">Cashback Offer</h3>
      <p className="text-sm text-gray-400 mb-2">
        Earn cashback on specific transactions.
      </p>
      <a href="#" className="text-blue-400 text-sm flex items-center">
        View Details
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
      </a>
    </div>
  </div>
</section>;
