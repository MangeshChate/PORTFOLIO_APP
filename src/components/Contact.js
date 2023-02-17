import React ,{Component} from 'react';

class Contact extends Component {

   

        state ={
            name:"",
            email:"",
            description:"",
            submitMessage:"",
            submitMessageTextColor:""
        }

   
    onChange =(event)=>{
      this.setState({
        [event.target.name]:event.target.value
      })
    }
    onSubmit=(event)=>{
       event.preventDefault();

       let isSuccessful = true;
       const {name} = this.state;
       if(isSuccessful){
        this.setState({
            submitMessage:`Thank You ${name}. I will contact you soon!`,
            submitMessageTextColor:"text-info"
        })
       }else{
        this.setState({
            submitMessage:`Oops ! Something went wrong . please try again later :(`
            ,submitMessageTextColor:"text-danger"

        })
       }
    }
    render(){
        const {submitMessageTextColor,submitMessage} = this.state;
        return (

            <div className="container my-5">
                <h1 className="font-weight-light text-center py-5">
                    <span className="text-info">Thank You! </span>for your interst
                </h1>
                <div className="row justify-content-center">
                    <div className="col-11 col-lg-5">
                        <form onSubmit={this.onSubmit}>
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
                                <label for="exampleFormControlTextarea1">
                                Tell me about your project *</label>
                                
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    name="description"
                                    rows="5"
                                    onChange={this.onChange}
                                ></textarea>
                            </div>
                            <button   className="btn btn-dark m-2 float-right" >
                                Let's talk buiness
                            </button>
                        </form>
                    </div>
                </div>
                <div className="py-5 mx-2 text-center">
                <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                </div>


            </div>

                )
    }
}

export default Contact;