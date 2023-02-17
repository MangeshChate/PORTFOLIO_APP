import React from "react";

function Title(props) {
//   const name = "Mangesh Chate";
//   const leadText = "I am a Freelancer from India";
const {name , leadText} = props;
  return (
    <div
      className="container title"
      
    >
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src="https://pbs.twimg.com/profile_images/1287881297637990401/s-j7Nuj0_400x400.jpg"
            alt="mangesh chate"
          />
        </div>

        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            Hi, I am <span className="text-info"> {name} </span>
          </div>
          <h4 className="font-weight-light">{leadText}</h4>
        </div>
      </div>
    </div>
  );
}
export default Title;
