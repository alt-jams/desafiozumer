import { EmployeeListing } from "./Components/EmployeeListing";
import { Header } from "./Components/Header";
import { NewEmployeeModal } from "./Components/NewEmployeeModal";
import './styles/global.scss';
import { Provider } from "react-redux";
import store from "./Redux";
import { ThemeProvider } from '@material-ui/core/styles';
import mainTheme from './assets/theme/main';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <Header />
        <EmployeeListing />
        <NewEmployeeModal/>
      </ThemeProvider>
    </ Provider>
  )
}

export default App;
