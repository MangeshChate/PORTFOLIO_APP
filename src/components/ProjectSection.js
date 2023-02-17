import React from "react";
import ProjectCard from "./ProjectCard";
import { Consumer } from "../context";
import {Link} from "react-router-dom"

export default function ProjectSection() {
  
    return (
  <Consumer>
  
    {value =>{
      const {projects} = value;
      return(
      <div className="container text-center my-5">
        <h1 className="font-weight-light">
          My <span className="text-info">projects</span>
        </h1>
        <div className="lead">I build products. Just like website</div>
        <div  className="row my-5 pt-3" >
       
          {projects.slice(0,3).map((project) => (
            <div className="col-12 col-md-4 py-3">
          
            <ProjectCard
              project = {project}

            />
</div>
          ))};
          
        </div>
        <div className="my-5">
          <Link to="/all-projects" className="text-dark text-right">
            <h5>
              see my projects
              <i className="fas fa-arrow-right align-middle"></i>
            </h5>
          </Link>
        </div>
      </div>
      );
    }}
  </Consumer>
    );
}
