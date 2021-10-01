import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import OrderReview from './Components/OrderReview/OrderReview';
import Shop from './Components/Shop/Shop';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/orderreview">
            <OrderReview />
          </Route>
          <Route path="/order">
            <OrderReview />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
