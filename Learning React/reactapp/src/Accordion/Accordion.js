import React, { useState } from "react";
import "./Accordion.css";
import { questions } from "./API";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [data, setData] = useState(questions);

  return (
    <div className="accordain_continer">
      <p className="primary_accordion">
        {data.map((currEle, index, arr) => {
          return <AccordionItem key={currEle.id} {...currEle} />;
        })}
      </p>
    </div>
  );
};

export default Accordion;
