
import { useEffect, useState } from "react";
export const AddStudent = () => {
  const [fillForm, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    age: "",
    tenth_score: "",
    twelth_score: "",
    preferred_branch: ""
  })
  const formUpdate =(e)=>{
    const name = e.target.value;
    const values = e.target.value;
    setForm({...fillForm, [name]:values})
  }
  const formSub = (e)=>{
    e.preventDefault();
    fetch("http://localhost:8080/students",{
      method:"POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(fillForm)
    })
    setForm({
      first_name: "",
    last_name: "",
    email: "",
    gender: "",
    age: "",
    tenth_score: "",
    twelth_score: "",
    preferred_branch: ""
    })
  }
    return (
      <form className="addstudent" onSubmit={formSub}>
        <div>
          Firstname:{" "}
          <input onChange={formUpdate}
            type="text"
            name="first_name"
            className="first_name"
            placeholder="enter first name"
            value={fillForm.first_name}
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input
            type="text"
            name="last_name"
            className="last_name"
            placeholder="enter last name"
            value={fillForm.last_name}
          />
        </div>
        <div>
          {" "}
          Email:
          <input onChange={formUpdate}
            type="email"
            name="email"
            className="email"
            placeholder="enter email"
            value={fillForm.email}
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input  onChange={formUpdate}
              name="gender"
              className="male"
              type="radio"
              value={"male"}
            />{" "}
            Female{" "}
            <input  onChange={formUpdate}
              name="gender"
              className="female"
              type="radio"
              value={"female"}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input  onChange={formUpdate}
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
            value={fillForm.age}
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input  onChange={formUpdate}
            type="number"
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
            value={fillForm.tenth_score}
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input  onChange={formUpdate}
            type="number"
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
            value={fillForm.twelth_score}
          />{" "}
        </div>
        <div>
          <select  onChange={formUpdate}
            value={""} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            className="preferred_branch"
          >
            <option value="law">law</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input className="submit" type="submit" value="Submit"  />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
      </form>
    );
  };