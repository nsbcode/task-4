import React, { useState } from "react";

const FormTwo = () => {
  const [formData, setFormData] = useState({
    fName: "",
    email: "",
    country: "",
    date: "",
    skills: [],
  });

  const [errors, setErrors] = useState({});



  const validateForm = (name, value) => {
    let errorMsg = "";
    if (name === "fName" && !value) {
      errorMsg = "First Name is required";
    }else if(value.length < 5) {
        errorMsg = "Name should be more than 5 letters"
    }
    if (name === "email" && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      errorMsg = "Invalid email address";
    }
    if (name === "country" && !value) {
      errorMsg = "Country is required";
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateForm(name, value)
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      Object.values(errors).some((err) => err) ||
      Object.values(formData).some(
        (field) => field === "" || field.length === 0
      )
    ) {
      alert("Please fix the errors")
    }else {
      console.log(formData, "==FORMDATA")
      alert("Form is submitted")
      
    }
  };

  const handleCheckbox = (e) => {
    const { name, value, checked } = e.target;
    let newSkills = [...formData.skills];
    if (checked) {
      newSkills.push(value);
    } else {
      newSkills = newSkills.filter((skill) => skill !== value);
    }
    return setFormData((prev) => ({ ...prev, [name]: newSkills }));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="fName"
            placeholder="First name"
            onChange={handleChange}
            value={formData.fName}
          />
          {errors.fName && <p className="error">{errors.fName}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <label htmlFor="">Gender :</label>
        <div className="center">
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <p>Skills :</p>
          <div className="center">
            <div className="checkgroup">
              <input
                type="checkbox"
                name="skills"
                value="javascript"
                onChange={handleCheckbox}
                id="js"
              />
              <label htmlFor="js">Javascript</label>
            </div>
            <div className="checkgroup">
              <input
                type="checkbox"
                name="skills"
                value="css"
                onChange={handleCheckbox}
                id="css"
              />
              <label htmlFor="css">Css</label>
            </div>
            <div className="checkgroup">
              <input
                type="checkbox"
                name="skills"
                value="html"
                onChange={handleCheckbox}
                id="html"
              />
              <label htmlFor="html">Html</label>
            </div>
            <div className="checkgroup">
              <input
                type="checkbox"
                name="skills"
                value="php"
                onChange={handleCheckbox}
                id="php"
              />
              <label htmlFor="php">Php</label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="">Date of birth :</label>
          <input type="date" name="date" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Country :</label>
          <select
            name="country"
            id=""
            onChange={handleChange}
          >
            <option value="">select</option>
            <option value="India">India</option>
            <option value="uae">UAE</option>
            <option value="Qatar">Qatar</option>
          </select>
          {errors.country && <p className="error">{errors.country}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormTwo;
