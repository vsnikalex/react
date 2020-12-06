import React from 'react';
import OrderState from "./OrderState";

function OrderList() {

    return (
        <div className="container-fixed">
            <h1 className="underline">Orders</h1>
            <ul className="content-list">
                <li className="media">
                    <div className="media-body">
                        <div className="media-heading">Vasilii</div>
                        <div className="media-hint">Payment Accepted</div>
                    </div>
                </li>
                <li className="content-list-item">
                    <OrderState />
                </li>
                <li className="media">
                    <div className="media-body">
                        <div className="media-heading">Vasilii</div>
                        <div className="media-hint">Customer Verified</div>
                    </div>
                </li>
                <li className="content-list-item">
                    <OrderState />
                </li>
            </ul>
        </div>
    );
}

export default OrderList;
