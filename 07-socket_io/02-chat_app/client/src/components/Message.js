

const Message = props => {
    const { owner, message } = props;

    return (
        <div>
            {
                owner?
                <div className="row">
                    <span className="col"/>
                    <div className="col-5 ps-5 pt-3 bg-light border border-dark rounded-start">
                        <h5 className="text-start">You said:</h5>
                        <p className="text-start">{ message.text }</p>
                    </div>
                </div>
                :<div className="row">
                    <div className="col-5 ps-5 pt-3 bg-primary border border-dark rounded-end">
                        <h5 className="text-start">{ message.name } said:</h5>
                        <p className="text-start">{ message.text }</p>
                    </div>
                    <span className="col"/>
                </div>
            }
        </div>
    );
}
export default Message;