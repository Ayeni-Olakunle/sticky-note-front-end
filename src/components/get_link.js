import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./get_link.scss"
import { Button } from 'react-bootstrap';
import Add_links from './add-links';
import Edit_Link from './edit_link';

function Get_link(props) {
    const [list, setList] = useState([]);
    const [error, setError] = useState();
    const [current, setCurrent] = useState(1)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    const ListAllVehicles = () => {
        const options = {
            url: `https://eager-pike-tie.cyclic.app/api/notes/`,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        axios
            .get(options.url, { headers: { ...options.headers } })
            .then((response) => {
                setList(response.data);
                console.log(response);
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
                }}>Notes</Button>
                <Button onClick={() => {
                    currentDisplay(0)
                }}>Add Notes</Button>

            </div>
            {current === 1 ? <div className="container2">
                {
                    list.map((item, index) => {
                        return (
                            <div key={item._id} className="holdInfo">
                                <Edit_Link showMe={show} closeMe={handleClose} />
                                <div className="info">
                                    <div>
                                        <h5>{item.linkName}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                    <div>
                                        <p>{item.updatedAt}</p>
                                    </div>
                                </div>
                                <div className="copy">
                                    <Button variant="success" size="sm"
                                        onClick={() => {
                                            navigator.clipboard.writeText(item.link)
                                            window.clipboardData.setData("Text", item.link)
                                        }}>Copy</Button>
                                    <Button variant="danger" size="sm" onClick={() => {
                                        axios.delete(`https://eager-pike-tie.cyclic.app/api/notes/${item._id}`, {
                                        })
                                            .then(response => {
                                                alert("Item Deleted Successfully!")
                                                window.location.reload()
                                            })
                                            .catch(error => alert("Error: " + error.message))
                                    }}>Delete</Button>
                                    <Button variant="success" size="sm" onClick={handleShow}>Details</Button>
                                </div>
                            </div>
                        )
                    })
                }
                <p>{error}</p>
            </div> : <div className="container2 padMe">
                <Add_links />
            </div>
            }
        </div >
    );
}

export default Get_link;