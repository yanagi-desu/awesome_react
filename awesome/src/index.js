import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Item from './component/item' 

const element = <h1>"this is awesome"</h1>
ReactDOM.render(element,document.getElementById("root"))
ReactDOM.render(<Item/>,document.getElementById('root2'))
