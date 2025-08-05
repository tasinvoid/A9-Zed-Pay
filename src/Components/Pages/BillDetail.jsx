import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { getItemFromLC } from "../utilities/handleLC";
import { ToastContainer, toast } from "react-toastify";
const BillDetail = () => {
  let navigate = useNavigate();
  let { updateBalance } = useContext(AuthContext);
  let params = useParams();
  let billsData = useLoaderData();
  let billId = parseInt(params.id);
  let selectedBill = billsData.find((bill) => {
    return bill.id === billId;
  });
  let { id, billType, icon, organization, amount, dueDate } = selectedBill;
  const notify = (msg) => toast(msg);
  function handlePayNowBtn() {
    const currentStoredIds = getItemFromLC("PaidBillIds");
    console.log(currentStoredIds);
    if (currentStoredIds.includes(id)) {
      console.log("already paid");
      notify("Bill Already Paid");
    } else {
      updateBalance(amount);
      currentStoredIds.push(id);
      let dataStringified = JSON.stringify(currentStoredIds);
      localStorage.setItem("PaidBillIds", dataStringified);
      notify("Successfully Paid");
      navigate("/bills");
    }
  }
  return (
    <div>
      <ToastContainer />
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-10 lg:flex md:flex md:gap-5 items-center justify-center lg:gap-10 lg:mx-30 mx-2 my-5">
        <img src={icon} className="h-60 w-57 rounded-2xl" alt="" />
        <div>
          <p className="text-3xl font-bold">{organization}</p>

          <p>Bill Type: {billType}</p>
          <p className="font-bold text-lg pb-7">{}</p>

          <p className="flex items-center border-t-1 border-b-1 p-5">
            {" "}
            Due Date : {dueDate}
          </p>

          <div className="flex mt-3 gap-1">
            <p className="font-bold">Amount:</p>
            <p>
              {" "}
              <span className="text-green-300 font-bold"> {amount} Taka </span>
              (incl. Vat){" "}
            </p>
          </div>
          <button
            onClick={handlePayNowBtn}
            className="btn btn-primary mt-10 w-50"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillDetail;
