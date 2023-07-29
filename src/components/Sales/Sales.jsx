import React, { useState } from "react";
import Tab from "../sideTab/Tab";
import { SlCalender } from "react-icons/sl";
import { Grid, TextField } from "@mui/material";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { CiTimer } from "react-icons/ci";
function Sales() {
  const [tableData, setTableData] = useState([
    // Initial data in the table (you can leave it empty if you want).
    {
      siNo: "",
      product: "",
      quantity: "",
      discount: "",
      amount: "",
      rate: "",
    },
    {
      siNo: "",
      product: "",
      quantity: "",
      discount: "",
      amount: "",
      rate: "",
    },
    {
      siNo: "",
      product: "",
      quantity: "",
      discount: "",
      amount: "",
      rate: "",
    },
    {
      siNo: "",
      product: "",
      quantity: "",
      discount: "",
      amount: "",
      rate: "",
    },
    {
      siNo: "",
      product: "",
      quantity: "",
      discount: "",
      amount: "",
      rate: "",
    },
    {
      siNo: "",
      product: "",
      quantity: "",
      discount: "",
      amount: "",
      rate: "",
    },
  ]);

  const handleAddRow = () => {
    setTableData([
      ...tableData,
      {
        siNo: "",
        product: "",
        quantity: "",
        discount: "",
        amount: "",
        rate: "",
      },
    ]);
  };

  const handleChange = (index, field, value) => {
    const newData = [...tableData];
    newData[index][field] = value;
    setTableData(newData);
  };

  const handleKeyPress = (event, index) => {
    if (event.key === "Enter") {
      handleAddRow();
    }
  };
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <Tab />
      <div className=" w-4/5 px-5 h-screen">
        <div className="w-full flex justify-between pt-8 pb-5">
          <h1 className=" text-4xl font-semibold">Sales</h1>
          <div className="flex gap-4">
            <div className=" w-32 h-10 rounded-3xl bg-white flex items-center justify-center">
              <h1 className=" flex gap-2 items-center">
                <SlCalender /> july 29
              </h1>
            </div>
            <div>
              <TextField
                label={<BiSearchAlt2 />}
                size="small"
                fullWidth
                InputProps={{
                  sx: { borderRadius: "50px", backgroundColor: "white" },
                }}
              />
            </div>
            <div className=" w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <BsBell />
            </div>
            <div className=" w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <RiContactsLine />
            </div>
          </div>
        </div>
        <div className=" w-full bg-white h-auto mt-5 rounded-2xl py-5 px-5">
          <div className=" flex w-full justify-between">
            <h1 className=" text-sm">invoice No: 001</h1>
            <div className=" flex bg-gray-200 gap-4 h-8 px-4 rounded-3xl text-sm">
              <div className=" flex justify-center items-center w-auto">
                <h1 className=" flex items-center justify-center gap-1">
                  <CiTimer />
                  24:59
                </h1>
              </div>
              <div className=" flex justify-center items-center w-auto">
                <h1 className=" flex items-center justify-center gap-1">
                  <SlCalender />
                  july 29
                </h1>
              </div>
            </div>
          </div>
          <hr className=" border-black mt-2" />
          <div className=" mt-4">
            <h1 className=" text-2xl">Customer Details</h1>
          </div>
          <div className=" mt-2 w-1/2">
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  label="Customer:"
                  InputProps={{ sx: { borderRadius: "10px" } }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  label="Address:"
                  InputProps={{ sx: { borderRadius: "10px" } }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  label="Phone:"
                  InputProps={{ sx: { borderRadius: "10px" } }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  label="Gst No:"
                  InputProps={{ sx: { borderRadius: "10px" } }}
                />
              </Grid>
            </Grid>
          </div>
          <hr className=" mt-5 border-black " />
          <div className=" mt-5 text-sm flex w-full justify-center">
            <div className=" rounded-3xl">
              <table className="" style={{ borderRadius: "20px" }}>
                <thead className="bg-[#0A7Aff] text-white rounded-3xl">
                  <tr className="border border-1 border-black">
                    <th className="border border-1 border-black">SI NO</th>
                    <th className="flex items-center justify-start pl-3">
                      Product
                    </th>
                    <th className="border border-1 border-black">Quantity</th>
                    <th className="border border-1 border-black">Discount</th>
                    <th className="border border-1 border-black">Amount</th>
                    <th className="border border-1 border-black">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((rowData, index) => (
                    <tr className="border border-1 border-black" key={index}>
                      <td className="border border-1 border-black">
                        <input
                          className="w-14"
                          type="text"
                          value={rowData.siNo}
                          onChange={(e) =>
                            handleChange(index, "siNo", e.target.value)
                          }
                        />
                      </td>
                      <td className="border border-1 border-black">
                        <input
                          className="w-96"
                          type="text"
                          value={rowData.product}
                          onChange={(e) =>
                            handleChange(index, "product", e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={rowData.quantity}
                          onChange={(e) =>
                            handleChange(index, "quantity", e.target.value)
                          }
                        />
                      </td>
                      <td className="border border-1 border-black">
                        <input
                          type="number"
                          value={rowData.discount}
                          onChange={(e) =>
                            handleChange(index, "discount", e.target.value)
                          }
                        />
                      </td>
                      <td className="border border-1 border-black">
                        <input
                          type="number"
                          value={rowData.amount}
                          onChange={(e) =>
                            handleChange(index, "amount", e.target.value)
                          }
                        />
                      </td>
                      <td className="border border-1 border-black">
                        <input
                          type="number"
                          value={rowData.rate}
                          onChange={(e) =>
                            handleChange(index, "rate", e.target.value)
                          }
                          onKeyPress={(e) => handleKeyPress(e, index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            ,{/* leaving for tomorrow */}
          </div>
          <div className=" mt-10 flex items-center w-full justify-between px-12">
            {/* <div className="text-sm rounded-md w-64 bg-gray-200 h-8 flex justify-start pl-3 items-center">
                Narration:
            </div> */}
            <input
              className="text-sm rounded-md w-64 bg-gray-200 h-6 flex justify-start pl-3 items-center "
              type="text"
              placeholder="Narration:"
            />
            <div className=" flex gap-2 items-center">
              <h1 className=" text-sm">Payment option:</h1>
              <div className=" rounded-md bg-gray-200 flex h-6 items-center justify-center w-32">
                <h1 className=" text-sm">Cash</h1>
              </div>
            </div>
            <div className=" flex flex-col gap-1 text-sm">
              <h1 className=" text-sm flex gap-2">Total amount: 17500</h1>
              <h1 className=" flex justify-end">Bill Discount : 3</h1>
            </div>
          </div>
          <div className=" mt-2 flex items-center w-full px-12 justify-between">
            <div className=" flex gap-5 ">
              <div className=" flex gap-2 items-center">
                <h1 className=" text-sm">Cash Received:</h1>
                <div className=" rounded-md bg-gray-200 flex h-6 items-b between justify-center w-32">
                  <input
                    className=" w-32 h-6 bg-gray-200 rounded-md"
                    type="number"
                  />
                </div>
              </div>
              <div>
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-sm">Balance:</h1>
                  <div className=" rounded-md bg-gray-200 flex h-6 items-b between justify-center w-32">
                    <input
                      className=" w-32 h-6 bg-gray-200 rounded-md"
                      type="number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-64 flex h-7  justify-start items-center rounded-md pl-3 bg-gray-200 gap-8">
              <h1 className=" text-red-500 text-sm">Grand Total : </h1>
              <h1>8900</h1>
            </div>
          </div>
        <hr className=" mt-5 border-black" />
          <div className=" flex items-center justify-between px-12 mt-5">
            <div className=" w-32 h-7 bg-orange-500 rounded-md text-sm text-white flex items-center justify-center">
              Sales History
            </div>
            <div className=" w-32 h-7 bg-[#0A7Aff] rounded-md text-white flex text-sm items-center justify-center">
              Print
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
