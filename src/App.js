import React from "react";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <VisibleTodoList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
