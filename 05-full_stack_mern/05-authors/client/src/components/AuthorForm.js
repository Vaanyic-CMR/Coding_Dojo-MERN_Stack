import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const AuthorForm = props => {
    const navigate = useNavigate();

    const { errors, formUse, initName, onSubmitProp } = props;

    const [ name, setName ] = useState(initName);

    const handleSubmit = e => { e.preventDefault();
        onSubmitProp({ name });
        setName("");
    }

    return (
        <div className="row">
            <p style={{color: "#8332ff", margin: "1%"}}>{ formUse }</p>
            <div style={{ border: "solid 1px #9d9d9d", padding: "3%"}}>
                <Form onSubmit={ handleSubmit }>
                    <FormGroup className="col">
                            <Label className="form-label">Name: </Label>
                            { errors.name? 
                                <p className="text-danger">{ errors.name.message }</p>
                                :null
                            }
                            <Input
                                type="text"
                                value={ name }
                                onChange={ e => setName(e.target.value) }
                                className="form-control"/>
                    </FormGroup>
                    <FormGroup className="col text-center">
                        <Button
                            onClick={ () => navigate("/authors") }
                            className="btn m-3 fw-bold"
                            color="primary"
                            size="lg"
                            >Cancel</Button>
                        <Button
                            className="btn m-3 fw-bold"
                            color="primary"
                            size="lg"
                            >Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
};
export default AuthorForm;