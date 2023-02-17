import React from "react";
import { Consumer } from "../context";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import {useParams} from "react-router-dom"
export default function ProjectPage(props) {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        const id = props.match.useParams.id;
        const project = projects.filter((project)=>project.id==id)[0];
        const {imageUrl,title,body} = project;

        return (
          <div className=" container py-5 my-5">
            <div className="justify-content-center">
              <img src={imageUrl} alt={title} className="img-fluid" />
            </div>
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            <ReactMarkdown className="markdown">{body}</ReactMarkdown>
          </div>
        );
      }}
    </Consumer>
  );
}
