

import { useState } from 'react';
import './App.css'
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [value, setVlaue] = useState(true);
  const [show, setShow] = useState("AddStudent")
  const change = ()=>{
    if(value){
      setVlaue(false);
      setShow("ShowStudents")
    }else{
      setVlaue(true);
      setShow("AddStudent")
    }
  }
  return (
    <div className="App">
      <button className="togglebtn" onClick={change}>{show}</button>
      <div>{value?<ShowStudents /> : <AddStudent />}</div>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
    
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
