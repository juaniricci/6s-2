import React from 'react'
import 'boxicons'
import { NavBar } from './components/navbar/NavBar';
import { ProductComponent } from './components/productos/ProductComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomeContainer } from './components/HomeContainer'
import { DataProvider } from './context/Dataprovider'

function App() {
  return (
    <DataProvider>
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/productos" component={ProductComponent} />
      </Switch>
    </BrowserRouter>
    </div>
    </DataProvider>
  );
}

export default App;
