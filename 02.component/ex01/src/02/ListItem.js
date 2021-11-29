import React, {Component} from 'react';

export default class FoodList extends Component {
    render() {
        return(
            <li>{this.props.name} : {this.props.quantity}</li>
        )
    }
}