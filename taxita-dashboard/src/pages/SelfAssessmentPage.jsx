import React, { useState } from "react";

const SelfAssessmentPage = () => {
  const [bankInterest, setBankInterest] = useState([
    { description: "Bank and building society interest *", sub: "Net Interest Received", note: "Banks / Societies", gross: 45, net: 45, tax: 45 },
  ]);

  const [dividends, setDividends] = useState([
    { description: "Dividends *", sub: "Net Dividends", gross: 45, net: 45, tax: 45 },
  ]);

  const [taxableBenefits, setTaxableBenefits] = useState([
    { description: "Taxable benefits *", sub: "Amount Received", gross: 45, net: "", tax: "" },
  ]);

  const [employment, setEmployment] = useState([
    { employer: "dfgsdfg", ref: 4, payroll: 5, gross: 45, net: 45, tax: 45 },
    { employer: "dsgfgsdfh", ref: 5, payroll: 45, gross: 5, net: 6, tax: 6 },
  ]);

  const [pensions, setPensions] = useState([
    { description: "Pension *", sub: "Gross pension", gross: 6, net: 6, tax: 6 },
    { description: "State retirement pension *", sub: "Gross pension", gross: 6, net: 6, tax: 6 },
  ]);

  const [otherSelfEmployment, setOtherSelfEmployment] = useState([
    { description: "Profit", amount: 6 },
    { description: "Loss", amount: 66 },
  ]);

  const [landProperty, setLandProperty] = useState([
    { description: "Profit", amount: 6 },
    { description: "Loss", amount: 0 },
  ]);

  const [capitalGains, setCapitalGains] = useState([
    { description: "Total Gains", amount: 6 },
    { description: "Losses", amount: 6 },
  ]);

  const [trustIncome, setTrustIncome] = useState([
    { description: "Amount", amount: 6 },
  ]);

  const [additionalInfo, setAdditionalInfo] = useState("");

  // Renders table rows with description, sub-description, and inputs
  const renderFinancialRows = (data, setData, keys) => {
    return data.map((row, idx) => (
      <div key={idx} className="grid grid-cols-6 gap-2 items-center mb-2">
        <div className="col-span-2 font-medium text-gray-700">{row[keys[0]]}</div>
        <div className="col-span-1 text-gray-500">{row.sub || row.note || ""}</div>
        <input
          type="text"
          value={row[keys[1]] || ""}
          onChange={(e) => {
            const newData = [...data];
            newData[idx][keys[1]] = e.target.value;
            setData(newData);
          }}
          className="col-span-1 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          placeholder="Gross"
        />
        <input
          type="text"
          value={row[keys[2]] || ""}
          onChange={(e) => {
            const newData = [...data];
            newData[idx][keys[2]] = e.target.value;
            setData(newData);
          }}
          className="col-span-1 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          placeholder="Net"
        />
        <input
          type="text"
          value={row[keys[3]] || ""}
          onChange={(e) => {
            const newData = [...data];
            newData[idx][keys[3]] = e.target.value;
            setData(newData);
          }}
          className="col-span-1 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          placeholder="Tax"
        />
      </div>
    ));
  };

  return (
    <div className="space-y-6 px-6 py-6 bg-white rounded-xl shadow-md">
      <div className="font-bold text-xl">SELF ASSESSMENT RETURNS</div>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-4 border-t-4 border-gray-600">
        <h2 className="text-lg font-semibold">
          SELF ASSESSMENT ADDITIONAL RETURN INFORMATION
        </h2>

        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
          <p className="text-gray-700 font-semibold">
            If you receive other income whether this is other employment, pensions or investments, it will need to be included on your self assessment return. This information will not be submitted until you agree with the final return information.
          </p>
          <p className="text-gray-700 mt-2 text-sm">
            -If your only income is from your taxi business then you will probably not need to complete anything on this page.
          </p>
        </div>

        {/* Header row */}
        <div className="grid grid-cols-6 gap-2 mb-2 bg-blue-600 text-white font-semibold px-2 py-2 rounded">
          <div className="col-span-2">Description</div>
          <div className="col-span-1">Sub Description</div>
          <div className="col-span-1">Gross</div>
          <div className="col-span-1">Net</div>
          <div className="col-span-1">Tax</div>
        </div>

        {/* Financial sections */}
        {renderFinancialRows(bankInterest, setBankInterest, ["description", "gross", "net", "tax"])}
        {renderFinancialRows(dividends, setDividends, ["description", "gross", "net", "tax"])}
        {renderFinancialRows(taxableBenefits, setTaxableBenefits, ["description", "gross", "net", "tax"])}
        {renderFinancialRows(pensions, setPensions, ["description", "gross", "net", "tax"])}

        {/* Employment section */}
        {employment.map((row, idx) => (
          <div key={idx} className="grid grid-cols-6 gap-2 items-center mb-2">
            <div className="col-span-2 font-medium text-gray-700">{row.employer}</div>
            <div className="col-span-1 text-gray-500">Ref: {row.ref}, Payroll: {row.payroll}</div>
            <input
              type="text"
              value={row.gross}
              onChange={(e) => {
                const newData = [...employment];
                newData[idx].gross = e.target.value;
                setEmployment(newData);
              }}
              className="col-span-1 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Gross"
            />
            <input
              type="text"
              value={row.net}
              onChange={(e) => {
                const newData = [...employment];
                newData[idx].net = e.target.value;
                setEmployment(newData);
              }}
              className="col-span-1 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Net"
            />
            <input
              type="text"
              value={row.tax}
              onChange={(e) => {
                const newData = [...employment];
                newData[idx].tax = e.target.value;
                setEmployment(newData);
              }}
              className="col-span-1 border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              placeholder="Tax"
            />
          </div>
        ))}

        {/* Other sections without Net/Tax */}
        <div className="mt-4">
          {otherSelfEmployment.map((row, idx) => (
            <div key={idx} className="flex justify-between items-center mb-2">
              <span className="font-medium">{row.description}</span>
              <span className="border border-gray-300 rounded-lg px-3 py-2 w-24 text-right shadow-sm">{row.amount}</span>
            </div>
          ))}
          {landProperty.map((row, idx) => (
            <div key={idx} className="flex justify-between items-center mb-2">
              <span className="font-medium">{row.description}</span>
              <span className="border border-gray-300 rounded-lg px-3 py-2 w-24 text-right shadow-sm">{row.amount}</span>
            </div>
          ))}
          {capitalGains.map((row, idx) => (
            <div key={idx} className="flex justify-between items-center mb-2">
              <span className="font-medium">{row.description}</span>
              <span className="border border-gray-300 rounded-lg px-3 py-2 w-24 text-right shadow-sm">{row.amount}</span>
            </div>
          ))}
          {trustIncome.map((row, idx) => (
            <div key={idx} className="flex justify-between items-center mb-2">
              <span className="font-medium">{row.description}</span>
              <span className="border border-gray-300 rounded-lg px-3 py-2 w-24 text-right shadow-sm">{row.amount}</span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600 mt-6">
          <label className="font-medium block mb-1">Additional Information</label>
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            rows={4}
          />
          <p className="text-gray-500 mt-2 text-sm">
            This is information that will be needed to complete your self assessment return. Please ensure that you have this information available as soon after 05 Apr 2026 as possible, in preparation for your Self Assessment return. You may fill in any relevant information in the boxes provided and SAVE accordingly.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-4">
          Save Information
        </button>
      </div>
    </div>
  );
};

export default SelfAssessmentPage;
