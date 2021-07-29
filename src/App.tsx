import { useState } from "react";
import { EmployeeListing } from "./Components/EmployeeListing";
import { Header } from "./Components/Header";
import { NewEmployeeModal } from "./Components/NewEmployeeModal";
import './styles/global.scss';

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
    <>
      <Header openNewEmployeeModal={handleOpenNewEmployeeModal}/>
      <EmployeeListing />

      <NewEmployeeModal isOpen={isNewEmployeeModalOpen} onRequestClose={handleCloseNewEmployeeModal}/>
    </>
  );
}

export default App;
