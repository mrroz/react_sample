import React,{useState} from 'react';
import Intro from './components/product/products'
import './app.css'


class App extends React.Component{
    state={
        products:[
            {name :"ali" , age:25},
            {name :"mori" , age:26},
            {name :"saeed" , age:35},
        ]
    }

    changeVarHandler= () => {
       this.setState({
        products:[
            {name :"goli" , age:100},
            {name :"ahmad" , age:250},
            {name :"farid" , age:350},
        ]
       })

    }

    render(){
        return (
            <div className="info" >
                <h1>hello morteza </h1>
                <Intro 
                 name={this.state.products[1].name}
                 age={this.state.products[1].age}
                 /> 
                   <Intro 
                 name={this.state.products[1].name}
                 age={this.state.products[1].age}
                 /> 
                   <Intro 
                 name={this.state.products[2].name}
                 age={this.state.products[2].age}
                 /> 
               
                <button onClick={this.changeVarHandler} >change age</button>
            </div>
                
            )


    }
}





// const App = (props) =>{

// const [productState,setproductState] = useState({
//     products:[
//         {name :"ali" , age:25},
//         {name :"mori" , age:26},
//         {name :"saeed" , age:35},
//     ]
// })

// const changeVarHandler=()=>{
//     setproductState({
//         products:[
//             {name :"goli" , age:500},
//             {name :"ahmad" , age:650},
//             {name :"farid" , age:7500},
//         ]
//     })   
// }

//     return (
//         <div className="className" id="container">
//             <h1>hello morteza </h1>
//             <Intro 
//              name={productState.products[1].name}
//              age={productState.products[1].age}
//              /> 
//                <Intro 
//              name={productState.products[1].name}
//              age={productState.products[1].age}
//              /> 
//                <Intro 
//              name={productState.products[2].name}
//              age={productState.products[2].age}
//              /> 
           
//             <button onClick={changeVarHandler} >change age</button>
//         </div>
            
//         )    

    

// }





export default App
