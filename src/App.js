import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./MainPage/Home/Home.js";
import About from "./MainPage/About/About";
import Header from "./SharePage/Login/Header/Header.js";
import Footer from "./SharePage/Footer/Footer.js";
import Login from "./SharePage/Login/Login/Login.js";
import Register from "./SharePage/Login/Register/Register.js";
import AuthProvider from "./context/AuthProvider/AuthProvider.js";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
