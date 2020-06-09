import React, { createContext, FC, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import AboutPage from './pages/about/aboutPage';
import OrderPage from './pages/order/orderPage';
import SummaryPage from './pages/summary/summaryPage';
import Header from './components/header/header';
import ContactPage from './pages/contact/contactPage';
import SmallDevice from './components/smallDevice/smallDevice';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import ProtectedRoute from './components/protectedRoute';
import CheckoutPage from './pages/checkout/checkoutPage';
import OrderSuccess from './pages/orderSuccess/order.success';

type ContextProps = {
  state: {
    admin: string;
    currentOrder: {
      quantity: number;
      totalPrice: number;
      name?: any;
      address?: any;
      city?: any;
      email?: any;
      phone?: any;
    };
    addressFormComplete: boolean;
    triedToPay: boolean;
  };
  setTriedToPay: any;
  setAdmin: any;
  setAddressFormComplete: any;
  setCurrentOrder: any;
};

export const Context = createContext<Partial<ContextProps>>({});

const App: FC = () => {
  const [state, setState] = useState({
    triedToPay: false,
    admin: localStorage.getItem('admin'),
    addressFormComplete: false,
    currentOrder: { quantity: null, totalPrice: null },
  });

  return (
    <Context.Provider
      value={{
        state,
        setTriedToPay: (triedToPay: boolean) => setState({ ...state, triedToPay }),
        setAdmin: (admin: string) => setState({ ...state, admin }),
        setAddressFormComplete: (complete: boolean) => setState({ ...state, addressFormComplete: complete }),
        setCurrentOrder: (currentOrder: { quantity: number; totalPrice: number }) => setState({ ...state, currentOrder }),
      }}
    >
      <div className="appContainer">
        <SmallDevice />
        <div className="mainApp">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/order" component={OrderPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/summary" component={SummaryPage} />
              <Route path="/login" component={Login} />
              <Context.Consumer>
                {context => (
                  <>
                    <ProtectedRoute
                      path="admin"
                      redirectRoute="login"
                      condition={localStorage.getItem('admin')}
                      component={Admin}
                    />
                    <ProtectedRoute
                      path="checkout"
                      redirectRoute="order"
                      condition={context.state.currentOrder.quantity}
                      component={CheckoutPage}
                    />
                    <ProtectedRoute
                      path="order-success"
                      redirectRoute=""
                      condition={context.state.currentOrder.quantity}
                      component={OrderSuccess}
                    />
                  </>
                )}
              </Context.Consumer>
            </Switch>
          </Router>
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
