import React from 'react';
import Order from "./Order";

class OrderList extends React.Component {

    componentDidMount() {
        const source = new EventSource("http://localhost:8080/events/newOrders", { withCredentials: true } );
        source.onmessage = function (event) {
            console.log(JSON.parse(event.data))
        };
    }

    render() {
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
