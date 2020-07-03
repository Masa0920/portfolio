import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom'
import Top from "./screens/Top"

const App =()=>{
  return (
  <div>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Top/>}
        />

      </Switch>
    </BrowserRouter>
  </div>
  )
}

export default App;
