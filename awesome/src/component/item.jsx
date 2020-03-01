import React,{Component} from "react"

class Item extends Component{

    //where rendering starts
    render(){
        return(
                <React.Fragment>
                    <div className="card mb-2">
                        <h5 className = {this.styleheader()}>"Name"</h5>
                        <div className="cardBody">
                            <button onClick={()=>this.props.onIncrement(this.props.item)} className="btn btn-lg btn-outline-secondary">
                                Increament
                            </button>
                            <button style ={{}} className="badge badge-primary ml-2" onClick={()=>this.props.onDelete(this.props.id)}>Delete</button>
                        </div>
                    </div>
                </React.Fragment>
        );
    }

    styleheader(){
        let classes = 'card-header h4 text-white bg-';
        classes += this.state.count === 0?"warning":"primary";
        return classes;
    }
    HandleBadge(){
        const {value} = this.props.item;
        return this.state.count === 0 ? "Nothing":this.state.count;
    }
}




export default Item