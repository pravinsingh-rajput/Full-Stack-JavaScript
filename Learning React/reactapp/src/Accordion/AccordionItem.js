import React, { useState } from "react";
import "./AccordionItem.css";

const AccordionItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="accordion_item_container">
      <div className="questions">
        <h3 onClick={() => setShow(!show)}>{question}</h3>
        <p className={`open_close`} onClick={() => setShow(!show)}>
          {show ? "x" : "+"}
        </p>
      </div>
      {show && <p className="answers">{answer}</p>}
    </div>
  );
};

export default AccordionItem;
