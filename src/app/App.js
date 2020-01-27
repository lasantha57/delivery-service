import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Navigation from './shared/navigation/Navigation';
import Routes from './main-routes/Routes';
import DeliveryCost from './delivery-cost/DeliveryCost';
import DeliveryRoutes from './delivery-routes/DeliveryRoutes';

function App() {

  const renderRoutes = () => {
    return (
      <Switch>
        <Route exact path="/routes" component={Routes} />
        <Route exact path="/delivery-cost" component={DeliveryCost} />
        <Route exact path="/delivery-routes" component={DeliveryRoutes} />
        <Redirect to="/routes" />
      </Switch>
    )
  }

  return (
    <div className="app">
      <Router>
        <header className="app__header">
          <Navigation></Navigation>
        </header>
        <main className="app__content">
          {renderRoutes()}
        </main>
      </Router>
    </div>
  );
}

export default App;
