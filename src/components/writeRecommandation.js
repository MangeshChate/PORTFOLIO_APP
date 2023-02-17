import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";

class Recommand extends Component {
  state = {
    name: "",
    email: "",
    company: "",
    designation: "",
    recommandation: "",

    submitMessage: "",
    submitMessageTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
    onSubmit = (handler, event) => {
      event.preventDefault();

      let isSuccessful = true;
      const { name } = this.state;
      if (isSuccessful) {
        this.setState({
          submitMessage: `Thank You ${name}. I will contact you soon!`,
          submitMessageTextColor: "text-info",
        });
      } else {
        this.setState({
          submitMessage: `Oops ! Something went wrong . please try again later :(`,
          submitMessageTextColor: "text-danger",
        });
      }
      const newComment = {
        id: uuid(),
        name: this.state.name,
        company: this.state.company,
        designation: this.state.designation,
        message: this.state.recommandation,
      };
      handler("ADD_RECOMMENDATION", newComment);
    };
  
  render() {
    return (
      <Consumer>
        {(value) => {
          const { submitMessageTextColor, submitMessage } = this.state;
          const { handler } = value;
          return (
            <div className="container my-5">
              <h1 className="font-weight-light text-center py-5">
                <span className="text-info">Thank You! </span>for your interst
              </h1>
              <div className="row justify-content-center">
                <div className="col-11 col-lg-5">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        name="name"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlInput2">Email * </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="exampleFormControlInput2"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlInput3">Company *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput3"
                        name="name"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlInput4">
                        Designation *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput4"
                        name="name"
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <label for="exampleFormControlTextarea5">
                        Recommandations *
                      </label>

                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea5"
                        name="description"
                        rows="5"
                        onChange={this.onChange}
                      ></textarea>
                    </div>
                    <button className="btn btn-danger m-2 float-right">
                      Lot's Of Love
                    </button>
                  </form>
                </div>
              </div>
              <div className="py-5 mx-2 text-center">
                <h5 className={submitMessageTextColor}> {submitMessage}</h5>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Recommand;
