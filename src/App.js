import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Discover from "./pages/Discover";
import Employees from "./pages/Employees";
// import Search from "./pages/Search";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Employees} />
          <Route exact path="/employees" component={Employees} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
