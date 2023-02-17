import React from 'react';
import {Link} from "react-router-dom"
function Footer(){
    return(
        <footer>
        <div className="container-fluid text-center" style={{backgroundColor:"#252525"}}>
          <div className="row py-5">
            <div className="col-12">
              <h2 className="text-light">Interested in working with me ?</h2>
              <button className="btn btn-outline-light btn-lg">Let's Talk</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <h5 className="text-info">More Links</h5>
              <a href="#" className="text-light d-block">Blogs <i className="fas fa-heart text-light"></i></a>
              <Link to="/" className="text-light d-block">
              Home <i className="fas fa-heart text-light"></i>
              </Link>
             
              <Link to="/contact" className="text-light d-block">
                Write a recommendation <i className="fas fa-heart text-light"></i>
              </Link>
              <Link to="/write-a-Recommandentaion" className="text-light d-block">
                Write a recommendation <i className="fas fa-heart text-light"></i>
              </Link>
            </div>
            <div className="col-12 col-md-4 text-light text-justify py-3">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
                provident voluptatem odio eius sint voluptatum. Libero, assumenda
                aut pariatur fugiat dolor accusamus quaerat ut incidunt voluptas.
                Quis quia voluptatem voluptates fugiat quam?
              </p>
            </div>
            <div className="col-12 col-md-4 py-3 align-items-center" 
            style={{display:"flex"
                    ,alignItems:"center",
                    justifyContent:"center",
                    flexDirection:"column"}}
         >
              <h5 className="text-info">Social</h5>
              <a href="#">
                <i className="fab fa-linkedin text-light h1 d-block"></i>
              </a>
              <a href="#">
                <i className="fab fa-github text-light h1 d-block"></i>
              </a>
              <a href="#">
                <i className="fab fa-envelope text-light h1 d-block"></i>
              </a>
            </div>
          </div>
    
          <div className="text-muted pu-3">
            <p>Copyright @ 2022</p>
          </div>
        </div>
      </footer>
    );
}
export default Footer;