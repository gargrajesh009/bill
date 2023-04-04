import React, { useState } from "react";

export default function SetPram(props) {
  const [DesignImplant1, setDesignImplant1] = useState(29.99);
  const [DesignImplant2, setDesignImplant2] = useState(34.99);
  const [PrintImplant1, setPrintImplant1] = useState(49.99);
  const [PrintImplant2, setPrintImplant2] = useState(59.99);
  const handleOnChange=(event)=>{
    switch(event.target.id){
        case "DesignImplant1": setDesignImplant1(event.target.value);
            break;
        case "DesignImplant2": setDesignImplant2(event.target.value);
            break;
        case "PrintImplant1": setPrintImplant1(event.target.value);
            break;
        case "PrintImplant2": setPrintImplant2(event.target.value);
            break;
        default : return
    }
    props.setParam({
        DesignImplant1: DesignImplant1,
        DesignImplant2: DesignImplant2,
        PrintImplant1: PrintImplant1,
        PrintImplant2: PrintImplant2   
    })
  }
  return (
    <>
    <h6 className="mt-3">Choose the base Amount</h6>
    <div className="border">
      <form>
        <div className="mb-3">
          <label htmlFor="customRange3" className="form-label">
          Design Implant Amount - Tier1 to Tier5 <output className="mx-3 fw-bold">[{DesignImplant1}]</output>
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="70"
            value={DesignImplant1}
            step="0.1"
            id="DesignImplant1"
            onChange={handleOnChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="DesignImplant2" className="form-label">
            Design Implant Amount - Tier6 to Tier10 <output className="mx-3 fw-bold">[{DesignImplant2}]</output>
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="70"
            value={DesignImplant2}
            step="0.1"
            id="DesignImplant2"
            onChange={handleOnChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="PrintImplant1" className="form-label">
          Print Implant Amount - Tier 1 to Tier 25 <output className="mx-3 fw-bold">[{PrintImplant1}]</output>
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="70"
            value={PrintImplant1}
            step="0.1"
            id="PrintImplant1"
            onChange={handleOnChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="PrintImplant2" className="form-label">
          Print Implant Amount - Tier 26 to Tier 30 <output className="mx-3 fw-bold">[{PrintImplant2}]</output>
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="70"
            value={PrintImplant2}
            step="0.1"
            id="PrintImplant2"
            onChange={handleOnChange}
          ></input>
        </div>
      </form>
    </div>
    </>
  );
}
