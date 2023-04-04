import { useState } from 'react';
import './App.css';
import DisplayBill from './components/DisplayBill';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  const [bill , setBill] = useState([]);
  const handleBill = (data) =>{
    setBill(bill.concat(data));
  }
  return (
    <>
    <Navbar/>
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-5"><Form getBillData={handleBill}/></div>
        <div className="col-md-6 mx-3"><DisplayBill billData={bill}/></div>
      </div>
    </div>
    </>
  );
}

export default App;
