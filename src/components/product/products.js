import React from 'react';
import './product.css'
const intro = (props) => {
return(
    <div className="intro">

         <p>welcome {props.name}</p> 
         <p onClick={props.click}>welcome {props.age}</p> 
         <h1 onClick={props.show}>{props.children}</h1>
         <input type="text" className="sing" onChange={props.input}/>
         </div>
)


}

export default intro