import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button"


class Counter extends React.Component{

    render() {
        return (
        <div>
            <h2>{this.props.count}</h2>
            <Button variant="danger rounded-circle" onClick={this.props.substract}>-</Button>
            <Button variant="success rounded-circle ms-3" onClick={this.props.increment}>+</Button>
        </div>
    )   
  }
}

export default Counter