import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./get_link.scss"
import { Button } from 'react-bootstrap';
import Add_links from './add-links';

function Get_link(props) {
    const [list, setList] = useState([]);
    const [error, setError] = useState();
    const [current, setCurrent] = useState(1)
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
                setError(err.message);
            })
    };
    useEffect(() => {
        ListAllVehicles();
    }, []);

    const currentDisplay = (index) => {
        setCurrent(index);
    }

    return (
        <div className="container1">
            <div className="switchButin">
                <Button onClick={() => {
                    currentDisplay(1)
                }}>Add Notes</Button>
                <Button onClick={() => {
                    currentDisplay(0)
                }}>Notes</Button>

            </div>
            {current === 0 ? <div className="container2">
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
                                <div className="copy">
                                    <Button variant="success" size="sm"
                                        onClick={() => {
                                            navigator.clipboard.writeText(item.weblink)
                                            alert("Link Copied!");
                                        }}>Copy</Button>
                                    <Button variant="success" size="sm">Details</Button>
                                </div>
                            </div>
                        )
                    })
                }
                <p>{error}</p>
            </div> : <div className="container2 padMe">
                <Add_links />
            </div>}


        </div>
    );
}

export default Get_link;