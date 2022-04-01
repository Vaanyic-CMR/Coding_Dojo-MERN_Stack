import { useRef } from "react";

const NameForm = props => {
    const { setName } = props;

    const nameForm = useRef();

    const handleSubmit = e => { e.preventDefault();
        const form = nameForm.current
        setName( form["name"].value );
    }

    return (
        <div className="border border-dark p-5">
            <h2 className="mb-5">Get started right now!</h2>
            <form
                onSubmit={ handleSubmit }
                className="row"
                ref={ nameForm }
            >
                <div className="col">
                    <label
                        className="label-control fs-4"
                    >I want to start chatting with the name...</label>
                    <input
                        className="form-control"
                        name="name"
                        type="text"
                    />
                </div>
                <div className="col-3">
                    <button
                        className="btn btn-dark ps-5 pe-5"
                    >Start Chatting</button>
                </div>
            </form>
        </div>
    );
}
export default NameForm;