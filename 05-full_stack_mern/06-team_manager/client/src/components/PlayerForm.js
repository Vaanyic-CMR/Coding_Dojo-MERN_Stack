import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const PlayerForm = _props => {
    const navigate = useNavigate();

    const [ errors, setErrors ] = useState({});
    const [ name, setName ] = useState("");
    const [ preferredPosition, setPreferredPosition ] = useState("");

    const handleSubmit = e => { e.preventDefault();
        axios.post("http://localhost:8000/api/players", { name, preferredPosition })
            .then( _res => navigate("/players/list") )
            .catch( error => setErrors(error.response.data.errors) )
    }

    return (
        <div className="row">
            <div style={{ border: "solid 2px #9d9d9d", padding: "3% 3% 0 3%"}}>
                <h3 className="mb-4">Add Player</h3>
                <Form onSubmit={ handleSubmit }>
                    <FormGroup className="row">
                            <Label className="form-label col-3 text-end">Player Name: </Label>
                            <div className="col">
                                <Input
                                    type="text"
                                    value={ name }
                                    onChange={ e => setName(e.target.value) }
                                    className="form-control row"/>
                                { errors.name? 
                                    <p className="text-danger row mt-2">*{ errors.name.message }</p>
                                    :null
                                }
                            </div>
                    </FormGroup>
                    <FormGroup className="row">
                            <Label className="form-label col-3 text-end">Preferred Position: </Label>
                            <div className="col">
                                <Input
                                    type="text"
                                    value={ preferredPosition }
                                    onChange={ e => setPreferredPosition(e.target.value) }
                                    className="form-control row"/>
                                { errors.preferredPosition? 
                                    <p className="text-danger row mt-2">*{ errors.preferredPosition.message }</p>
                                    :null
                                }
                            </div>
                    </FormGroup>
                    <FormGroup className="text-end">
                        <Button
                            className="m-3 fw-bold ps-5 pe-5"
                            color="success"
                            >ADD</Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
};
export default PlayerForm;