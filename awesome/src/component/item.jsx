import React,{Component} from "react"

class Item extends Component{

    //where rendering starts
    render(){
        return(
                <React.Fragment>
                    <div className="card m-2">
                        <h5 className = {this.styleheader()}>"Name"</h5>
                        <div className="cardBody">
                            <button onClick={()=>this.props.handleIncreament(this.props.item)} className="btn btn-lg btn-outline-secondary m-2">
                                Increament
                            </button>
                            <button style ={{}} className="badge badge-primary m-2" onClick={()=>this.props.handleDelete(this.props.item.id)}>Delete</button>
                        </div>
                    </div>
                </React.Fragment>
        );
    }

    styleheader(){
        let classes = 'card-header h4 text-white bg-';
        classes += this.props.count === 0?"warning":"primary";
        return classes;
    }
    HandleBadge(){
        const {value} = this.props.item;
        return this.state.count === 0 ? "Nothing":this.state.count;
    }
}




export default Item