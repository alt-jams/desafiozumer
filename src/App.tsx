import { useState } from "react";
import { EmployeeListing } from "./Components/EmployeeListing";
import { Header } from "./Components/Header";
import { NewEmployeeModal } from "./Components/NewEmployeeModal";
import './styles/global.scss';
import { Provider } from "react-redux";
import store from "./Redux";

function App() {
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(
    false
  );

  function handleOpenNewEmployeeModal() {
    setIsNewEmployeeModalOpen(true);
  }

  function handleCloseNewEmployeeModal() {
    setIsNewEmployeeModalOpen(false);
  }

  return (
    <Provider store={store}>
      <Header openNewEmployeeModal={handleOpenNewEmployeeModal}/>
      <EmployeeListing />

      <NewEmployeeModal isOpen={isNewEmployeeModalOpen} onRequestClose={handleCloseNewEmployeeModal}/>
    </ Provider>
  )
}

export default App;
