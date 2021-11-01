import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import './Contact.css'

const Contract = () => {
    return (
        <div className="p-3 contact-form container">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="">Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <input className="bg-danger border-2 border-danger m-4 p-2" type="submit" />
            </Form>
            <p>Our team will Contact you as soon as possible!</p>
        </div>
    );
};

export default Contract;