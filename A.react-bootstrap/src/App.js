import './App.css';
import { CardGroup } from 'react-bootstrap';
import Card1 from './components/Card/Card1';

function App() {
  const products = [
    {id: 1, name: 'Laptop'},
    {id: 2, name: 'Mobile'},
    {id: 3, name: 'Bag'}
]
  return (
    <div className="App">
      <h1>React Bootstrap</h1>
      <CardGroup>
        {
         products.map(product=><Card1 key={product.id} product={product}></Card1>)
        }
      </CardGroup>
    </div>
  );
}

export default App;
