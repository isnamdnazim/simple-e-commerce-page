import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import OrderReview from './Components/OrderReview/OrderReview';
import Shop from './Components/Shop/Shop';
import NotFound from './Components/NotFound/NotFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
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
          <Route path="/placeorder">
            <PlaceOrder />
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
