import React, {Component} from 'react'


class Navibar extends Component{
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark ml-2">
                    <a className="navbar-brand" href="#">
                        <h1>List of items<span className="badge badge-secondary m-2">{this.props.totalItems}</span></h1>
                    </a>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navibar;