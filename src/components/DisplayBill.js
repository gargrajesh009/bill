import React, { useState } from "react";

export default function DisplayBill(props) {
  const [display, setDisplay] = useState(false);
  const handleShow = () => {
    setDisplay(!display);
  };
  const data = JSON.stringify(props.billData, undefined, 5);
  return (
    <div>
      {display && (
        <div className="btn btn-primary" onClick={handleShow}>
          Show Table
        </div>
      )}
      {!display && (
        <div className="btn btn-primary" onClick={handleShow}>
          Show Json
        </div>
      )}
      {display && <pre className="mt-3">{data}</pre>}
      {!display &&
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Design Implant</th>
              <th scope="col">Print Implant</th>
              <th scope="col">Billable Amount</th>
            </tr>
          </thead>
          <tbody>
            {props.billData.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.DesignImplant}</td>
                <td>{item.PrintImplant}</td>
                <td>{item.BillableAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}
