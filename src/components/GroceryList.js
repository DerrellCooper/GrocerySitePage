import React from "react";
import GroceryItem from "./GroceryItem";
import GroceryItemData from "./GroceryItemData";
import ShoppingCart from "./ShoppingCart";

function GroceryList(props){
    const [allItems, setAllItems] = React.useState(GroceryItemData)
    // DEBUG
    // console.log(allItems)
    const [filterType,setFilterType] = React.useState('all')
    const [cartList, setCartList] = React.useState([''])
    const [subtotal, setSubtotal] = React.useState(0)
    const [tax, setTax] = React.useState(0)

    console.log(filterType)

    function onFilterChange(event){
        setFilterType(event.target.value)
        console.log(event.target.value)
    }// end onFilterChange
    // DEBUG
    // console.log(cartList)
    
    function OnAddClick(count, name, price, reset){
        // DEBUG
        // console.log(count)

        
        if (cartList[0]=== ''){
            setCartList([{
                item: name,
                price: price,
                
            }])
            setSubtotal(prevSubtotal => prevSubtotal + price)
            setTax(prevTax => prevTax + (price * .07))

            if (count > 1){
                for (let index = 1; index < count; index++) {
                    
                    setCartList(prevCartList => [...prevCartList, {
                        item: name,
                        price: price,
                        
                    }])
                    
                    setSubtotal(prevSubtotal => prevSubtotal + price)
                    setTax(prevTax => prevTax + (price * .07))

                }//end for
            }//end nested if
            
        }else {
            for (let index = 1; index <= count; index++) {
                setCartList(prevCartList => [...prevCartList, {
                    item: name,
                    price: price,
                    
                }])
                setSubtotal(prevSubtotal => prevSubtotal + price)
                setTax(prevTax => prevTax + (price * .07))

                console.log('added next')
            }//end for
        }//end else if
        
        reset()
            
    }// end OnAddClick

    return(
        <div>
            <div className="row">
                <div className='d-flex justify-content-end'>
                    <label htmlFor="filterType">Type</label>
                    <select name="filterType" id="filterType" onChange={onFilterChange}>
                        <option value="all">All</option>
                        <option value="chips">Chips</option>
                        <option value="beer">Beer</option>
                        <option value="drinks">Drinks</option>
                    </select>
                </div>
            </div>
            <div className="">
                {props.showHide === false ? <ShowItems data={allItems} cartData={cartList} filter={filterType} handleClick={OnAddClick}/> 
                                            : <ShowCart data={allItems} cartData={cartList} filter={filterType} handleClick={OnAddClick} 
                                                subtotal={subtotal} tax={tax}/>}
            </div>
                
        </div>
    ) 
}//end GroceryList
export default GroceryList

function ShowItems(itemsProp){

    const showList = itemsProp.data.map(
        (currentItem) => {
            //render only filtered items
            if (itemsProp.filter === currentItem.type){
                return <GroceryItem title={currentItem.name}
                                    price={currentItem.price}
                                    handleClick={itemsProp.handleClick}/>
            //render all items
            }else if(itemsProp.filter === 'all'){
                return <GroceryItem title={currentItem.name}
                                    price={currentItem.price}
                                    handleClick={itemsProp.handleClick}/>
                                    
                                    
            }
        }
    )//end showList

    return(
        <div className="row">
            <div className="col-12 d-flex">
                {showList}
            </div>
        </div>
    )
}//end ShowItems

function ShowCart(itemsProp){
    
    const showList = itemsProp.data.map(
        (currentItem) => {
            //render only filtered items
            if (itemsProp.filter === currentItem.type){
                return <GroceryItem title={currentItem.name}
                                    price={currentItem.price}
                                    handleClick={itemsProp.handleClick}/>
            //render all items
            }else if(itemsProp.filter === 'all'){
                return <GroceryItem title={currentItem.name}
                                    price={currentItem.price}
                                    handleClick={itemsProp.handleClick}/>
                                    
            }
        }
    )//end showList
    


    return(
        <div className="row">
            <div className="col-7 d-flex flex-wrap ">
                {showList}
            </div>
            <div className="col-5 cart-list">
                <ShoppingCart data={itemsProp.cartData} cartSubtotal = {itemsProp.subtotal} cartTax={itemsProp.tax} />
            </div>

        </div>
    )
}