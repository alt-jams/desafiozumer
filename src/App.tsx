import { useState } from "react";
import { EmployeeListing } from "./Components/EmployeeListing";
import { Header } from "./Components/Header";
import { NewEmployeeModal } from "./Components/NewEmployeeModal";
import './styles/global.scss';
import { Provider } from "react-redux";
import store from "./Redux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <EmployeeListing />

      <NewEmployeeModal/>
    </ Provider>
  )
}

export default App;
