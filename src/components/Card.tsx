//import { Fragment } from "react/jsx-runtime";
// ==> <fragment> </fragment> is used to return multiple elements

import { ReactNode } from "react";

// ==> but we can use <> </> instead of <fragment> </fragment>
interface CardProps {
  children?: ReactNode;
}
function Card(props: CardProps) {
  // Desctructuring
  const { children } = props;
  //Alternative but not recommended becouse you can´t know if the props is used
  //const body = props.body;
  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">{children} </div>
    </div>
  );
}
interface CardBodyProps {
  title: string;
  text: string;
}
function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}
export {Card};
export { CardBody };