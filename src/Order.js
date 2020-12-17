import React from 'react';
import OrderProgressBar from "./OrderProgressBar";

class Order extends React.Component {
    render() {
        return (
            <div className="container-fixed">
                <ul className="content-list">
                    <div>
                        <li className="media">
                            <BasicInfo customer={this.props.order.customer} stage={this.props.stage}/>
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
                <div className="media-heading">{props.customer.name}</div>
                <div className="media-hint">{props.stage === undefined ? 'Order Accepted' : props.stage.state}</div>
            </div>;
}

export default Order;
