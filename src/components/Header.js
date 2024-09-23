import React from "react";


function Header(props){


    return(
        <div className="row d-flex header-border ">
            <div className="col-6 p-2">
                <h1 className="">COOPER<sup>S</sup>MART</h1>
            </div>
            <div className="col-6 p-2 d-flex justify-content-end">
                <button className="" onClick={props.handleOnClick}>icon here</button>
            </div>

        </div>
    )
}
export default Header