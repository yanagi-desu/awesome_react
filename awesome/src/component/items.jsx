import React,{Component} from "react"
import Item from "./item"

class Items extends Component{

    state={
        items : [
            {id:0,value:0},
            {id:1,value:20},
            {id:2,value:0}
        ]
    }

    render(){
        return(
            <React.Fragment>
                {this.state.items.map(item=>(<Item key={item.id} value={item.value}>
                                                <div className="card-footer text-muted">
                                                    Numbers<b className="badge badge-info m-2">{item.value}</b>
                                                </div>
                                            </Item>))}
            </React.Fragment>
        )
    }
}

export default Items;