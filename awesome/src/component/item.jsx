import React,{Component} from "react"
import {render} from "react-dom"


class Item extends Component{
    state={
        count:1
    }

    handleclick(){
        alert(this.state.count);
    }

    
    render(){
        return(
            <div>
                <span>{this.styleCount()}</span>
                <button onClick={this.handleclick} >Click!</button>
            </div>
        );
    }

    styleCount(){
        return this.state.count === 0 ? "Nothing":this.state.count;
    }
}




export default Item