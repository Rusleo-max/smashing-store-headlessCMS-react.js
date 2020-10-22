import React, {Component} from "react";
import {Query} from "react-apollo";
import PRODUCT_QUERY from "./all-product";
import Product from "./Product";
import Cart from './Cart';
import Navbar from "./Navbar";

class Allproducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            show: false
        };
    }

    addItem = (item) => {
        this.setState({
            cartItems: this.state.cartItems.concat([item])
        })
    }

    showModal = () => {
        this.setState({show: true});
    }

    hideModal = () => {
        this.setState({show: false});
    }

    render() {
        return (
            <Query query={PRODUCT_QUERY}>
                {({loading, error, data}) => {

                    if (loading) return <div>Fetching products.....</div>
                    if (error) return <div>Error fetching products</div>

                    const items = data.productses;
                    const itemsSent = this.state.cartItems;

                    return (
                        <div>
                            <Navbar cart={itemsSent} show={this.showModal}/>
                            <Cart show={this.state.show} items={itemsSent} handleClose={this.hideModal}>
                            </Cart>
                            <div className="container mt-4">
                                <div className="row">
                                    {items.map(item => <Product key={item.id} product={item} addItem={this.addItem}/>)}
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Query>
        );
    }

}

export default Allproducts;