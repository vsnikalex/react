import React from 'react';
import Order from "./Order";

class OrderList extends React.Component {
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
