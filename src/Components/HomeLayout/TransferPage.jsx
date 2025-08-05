import React, { useState } from "react";
// Assumed path, adjust as necessary.  Relative paths are preferred.

import {
  Banknote,
  ArrowRight,
  User,
  Users,
  Building2,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
// import { cn } from "./lib/utils"; //Adjust path
import { motion, AnimatePresence } from "framer-motion";

// Mock Data (Replace with actual API calls)
const beneficiaries = [
  { id: "1", name: "John Doe", type: "Personal", accountNumber: "1234567890" },
  {
    id: "2",
    name: "Jane Smith",
    type: "Personal",
    accountNumber: "9876543210",
  },
  {
    id: "3",
    name: "ABC Corporation",
    type: "Merchant",
    accountNumber: "5555666677",
  },
  {
    id: "4",
    name: "XYZ Foundation",
    type: "Organization",
    accountNumber: "1122334455",
  },
];

// Animation Variants
const transferCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const confirmationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, type: "spring", stiffness: 120 },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

// Helper function for simulating API calls
const simulateApiCall = (data, delay = 1500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

const TransferPage = () => {
  const [step, setStep] = useState("selection");
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [amount, setAmount] = useState("");
  const [transactionStatus, setTransactionStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleBeneficiarySelect = (beneficiary) => {
    setSelectedBeneficiary(beneficiary);
    setStep("amount");
  };

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  const handleTransfer = async () => {
    if (!selectedBeneficiary || !amount) {
      setErrorMessage("Please select a beneficiary and enter an amount.");
      setStep("error");
      return;
    }

    const amountNum = Number(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      setErrorMessage(
        "Invalid amount. Please enter a valid number greater than zero."
      );
      setStep("error");
      return;
    }

    setTransactionStatus("processing");
    setStep("confirmation");
    try {
      const response = await simulateApiCall({
        success: true,
        transactionId: "TXN12345",
      });

      if (response.success) {
        setTransactionStatus("success");
        setStep("success");
      } else {
        setTransactionStatus("error");
        setErrorMessage(response.message || "Transaction failed.");
        setStep("error");
      }
    } catch (error) {
      setTransactionStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred.");
      setStep("error");
    }
  };

  const resetTransaction = () => {
    setStep("selection");
    setSelectedBeneficiary(null);
    setAmount("");
    setTransactionStatus("idle");
    setErrorMessage("");
  };

  const getBeneficiaryIcon = (type) => {
    switch (type) {
      case "Personal":
        return <User className="w-5 h-5 text-blue-400" />;
      case "Merchant":
        return <Building2 className="w-5 h-5 text-green-400" />;
      case "Organization":
        return <Users className="w-5 h-5 text-purple-400" />;
      default:
        return <User className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Transfer Funds
        </h1>

        <AnimatePresence mode="wait">
          {step === "selection" && (
            <motion.div
              key="selection"
              variants={transferCardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold">Select Beneficiary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {beneficiaries.map((beneficiary) => (
                  <div
                    key={beneficiary.id}
                    className={
                      ("bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/50",
                      "transition-all duration-300 hover:scale-[1.02] cursor-pointer",
                      "shadow-lg hover:shadow-blue-500/20")
                    }
                    onClick={() => handleBeneficiarySelect(beneficiary)}
                  >
                    <div className="flex flex-row items-center gap-4">
                      {getBeneficiaryIcon(beneficiary.type)}
                      <div className="text-lg font-semibold text-white">
                        {beneficiary.name}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">
                        Account: {beneficiary.accountNumber}
                      </p>
                      <p className="text-xs text-gray-500">
                        {beneficiary.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === "amount" && selectedBeneficiary && (
            <motion.div
              key="amount"
              variants={transferCardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <h2 className="text-2xl font-semibold">Enter Amount</h2>
              <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                <div>
                  <CardTitle className="text-lg font-semibold text-white">
                    Transfer to: {selectedBeneficiary.name}
                  </CardTitle>
                </div>
                <div className="space-y-4">
                  <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    className="bg-black/20 text-white border-blue-500/30"
                  />
                  <button
                    onClick={handleTransfer}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                    disabled={!amount}
                  >
                    Continue <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button
                    variant="outline"
                    onClick={() => setStep("selection")}
                    className="w-full bg-white/5 hover:bg-white/10 text-white border-white/10"
                  >
                    Back
                  </button>
                </div>
              </Card>
            </motion.div>
          )}

          {step === "confirmation" && selectedBeneficiary && (
            <motion.div
              key="confirmation"
              variants={confirmationVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex items-center justify-center"
            >
              <Card className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                <div>
                  <CardTitle className="text-2xl font-semibold text-white text-center">
                    Confirm Transfer
                  </CardTitle>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-black/20">
                    <p className="text-gray-400">To:</p>
                    <p className="text-lg font-semibold text-white">
                      {selectedBeneficiary.name} (
                      {selectedBeneficiary.accountNumber})
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-black/20">
                    <p className="text-gray-400">Amount:</p>
                    <p className="text-lg font-semibold text-white">
                      ৳{amount}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    {transactionStatus === "processing" && (
                      <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                    )}
                  </div>
                  <div className="flex justify-between gap-4">
                    <button
                      onClick={handleTransfer}
                      className={cn(
                        "w-1/2 text-white",
                        transactionStatus === "processing"
                          ? "bg-gray-500"
                          : "bg-green-500 hover:bg-green-600"
                      )}
                      disabled={transactionStatus === "processing"}
                    >
                      Confirm
                    </button>
                    <button
                      onClick={resetTransaction}
                      className="w-1/2 bg-red-500 hover:bg-red-600 text-white"
                      disabled={transactionStatus === "processing"}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="text-center mt-4">
                    {transactionStatus === "processing" && (
                      <p className="text-gray-400">Processing...</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              variants={confirmationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center justify-center"
            >
              <Card className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 text-center">
                <div>
                  <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
                  <CardTitle className="text-2xl font-semibold text-white">
                    Transaction Successful!
                  </CardTitle>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Your transfer of ৳{amount} to {selectedBeneficiary?.name}{" "}
                    was successful.
                  </p>
                  {/* transaction ID */}
                  <p className="text-sm text-gray-500">
                    Transaction ID: TXN12345
                  </p>
                  <button
                    onClick={resetTransaction}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Done
                  </button>
                </div>
              </Card>
            </motion.div>
          )}

          {step === "error" && (
            <motion.div
              key="error"
              variants={confirmationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center justify-center"
            >
              <Card className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 text-center">
                <div>
                  <XCircle className="w-16 h-16 mx-auto text-red-500 mb-4" />
                  <CardTitle className="text-2xl font-semibold text-white">
                    Transaction Failed
                  </CardTitle>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-400">{errorMessage}</p>
                  <button
                    onClick={resetTransaction}
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                  >
                    Try Again
                  </button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TransferPage;
