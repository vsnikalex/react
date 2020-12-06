import React from 'react';
import OrderProgressBar from "./OrderProgressBar";

class Order extends React.Component {
    render() {
        return (
            // TODO: use OrderId to subscribe on SSE with
            //  Stage Notifications
            //  { stage: [Customer, Kitchen, Payment], success: boolean }
            //  refresh BasicInfo and OrderState
            <div className="container-fixed">
                <ul className="content-list">
                    <div>
                        <li className="media">
                            <BasicInfo customer={this.props.order.customer} stage={"Order Accepted"}/>
                        </li>
                        <li className="content-list-item">
                            <OrderProgressBar />
                        </li>
                    </div>
                </ul>
            </div>
        );
    }
}

function BasicInfo(props) {
    return <div className="media-body">
                <div className="media-heading">{props.customer}</div>
                <div className="media-hint">{props.stage}</div>
            </div>;
}

export default Order;
