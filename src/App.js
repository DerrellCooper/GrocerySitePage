import React from "react";
import Header from "./components/Header";
import GroceryList from "./components/GroceryList";
import './style.css';
import CartItem from "./components/CartItem";



function App(){
    const [showShoppingList, setShowShoppingList] = React.useState(false)

    function showHideList(){
        setShowShoppingList(prevShowShoppingList => !prevShowShoppingList)
    }// handle show list click

    return(
        <div className="container-fluid">
            <Header handleOnClick={showHideList} />
            <div className="row">

            <GroceryList showHide={showShoppingList} />
            </div>
        </div>
    )
}

export default App