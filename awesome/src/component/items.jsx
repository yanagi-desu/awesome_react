import React,{Component} from "react"
import Item from "./item"

class Items extends Component{
    render(){
        return(
            <React.Fragment>
                <button onClick={this.props.handleReset} className = "btn btn-success btn-lg m-2">
                    Reset All
                </button>
                {this.props.items.map(item=>(
                                            <Item   key={item.id} 
                                                    handleDelete={this.props.handleDelete}
                                                    handleIncreament={this.props.handleIncreament}
                                                    item={item}
                                            />  
                                            ))
                }
            </React.Fragment>
        )
    }
}

export default Items;