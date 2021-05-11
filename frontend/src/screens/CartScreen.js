import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { Col, Image, ListGroup, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Message from "../components/Message";

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id;

    const qty = location.search ? Number(location.search.split("=")[1]) : 1;

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const removeFromCartHandler = (id) => {
        console.log(id);
    };
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        Your Cart Is Empty <Link to="/">Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant="flush">
                        {cartItems.map((items) => (
                            <ListGroup.Item key={items.productId}>
                                <Row>
                                    <Col md={2}>
                                        <Image
                                            src={items.image}
                                            alt={items.name}
                                            fluid
                                            rounded
                                        ></Image>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${items.productId}`}>{items.name}</Link>
                                    </Col>
                                    <Col md={2}>₹{items.price * 100}</Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="select"
                                            value={items.qty}
                                            onChange={(e) =>
                                                dispatch(
                                                    addToCart(items.productId, Number(e.target.value))
                                                )
                                            }
                                        >
                                            {[...Array(items.countInStock).keys()].map((i) => (
                                                <option key={i + 1} value={i + 1}>
                                                    {i + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() => removeFromCartHandler(items.productId)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={2}></Col>
            <Col md={2}></Col>
        </Row>
    );
};

export default CartScreen;
