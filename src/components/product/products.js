import React from 'react';
import './product.css'
const intro = (props) => {
return(
    <div className="intro">

         <p onClick={props.delete}>welcome {props.name} </p> 
         <p onClick={props.delete}>number:{ props.index}</p> 
         <p>welcome {props.age} </p> 

         <input type="text" className="sing" onChange={props.input}/>
         </div>
)


}

export default intro