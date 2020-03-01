import React,{Component} from "react"

class Item extends Component{
    state={
        count:this.props.value,
        itemlist:[
            {
                id:0,
                context:"primary",
                modifier:"list-group-item list-group-item-primary"
            },
            {
                id:1,
                context:"secondary",
                modifier:"list-group-item list-group-item-secondary"
            },
            {
                id:2,
                context:"success",
                modifier:"list-group-item list-group-item-success"
            },
            {
                id:3,
                context:"danger",
                modifier:"list-group-item list-group-item-danger"
            }
            ]
    };

/**
    constructor(){
        super();
        this.handleclick=this.handleclick.bind(this);

    }
 * 
 */
    //handle the case where user clicks the add button 
    handleclick=e=>{
        this.setState({count:this.state.count+=1});
    }

    //where rendering of list starts 
    renderItems(){
        if(this.state.itemlist.length === 0){
            return(
                <div className="alert alert-warning" role="alert">
                    this is no item in the list 
                </div>
            )
        }else{
            return(
                <ul className="list">
                    {this.state.itemlist.map(item=>(
                        <li key={item.id}
                        className={item.modifier}>{item.context}</li>
                    ))}
                </ul>
            )
        }
    }
    
    //where rendering starts
    render(){
        return(
            <div>
                <React.Fragment>
                    <div className="card mb-2">
                        <h5 className = {this.styleheader()}>"Name"</h5>
                    </div>
                </React.Fragment>
                <span style = {{border:"9px solid lightgrey"}}
                className="badge badge-info mr-2"
                >{this.HandleBadge()}</span>
                <button style = {{}}
                className="badge badge-primary" onClick={this.handleclick} >Click!</button>
                <button style ={{}} className="badge badge-primary ml-2" onClick={()=>this.props.onDelete(this.props.id)}>Delete</button>
                <React.Fragment>
                    {this.renderItems()}
                    {this.props.children}
                </React.Fragment>
            </div>
        );
    }

    styleheader(){
        let classes = 'card-header h4 text-white bg-';
        classes += this.state.count === 0?"warning":"primary";
        return classes;
    }
    HandleBadge(){
        return this.state.count === 0 ? "Nothing":this.state.count;
    }
}




export default Item