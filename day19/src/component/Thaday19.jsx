
import React from 'react'
class Change extends React.Component{
    constructor(){
        super();
        this.state={
            number1: 1 ,
            number2: 1 ,
            number3: 1 ,
            number4: 1
        }
    }
    changeNumber1(){
        this.setState({number1: this.state.number1+1})

    }
    changeNumber2(){
        
        this.setState({number2: this.state.number2+1})
 
    }
    changeNumber3(){
 
        this.setState({number3: this.state.number3+1})

    }
    changeNumber4(){

        this.setState({number4: this.state.number4+1})
    }
    render(){
        return(
            <div className="main">
                <h2 className="mainh">There are 4 counter component instances that each manage their own state.</h2>
                <button className="b" onClick={()=>{this.changeNumber1()}}> {this.state.number1} </button>
                <button className="b" onClick={()=>{this.changeNumber2()}}> {this.state.number2} </button>
                <button className="b" onClick={()=>{this.changeNumber3()}}> {this.state.number3} </button>
                <button className="b" onClick={()=>{this.changeNumber4()}}> {this.state.number4} </button>
            </div>
            
        )
    }
}
export default Change;