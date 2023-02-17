import React from 'react'
import {Link} from 'react-router-dom'
export default function BlogCard(props) {
const{id,blogName , imgUrl , description} = props.blog;
  return (
   <div className="col-12 col-md-4 my-2">
        <div className="card shadow h-100">
          <img className="card-img-top"
            src={imgUrl}
            alt="Free image" />
          <div className="card-body">
            <h4 className="card-title">{blogName}</h4>
            <p className="card-text">{description}</p>
            <Link to={`/blog/${id}`} className="stretched-link"></Link>
          </div>
        </div>
    </div>
  )
}
