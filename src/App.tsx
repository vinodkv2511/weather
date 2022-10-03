import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { StyledApp } from "./App.styles";
import Header from "./Pages/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { store } from "./store";


const App:FunctionComponent = () => {

  return <Provider store={store}>
    <StyledApp>
      <Header />
      <Dashboard />
    </StyledApp>
  </Provider> 
} 

export default App;
