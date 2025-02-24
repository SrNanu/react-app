//import { Fragment } from "react/jsx-runtime"; 
// ==> <fragment> </fragment> is used to return multiple elements
// ==> but we can use <> </> instead of <fragment> </fragment>
function Card() {
  return (

    <div className="card" style={{ width: "350px" }}>
      <div className="card-body"><CardBody></CardBody></div>
    </div>
  );
}
function CardBody() {
  return (
    <>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );  
}
export default Card;
