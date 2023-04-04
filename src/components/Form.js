import React, { useState } from "react";
import SetPram from "./SetPram";

export default function Form(props) {
  const [DesignImplant, setDesignImplant] = useState(0);
  const [PrintImplant, setPrintImplant] = useState(0);
  const [parameter, SetParameter] = useState({
    DesignImplant1: 29.99,
    DesignImplant2: 34.99,
    PrintImplant1: 49.99,
    PrintImplant2: 59.99
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = [
      {
        DesignImplant: DesignImplant,
        PrintImplant: PrintImplant,
        BillableAmount: calculateBill(DesignImplant, PrintImplant)
      }
    ];
    props.getBillData(data);
  };
  const calculateBill = (Di, Pi) => {
    let total = 0;
    if (Di <= 5) {
      total += Di * parameter.DesignImplant1;
    } else {
      total += 5 * parameter.DesignImplant1 + (Di - 5) * parameter.DesignImplant2;

    }
    if (Pi <= 25) {
      total += Pi * parameter.PrintImplant1;
    } else {
      total += 25 * parameter.PrintImplant1 + (Pi - 25) * parameter.PrintImplant2;
    }
    return total.toFixed(2);
  };

  const handleParameter = (data) =>{
    SetParameter(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="DesignImplant" className="form-label">
            Design Implant quantity used
          </label>
          <input
            type="number"
            className="form-control"
            id="DesignImplant"
            min="0"
            max="10"
            onChange={(e) => setDesignImplant(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="PrintImplant" className="form-label">
            Print Implant quantity used
          </label>
          <input
            type="number"
            className="form-control"
            id="PrintImplant"
            min="0"
            max="30"
            onChange={(e) => setPrintImplant(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <SetPram  setParam={handleParameter}/>
    </div>
  );
}
