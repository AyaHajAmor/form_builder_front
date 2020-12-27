import React from "react";
import './App.css';
import {store} from "./actions/store";
//import TextInputs from './components/TextInputs';
import ListForms from './components/ListForms';
import { Provider } from "react-redux";
import {Container}  from "@material-ui/core"
import AppBar  from "./components/AppBar"
//import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";


function App() {
  return (
    <Provider store={store}>
      <AppBar />
      <Container maxWidth="lg">
        {/* <TextInputs /> */}
        <ListForms />
      </Container>
    </Provider>
  );
}

export default App;
