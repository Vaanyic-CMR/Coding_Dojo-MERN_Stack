import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Table, Button } from "reactstrap"

const AuthorTable = props => {
    const navigate = useNavigate();

    const [ authors, setAuthors ] = useState([]);

    const removeFromDom = authorID => setAuthors( authors.filter(author => author._id != authorID) );

    const delAuthor = id => {
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then( res => removeFromDom(id) )
            .catch( error => console.log(error) );
    };

    useEffect( () => {
        axios.get("http://localhost:8000/api/authors")
        .then( res => { setAuthors(res.data); } )
        .catch( err => console.log(err) );
    }, [] );

    return (
        <Table bordered hover striped className="mt-3 p-3">
            <thead>
                <th><h4>Author</h4></th>
                <th><h4>Actions Available</h4></th>
            </thead>
            <tbody>
                {
                    authors.map( (author, index) => { return (
                        <tr key={index}>
                            <td className="align-middle">
                                <h5 style={{color: "#8332ff"}}>{ author.name }</h5>
                            </td>
                            <td>
                                <Button
                                    className="m-2 ps-5 pe-5 btn-grad-edit"
                                    onClick={ () => navigate("/authors/"+author._id) }
                                    >Edit</Button>
                                <Button
                                    className="m-2 ps-5 pe-5 btn-grad-del"
                                    onClick={ () => delAuthor(author._id) }
                                    >Delete</Button>
                            </td>
                        </tr>
                    ) } )
                }
            </tbody>
        </Table>
    );
}
export default AuthorTable;