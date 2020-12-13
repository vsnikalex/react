import React from 'react';
import Order from "./Order";

class OrderList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        const source = new EventSource("http://localhost:8080/events/newOrders", { withCredentials: true } );
        source.onmessage = event => {
            console.log('New order created: ', JSON.parse(event.data))

            this.setState(state => {
                const orders = state.orders.concat(JSON.parse(event.data));

                return {
                    orders
                };
            });
        };
    }

    render() {
        console.log('List of orders: ', this.state.orders)

        return (
            // TODO: subscribe on SSE about new Orders,
            //  append new order each time
            <div className="container-fixed">
                <h1 className="underline">Orders</h1>
                <ul className="content-list">
                    <Order order={{"customer": "Vasilii"}}/>
                </ul>
            </div>
        );
    }
}

export default OrderList;
