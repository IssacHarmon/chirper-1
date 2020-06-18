import React from "react";

const SubmitChirp = (props) => {
    return (
        <>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Who are you ?"
                    onChange={props.handleNewUser}
                />
            </div>
            <div className="form-group">
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="What do you want to say?"
                    onChange={props.handleNewMessage}
                ></textarea>
            </div>
            <button
                type="submit"
                className="btn btn-sm btn-secondary mb-4"
                onClick={props.handleSubmit}
            >
                Submit
      </button>
        </>
    );
};

export default SubmitChirp;
