import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Add_links(props) {
    return (
        <div>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Link Name</Form.Label>
                        <Form.Control type="text" placeholder="Link Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Link</Form.Label>
                        <Form.Control type="text" placeholder="Link" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Add_links;