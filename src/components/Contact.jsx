const Contact = () => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Phone" aria-label="Phone" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Message" aria-label="Message" />
                </div>
            </div>
        </div>
    );
};

export default Contact;