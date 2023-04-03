import React from "react";
import "./NewTask.css";
import Note from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

const NewTask = () => {
  return (
    <Note elevation={4} className="task_container">
      <div className="heading">
        <h1 className="task_title">Lorem ipsum dolor sit amet. lore</h1>
        <DeleteIcon className="delete" />
      </div>

      <p className="task_description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        dolor, ea facilis placeat delectus veniam debitis sed quo! Illum,
        officiis tenetur at voluptate, quaerat nihil eaque dolorum sint ex autem
        enim deleniti!
      </p>
    </Note>
  );
};

export default NewTask;
