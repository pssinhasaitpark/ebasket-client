import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';
import './Pending_order.css'
import { useLocation , useParams } from "react-router-dom";
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Pending_order = () => {
    const [UserOrder, setUserOrder] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const fetchOrderData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/orders/getorderbyid/${id}`, {
 
            });
            
            setUserOrder(response.data.order); // Assuming the response contains a user object
            setLoading(false);
            // {console.log('order' , response.data.order)}
        } catch (err) {
            setError('Failed to fetch user data');
            setLoading(false);
        }
    };
       useEffect(() => {
            if (id) {
                setUserOrder([id]); 
            }
        }, [id]);
    useEffect(() => {
        fetchOrderData();
    }, []);

    const order = {
        dateCreated: UserOrder?.generalDetails?.dateCreated.split('T')[0],
        orderNumber: UserOrder?.generalDetails?.orderNumber,
        status: UserOrder?.generalDetails?.status,
        timeElapsed: UserOrder?.generalDetails?.time,
        paymentMethod: UserOrder?.generalDetails?.paymentMethod,
        billing: {
            name: UserOrder?.billingDetails?.name,
            address: UserOrder?.billingDetails?.address,
            shippingAddress: UserOrder?.billingDetails?.shippingAddress,
        },
        vendor: {
            address: UserOrder?.vendor?.address,
            phone: UserOrder?.vendor?.phone,
        },
        items: [
            {   name: UserOrder?.orderItems?.items.map(item => item.itemName), 
                quantity: UserOrder?.orderItems?.items.map(item => item.quantity), 
                price: UserOrder?.orderItems?.items.map(item => item.price), 
                Image: UserOrder?.orderItems?.items.map(item => item.itemImage) 
            },
        ],
        summary: {
            subtotal: (UserOrder?.orderItems?.orderSubtotal?? 0).toFixed(2),
            discount: -(UserOrder?.orderItems?.orderDiscount ?? 0).toFixed(2),
            tax: (UserOrder?.orderItems?.orderTax?? 0).toFixed(2),
            gst: (UserOrder?.orderItems?.gst?? 0).toFixed(2),
            shipping: (UserOrder?.orderItems?.orderShipping?? 0).toFixed(2),
            total: (UserOrder?.orderItems?.orderTotal?? 0).toFixed(2)
        }
    };
    return (
        <>
            <Container className="order-container">
                <Row>
                    <Col md={6}>
                        <Card className="order-card">
                            <Card.Body>
                                <Card.Title >General Details</Card.Title>
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
                    <Col md={6}>
                    <Card className="order-card">
                            <Card.Body>
                                <Card.Title>Vendor Details</Card.Title>
                                <p><strong>Address:</strong> {order.vendor.address}</p>
                                <p><strong>Phone:</strong> {order.vendor.phone}</p>
                             
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="order-card">

                            <h4>Order Items</h4>
                            <Table striped bordered hover className="order-table">
                                <thead className='thead'>
                                    <tr>

                                      <th>Image</th>
                                        <th>Item Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.items.map((item, index) => (
                                        <tr key={index}>
                                             <td className='image'><img src={item.Image} alt={item.itemName} width={100} height={100} rounded /></td>
                                            <td>{item.name}</td>
                                            <td>x {item.quantity}</td>
                                            <td>${item.price}</td>
                                            <td>${(item.quantity * item.price)}</td>
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
                                            <td className="text-end">${order.summary.subtotal}</td>
                                        </tr>
                                        <tr>
                                             <td className='fw-bold'>Order Discount</td>
                                             <td className="text-danger text-end">${(order.summary.discount)}</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-bold'>Order Tax </td>
                                                 <td className="text-end">${(order.summary.tax)}</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-bold'>GST</td>
                                                 <td className='text-end'>${(order.summary.gst)}</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-bold'>Order Shipping</td>
                                                 <td className='text-end'>${order.summary.shipping}</td>
                                        </tr>
                                        <tr className="total-row"><td className='fw-bold'>Order Total</td>
                                             <td className='text-end'>${(order.summary.total)}</td>
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