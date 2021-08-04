import { EmployeeListing } from "./Components/EmployeeListing";
import { Header } from "./Components/Header";
import { NewEmployeeModal } from "./Components/NewEmployeeModal";
import { Provider } from "react-redux";
import store from "./Redux";
import { ThemeProvider } from '@material-ui/core/styles';
import mainTheme from './assets/theme/main';
import { Box, makeStyles } from "@material-ui/core";

function App() {
  const styles = useStyles();

  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <Box className={styles.container}>
          <Header />
          <EmployeeListing />
          <NewEmployeeModal/>
        </Box>
      </ThemeProvider>
    </ Provider>
  )
}

const useStyles = makeStyles(() => ({ 
  container: {
    background: '#f4f4f4',
  }
}))

export default App;
