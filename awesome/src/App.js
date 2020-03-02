
import React, {Component} from "react"
import Navibar from './component/navibar'
import Items from './component/items'
import './App.css'

class App extends Component{
    state={
            items : [
                {id:0,value:0},
                {id:1,value:0},
                {id:2,value:0}
            ]
        
    };

    handleIncreament = item => {
        const items = [...this.state.items];
        const index = items.indexOf(item);
        items[index] = {...item};
        items[index].value++;
        this.setState({items});
    };

    handleDelete = itemId => {
        console.log("delete triggered");
        const items = this.state.items.filter(item => item.id != itemId);
        this.setState({items:items});
    }

    handleReset = () => {
        console.log("reset triggered");
        const items = this.state.items.map(i=>{
            console.log("looping through");
            i.value = 0;
            return i;
        });
        this.setState({items});
    }

    render(){
        return(
            <React.Fragment>
                <Navibar totalItems = {this.state.items.reduce((prev,curr)=>{
                    return prev+curr.value;
                },0)}
                />
                <Items handleReset = {this.handleReset}
                       handleDelete = {this.handleDelete}
                       handleIncreament = {this.handleIncreament}
                       items = {this.state.items}
                       />
            </React.Fragment>
        );
    }
}

export default App