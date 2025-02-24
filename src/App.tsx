import { CardBody, Card } from "./components/Card";
import List from "./components/List";

function App() {
  const list= [
    'goku',
    'vegeta',
    'gohan',
    'trunks',
    'piccolo'
  ];
  return (
    <Card>
      <CardBody title="Hola mundo" text="Texto de la carta" />
      <List data={list} />
      <List data={list} />
    </Card>
  );
}

export default App;
