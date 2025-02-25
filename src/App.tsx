import { CardBody, Card } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const list = ["goku", "vegeta", "gohan", "trunks", "piccolo"];
  const handleSelect = (element: string) => {
    console.log("imprimiendo ", element);
  };
  const contenido = 
    list.length > 0 ? (
      <List data={list} onselect={handleSelect} />
    ) : (
      "No hay elementos"
    );
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(true);
  };
  return (
    <Card>
      <CardBody title="Hola mundo" text="Texto de la carta" />
      {contenido}
      <Button clicked={clicked} onClick={onClick}>
        Hola mundo
      </Button>
    </Card>
  );
}

export default App;

//Diference between state and props
// State is mutable and props is immutable
// State is used to store data that can change over time
// Props is used to pass data from parent to child
// Both are used to render the UI
