import React, { useEffect } from 'react';
import axios from "axios";
import "./get_link.scss"
import { Button } from 'react-bootstrap';

function Get_link(props) {
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
                console.log(response);
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
            <div className="container2">working well</div>
        </div>
    );
}

export default Get_link;