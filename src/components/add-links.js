import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Add_links() {
    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            url: 'https://eager-pike-tie.cyclic.app/api/notes',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                linkName: name,
                link: link,
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
        <div>
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
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} />
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