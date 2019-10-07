import React, { Component } from "react";
import Backdrop from '../Backdrop/Backdrop';

export default class AddToCartModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
          title: this.props.title,
          content: this.props.children,
          canCancel: this.props.canCancel,
          canConfirm: this.props.canConfirm,
          quantity:0
        };
    }

    _onQuantityChange = (event) => {
        this.setState({quantity: event.target.value});
    }

    render() {
        return (
        <div>
            <Backdrop/>
                <div class="add_to_cart_modal">
                    <header class="add_to_cart_modal_header">Add to cart</header><br/>
                    <div class="add_to_cart_modal_">
                        <section>{this.state.content}</section><br/>
                        <input type='number' placeholder=' quantity' onChange={this._onQuantityChange}/>
                        <section>
                            <button class="add_to_cart_modal_button"onClick={this.props.onCancel}>Cancel</button>
                            <button class="add_to_cart_modal_button" onClick={(e) => {this.props.onConfirm(this.state.quantity);}}>Confirm</button>
                        </section>
                    </div>
                </div>
            </div>
        )
    }    
}