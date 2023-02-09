import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//43. An Alternative Function Syntax, e.g: const App = () => {
const ExpenseItem = (props) => {
  const [title, seTitle] = useState(props.title);
  console.log("expenseItem evaluated by React");
  const clickHandler = () => {
    seTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      {/* <button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Change Title
      </button> */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
