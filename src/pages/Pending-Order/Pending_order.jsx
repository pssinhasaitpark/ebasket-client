import React from 'react'
import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';
import './Pending_order.css'
const Pending_order = () => {
    const order = {
        dateCreated: 'Mon Feb 24 2025 12:02:35 PM',
        orderNumber: '67bcl2373c213',
        status: 'In Process',
        timeElapsed: '6 hours 49 minutes',
        paymentMethod: 'Cash on Delivery',
        billing: {
            name: 'Bhavesh',
            address: 'Indore, Madhya Pradesh 452002, India',
            shippingAddress: 'Indore, Madhya Pradesh 452002, India',
        },
        vendor: {
            address: 'Iscon mall, Satellite Rd, Opp bidiwala park, Satellite, Ahmedabad, Gujarat 380015',
            phone: '8000000521',
        },
        items: [
            { name: 'India Gate Premium Basmati Rice', quantity: 1, price: 225.00 },
            { name: 'Red Rice', quantity: 1, price: 50.00 },
            { name: 'Madhur Sugar', quantity: 1, price: 59.00 },
            { name: 'India Gate Basmati Rice Dubar', quantity: 1, price: 100.10 }
        ],
        summary: {
            subtotal: 686.10,
            discount: -202546374756.57,
            tax: 10127544310.91,
            gst: 10.00,
            shipping: 1022.43,
            total: 212678431561.62
        }
    };
    return (
        <>
            <Container className="order-container">
                <Row>
                    <Col md={6}>
                        <Card className="order-card">
                            <Card.Body>
                                <Card.Title>General Details</Card.Title>
                                <p><strong>Date Created:</strong> {order.dateCreated}</p>
                                <p><strong>Order Number:</strong> {order.orderNumber}</p>
                                <p><strong>Status:</strong> <Badge bg="primary">{order.status}</Badge></p>
                                <p><strong>Time:</strong> {order.timeElapsed}</p>
                                <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="order-card">
                            <Card.Body>
                                <Card.Title>Billing Details</Card.Title>
                                <p><strong>Name:</strong> {order.billing.name}</p>
                                <p><strong>Address:</strong> {order.billing.address}</p>
                                <p><strong>Shipping Address:</strong> {order.billing.shippingAddress}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="order-card">

                            <h4>Order Items</h4>
                            <Table striped bordered hover className="order-table">
                                <thead>
                                    <tr>
                                        <th>Item Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.items.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>x {item.quantity}</td>
                                            <td>${item.price.toFixed(2)}</td>
                                            <td>${(item.quantity * item.price).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="order-card">
                            <Card.Body>
                                <Table className="order-summary">
                                    <tbody>
                                        <tr><td className='fw-bold'>Order Subtotal</td>
                                            <td className="text-end">${order.summary.subtotal.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                             <td className='fw-bold'>Order Discount</td>
                                             <td className="text-danger text-end">(${order.summary.discount.toFixed(2)})</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-bold'>Order Tax </td>
                                                 <td className="text-end">${order.summary.tax.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-bold'>GST</td>
                                                 <td className='text-end'>${order.summary.gst.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-bold'>Order Shipping</td>
                                                 <td className='text-end'>${order.summary.shipping.toFixed(2)}</td>
                                        </tr>
                                        <tr className="total-row"><td className='fw-bold'>Order Total</td>
                                             <td className='text-end'>${order.summary.total.toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Pending_order    