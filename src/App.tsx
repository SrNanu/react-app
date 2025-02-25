import { CardBody, Card } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const list = ["goku", "vegeta", "gohan", "trunks", "piccolo"];
  const [listState,setListState] = useState(list);

  const handleSelect = (element: string) => {
    console.log("imprimiendo ", element);
  };
  const contenido =
    list.length > 0 ? (
      <List data={listState} onselect={handleSelect} />
    ) : (
      "No hay elementos"
    );
  const [clicked] = useState(false);

  // const onClick = () => {
  //   setClicked(true);
  // };
  const addMinion = () => {
    setListState([...listState,"Minion"]);  
  };

  const delMinion = () => {
    setListState(listState.slice(0,-1));
  };
  return (
    <Card>
      <Button clicked={clicked} onClick={addMinion}>
        Agregar
      </Button>
      <Button clicked={clicked} onClick={delMinion}>
        Eliminar
      </Button>
      <CardBody title="Hola mundo" text="Texto de la carta" />
      {contenido}
    </Card>
  );
}

export default App;

//Diference between state and props
// State is mutable and props is immutable
// State is used to store data that can change over time
// Props is used to pass data from parent to child
// Both are used to render the UI
