import React from 'react';
import Order from "./Order";

class OrderList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            orderStageUpdates: new Map()
        };
    }

    componentDidMount() {
        const ordersSource = new EventSource("http://localhost:8080/events/newOrders", { withCredentials: true } );
        ordersSource.onmessage = event => {
            console.log('New order created: ', JSON.parse(event.data))

            this.setState(state => {
                const orders = state.orders.concat(JSON.parse(event.data));

                return {
                    orders
                };
            });
        };

        const statesSource = new EventSource("http://localhost:8080/events/stateUpdates", { withCredentials: true } );
        statesSource.onmessage = event => {
            console.log('State change: ', JSON.parse(event.data))

            this.setState(state => {
                const orderStageUpdates = state.orderStageUpdates.set(JSON.parse(event.data).orderId, JSON.parse(event.data));

                return {
                    orderStageUpdates
                };
            });
        };
    }

    render() {
        // console.log('List of orders: ', this.state.orders)
        // console.log('List of states: ', this.state.orderStateUpdates)

        let orderComponents = this.state.orders.map((o) =>
            <Order key={o.id} order={o} stage={this.state.orderStageUpdates.get(o.id)}/>
        )

        return (
            <div className="container-fixed">
                <h1 className="underline">Orders</h1>
                <ul className="content-list">
                    {orderComponents}
                </ul>
            </div>
        );
    }
}

export default OrderList;
