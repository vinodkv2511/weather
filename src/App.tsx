import { FunctionComponent } from "react";
import { StyledApp } from "./App.styles";
import Header from "./components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";


const App:FunctionComponent = () => {

  return <StyledApp>
    <Header />
    <Dashboard />
  </StyledApp>
} 

export default App;
