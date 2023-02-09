import React from "react";
import "./Card.css";
//43. An Alternative Function Syntax, e.g: const App = () => {
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
