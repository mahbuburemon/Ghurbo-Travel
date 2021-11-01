
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './page/Shared/Header/Header';
import Home from './page/Home/Home/Home';
import NotFound from './page/Home/NotFound/NotFound';
import AddPackage from './page/Home/AddPackage/AddPackage';
import Booking from './page/Home/Booking/Booking';
import Login from './page/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './page/Login/PrivateRoute/PrivateRoute';
import ManagePackage from './page/Home/ManagePackage/ManagePackage';
import Footer from './page/Shared/Footer/Footer';
import Contract from './page/Home/Contract/Contract';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/addpackage">
              <AddPackage></AddPackage>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/contact">
              <Contract></Contract>
            </Route>

            <Route path="/managepackage/:userId">
              <ManagePackage></ManagePackage>
            </Route>

            <PrivateRoute path="/booking/:bookingId">
              <Booking></Booking>
            </PrivateRoute>


            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
