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

        //handle the case where user clicks the delete button 
    handleDelete=itemID=>{
        console.log("hi there");
        console.log(itemID);
        const items = this.state.items.filter(item => item.id!== itemID);
        this.setState({items:　items});
    }
    

    render(){
        return(
            <React.Fragment>
                {this.state.items.map(item=>(<Item  key={item.id} 
                                                    value={item.value} 
                                                    onDelete={this.handleDelete}
                                                    id={item.id}>
                                                <div className="card-footer text-muted mb-3">
                                                    Numbers<b className="badge badge-info m-2">{item.value}</b>
                                                </div>
                                            </Item>))}
            </React.Fragment>
        )
    }
}

export default Items;