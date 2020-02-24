import React,{Component} from "react"
import {render} from "react-dom"


class Item extends Component{
    state={
        count:1
    }

    constructor(){
        super();
        this.handleclick=this.handleclick.bind(this);
    }

    handleclick=()=>{
        this.setState({count:this.state.count+=1});
    }

    
    render(){
        return(
            <div>
                <span style = {{border:"7px solid lightgrey"}}
                className="badge badge-info m-1"
                >{this.styleCount()}</span>
                <button style = {{}}
                className="badge badge-primary" onClick={this.handleclick} >Click!</button>
            </div>
        );
    }

    styleCount(){
        return this.state.count === 0 ? "Nothing":this.state.count;
    }
}




export default Item