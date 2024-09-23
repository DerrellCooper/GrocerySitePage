import React from "react";



function GroceryItem(props){
    const [count, setCount] = React.useState(0)

    console.log(count)


    

    function AddCount(){

        if (count < 20){
            setCount(prevCount => prevCount + 1)
        }

    }
    console.log(count)

    function SubtractCount(){

        if (count > 0){
            setCount(prevCount => prevCount - 1)
        }
    }

    function ResetCount(){
        setCount(0)
    }

    return(
            <div className="card item">
                <img src={require("./SitePictures/500x500.jpg")} alt="item image" className="card-img-top" />
                <div className="card-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="card-subtitle">
                    <p>{`$${props.price.toFixed(2)}`}</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <button className="btn-sml" onClick={SubtractCount}>-</button>
                            <h3>{count}</h3>
                            <button className="btn-sml" onClick={AddCount}>+</button>
                        </div>
                    </div>
                    <div className="row">
                        <button onClick={()=> props.handleClick(count, props.title, props.price, ResetCount)}>Add to cart</button>
                    </div>
                </div>
            </div>
    )
}
export default GroceryItem