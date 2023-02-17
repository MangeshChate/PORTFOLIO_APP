import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";

export default class AddProject extends Component {
  state = {
    imageUrl: "",
    title: "",
    body: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onBodyChange = (value) => {
    this.setState({
      body: value,
    });
  };
  onSubmit = (handler, event) => {
    event.preventDefault();

    let isSuccessful = true;

    if (isSuccessful) {
      this.setState({
        submitMessage: `Project Publish Successfully .!`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: `Oops ! Something went wrong . please try again later :(`,
        submitMessageTextColor: "text-danger",
      });
    }
    // const { imageUrl, excerpt, title, body } = this.state;
    const newProject = {
      id: uuid(),
      imageUrl: this.state.imageUrl,
      title: this.state.title,
      excerpt: this.state.excerpt,
      body: this.state.body,
    };
    handler("ADD_PROJECT",newProject);
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            imageUrl,
            title,
            body,

            submitMessage,
            submitMessageTextColor,
          } = this.state;

          const { handler } = value;

          return (
            <div className="container-fluid  py-5">
              <h1 className="text-center my-5 font-weight-light">
                Add <span className="text-info">Project</span>
              </h1>
              <div className="row px-3">
                <div className="col-12 col-lg-6 px-lg-5">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <div className="form-group">
                      <label htmlFor="imageUrl">Featured Image Url *</label>
                      <input
                        type="text"
                        name="imageUrl"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Title *</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="excerpt">Excerpt *</label>
                      <input
                        type="text"
                        name="excerpt"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <SimpleMDE
                      className="my-3"
                      onChange={this.onBodyChange}
                      editorOptions={{
                        hideIcons: ["preview", "side-by-side", "fullscreen"],
                      }}
                    />
                    <button
                      className="btn btn-dark  btn-block my-5"
                      style={{ backgroundColor: "black" }}
                    >
                      Publish
                    </button>
                  </form>
                  <div className="text-center">
                    <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                  </div>
                </div>
                {/* render  */}
                <div className="col-12 col-lg-6 markdown">
                  <div className="justify-content-center">
                    <img src={imageUrl} alt={title} className="img-fluid" />
                  </div>
                  <h1 className="font-weight-light text-center my-5">
                    {title}
                  </h1>
                  <ReactMarkdown className="markdown">{body}</ReactMarkdown>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
