import React, { useState } from "react";

const Form = () => {
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    password: "",
  });

  const showdata = (e) => {
    e.preventDefault();
    alert("Submitted");
    console.log(data);
  };

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <form onSubmit={showdata}>
        <input
          type="text"
          placeholder="First Name"
          name="fname"
          onChange={ChangeHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lname"
          onChange={ChangeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={ChangeHandler}
        />

        <h1>{data.fname}</h1>
        <h1>{data.lname}</h1>

        <button type="submit"> Login </button>
      </form>
    </>
  );
};

export default Form;
