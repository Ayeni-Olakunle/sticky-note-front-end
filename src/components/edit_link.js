import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Modal } from 'react-bootstrap';

function Edit_Link(props) {
    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            url: 'https://sticky-note-me.herokuapp.com/stickynote/',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                name: name,
                weblink: link,
                description: description,
            }
        };

        axios(options)
            .then(response => {
                alert("Success!");
                window.location.reload()
            })
            .catch(err => alert(err));
    }

    return (
        <>
            <Modal show={props.showMe} onHide={props.closeMe}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Link Name</Form.Label>
                                <Form.Control type="text" placeholder="Link Name" value={name} onChange={e => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Link</Form.Label>
                                <Form.Control type="text" placeholder="Link" value={link} onChange={e => setLink(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Create Date</Form.Label>
                                <Form.Control type="date" placeholder="Link" value={link} disabled />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Create Time</Form.Label>
                                <Form.Control type="time" placeholder="Link" value={link} disabled />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Edit_Link;