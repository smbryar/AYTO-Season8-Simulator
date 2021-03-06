import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './AddedData.css';

function AddedData(props) {
    
    function handleDeleteButton(e) {
        props.deletePair(e.target.id);
    }

    return (
        <div className="added-data">
            <div className = "m-2">
                <h4>Added Truth Booths</h4>
                <Table bordered size="sm">
                    <tbody>
                        {props.addedTruthBooths.map((booth,i) => (
                            <tr key={i} style={booth.correct ? { backgroundColor: "rgb(142, 216, 142)" } : { backgroundColor: "rgb(211, 144, 144)" }}>
                                {booth.pair.map((person,i) => (
                                    <td key={i}>{person}</td>))}
                                    <td key={i} style = {{backgroundColor: "lightskyblue"}}><Button id={i} onClick = {e => handleDeleteButton(e)}>Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default AddedData;
