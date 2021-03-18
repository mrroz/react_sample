import React from 'react';
import './product.css'
const intro = (props) => {
return(
    <div className="intro">

         <p>welcome {props.name}</p> 
         <p>welcome {props.age}</p> 
         <h1>{props.children}</h1>
         </div>
)


}

export default intro