import React, { useContext } from "react";
import { fName, lName } from "../App";

const Component3 = () => {
  const firstName = useContext(fName);
  const lastName = useContext(lName);
  return (
    <>
      <h2>
        Hello {firstName} {lastName}
      </h2>
    </>
  );
};

export default Component3;
