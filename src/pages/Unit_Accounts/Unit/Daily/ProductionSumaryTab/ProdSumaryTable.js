import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function ProdSumaryTable({ getValuesPrdSum }) {
  const [selectRow, setSelectRow] = useState([]);

  useEffect(() => {
    if (getValuesPrdSum.length > 0) {
      selectedRowFun(getValuesPrdSum[0], 0);
    } else {
      setSelectRow([]);
    }
  }, [getValuesPrdSum]);

  const selectedRowFun = (item, index) => {
    let list = { ...item, index: index };
    setSelectRow(list);
  };

  function formatAmount(amount) {
    // Assuming amount is a number
    const formattedAmount = new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);

    return formattedAmount;
  }

  // console.log("ppppp",getValuesPrdSum);

  return (
    <div>
      <div
        className="col-md-12"
        style={{ overflowY: "scroll", overflowX: "scroll", height: "250px" }}
      >
        <Table striped className="table-data border">
          <thead className="tableHeaderBGColor">
            <tr style={{ whiteSpace: "nowrap" }}>
              <th>withTax</th>
              <th>Invoice type</th>
              <th>cleared under</th>
              <th>Material</th>
              <th>Exise_CL_no</th>
              <th>TotalQty</th>
              <th>TotalValue</th>
              <th>TotalWeight</th>
              <th>ID</th>
              <th>UnitName</th>
              <th>Ex_Not_no</th>
              {/* <th>Material</th>
              <th>Excise_CL_no</th> */}
              <th>ShortNotNo</th>
            </tr>
          </thead>

          <tbody className="tablebody">
            {getValuesPrdSum.map((item, key) => {
              return (
                <tr
                  style={{ whiteSpace: "nowrap" }}
                  onClick={() => selectedRowFun(item, key)}
                  className={key === selectRow?.index ? "selcted-row-clr" : ""}
                >
                  <td>
                    {item.WithTax === 1 ? (
                      <input type="checkbox" value={item.WithTax} checked />
                    ) : (
                      <input type="checkbox" value={item.WithTax} disabled />
                    )}
                  </td>
                  <td>{item.InvoiceType}</td>
                  <td></td>
                  <td>{item.Material}</td>
                  <td>{item.Excise_CL_no}</td>
                  <td style={{ textAlign: "right" }}>{item.TotalQty}</td>
                  <td style={{ textAlign: "right" }}>
                    {formatAmount(item.TotalValue)}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    {formatAmount(item.TotalWeight)}
                  </td>
                  <td></td>
                  <td></td>
                  <td>{item.Ex_Not_no}</td>
                  {/* <td>{item.Material}</td>
              <td>{item.Excise_CL_no}</td> */}
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}