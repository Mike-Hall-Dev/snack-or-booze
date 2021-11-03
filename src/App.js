import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Snack from "./MenuItem";
import AddItem from "./AddItem";
import Loading from "./Loading";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    getSnacksOrBooze().then(() => setIsLoading(false));
  }, []);

  async function getSnacksOrBooze() {
    let snacks = await SnackOrBoozeApi.getSnacks();
    let drinks = await SnackOrBoozeApi.getDrinks();
    setSnacks(snacks);
    setDrinks(drinks);
    setIsLoading(false);
  }

  if (isLoading) return <Loading />

  const createID = (itemObj) => {
    let itemName = itemObj.name.toLowerCase();
    let itemID = itemName.replace(/ /g, '-');
    return itemID;
  }

  const addItem = async (formData, type) => {
    setIsLoading(true);
    const itemID = createID(formData);
    const newItem = { "id": itemID, ...formData };
    type === "drink" ? await SnackOrBoozeApi.addDrink(newItem) : await SnackOrBoozeApi.addSnack(newItem);
    await getSnacksOrBooze();
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Snack items={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/new">
              <AddItem createID={createID} addItem={addItem} />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
