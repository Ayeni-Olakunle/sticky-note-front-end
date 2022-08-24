import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./get_link.scss"
import { Button } from 'react-bootstrap';

function Get_link(props) {
    const [list, setList] = useState([]);
    const ListAllVehicles = () => {
        const options = {
            url: `https://sticky-note-me.herokuapp.com/stickynote/`,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        axios
            .get(options.url, { headers: { ...options.headers } })
            .then((response) => {
                setList(response.data);
            })
            .catch((err) => {
                console.log("Error: ", err);
            })
    };
    useEffect(() => {
        ListAllVehicles();
    }, []);

    return (
        <div className="container1">
            <div className="switchButin">
                <Button>Notes</Button>
                <Button>Add Notes</Button>
            </div>
            <div className="container2">
                {
                    list.map((item, index) => {
                        return (
                            <div key={item.id} className="holdInfo">
                                <div className="info">
                                    <div>
                                        <h5>{item.name}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                    <div>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                                <div>
                                    <Button variant="success" size="sm">Copy</Button>
                                    <Button variant="success" size="sm">Details</Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Get_link;