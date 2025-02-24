import { CardBody, Card } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["goku", "vegeta", "gohan", "trunks", "piccolo"];
  const handleSelect = (element: string) => {
    console.log("imprimiendo ", element);
  };
  const handleSelect2 = (element: string) => {
    console.log("Mostrando ", element);
  };

  return (
    <Card>
      <CardBody title="Hola mundo" text="Texto de la carta" />
      <List data={list} onselect={handleSelect} />
      <List data={list} onselect={handleSelect2} />
    </Card>
  );
}

export default App;
