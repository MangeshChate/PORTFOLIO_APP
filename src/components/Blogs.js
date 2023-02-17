import React from 'react'
import BlogCard from './BlogCard'
import { Consumer } from "../context";

export default function Blogs() {
  
  return(
    <Consumer>
      {value=>{
        const {blogs} = value;
      return (
        <div className="container text-center my-5">
        <h1 className="font-weight-light">My <span className="text-info">Blogs</span></h1>
        <div className="lead">I write blogs. Just like website</div>
        <div key={blogs.id} className="row my-5 pt-3">
          {
            blogs.slice(0,3).map((blog)=>(
              <BlogCard blog={blog}/>
            ))
          }
        </div>
        <div className="my-5">
          <a href="#" className="text-dark text-right">
            <h5>
              see my blogs
              <i className="fas fa-arrow-right align-middle"></i>
            </h5>
          </a>
        </div>
      </div>
      )
        
      }}
    </Consumer>
  )
}
