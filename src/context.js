import React,{Component} from "react";
const Context = React.createContext();

export class Provider extends Component{
  handler = (action,newObject)=>{
    switch(action){
      case "ADD_PROJECT":
        this.setState({
          projects:[newObject, ...this.state.projects],
        });
        break;

      case "ADD_BLOG":
        this.setState({
          projects:[newObject, ...this.state.blogs],
        });
        break;
       
        case "ADD_RECOMMENDATION":
          this.setState({
            projects:[newObject, ...this.state.recommendation],
          });
          break;
    }
  }
    state = {
      handler:this.handler,
        projects: [
            {
                id:1,
              title: "project 1",
              excerpt: "This is my project about...",
              imageUrl:"https://images.businessnewsdaily.com/app/uploads/2022/04/04073347/Laptop_undrey_getty.jpg",
              body:"body1"
            },
            {
                id:2,
              title: "project 2",
              excerpt: "This is my project about...",
              imageUrl:"https://images.businessnewsdaily.com/app/uploads/2022/04/04073347/Laptop_undrey_getty.jpg",
              body:"body1"
           
            },
            {
                id:3,
              title: "project 3",
              excerpt: "This is my project about...",
              imageUrl:"https://images.businessnewsdaily.com/app/uploads/2022/04/04073347/Laptop_undrey_getty.jpg",
            
              body:"body1"
            },
            {
              id:4,
            title: "project 4",
            excerpt: "This is my project about...",
            imageUrl:"https://images.businessnewsdaily.com/app/uploads/2022/04/04073347/Laptop_undrey_getty.jpg",
         
            body:"body1"
          },
          ],
          skills:[
           
              {
                id: 1,
                name: "HTML5",
                imageUrl:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
                starsTotal: 3,
                starsActive: 2,
              },
              {
                id: 2,
                name: "CSS",
           imageUrl:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
                starsTotal: 3,
                starsActive: 2,
              },
              {
                id: 3,
                name: "JS",
                imageUrl:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
                starsTotal: 3,
                starsActive: 1,
              },
              {
                id: 4,
                name: "BootStrap",
                imageUrl:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
                starsTotal: 3,
                starsActive: 3,
              },
              {
                id: 5,
                name: "React",
                imageUrl:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
                starsTotal: 3,
                starsActive: 2,
              },
              {
                id: 6,
                name: "Python",
                imageUrl:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
                starsTotal: 3,
                starsActive: 1,
              },
              {
                id: 7,
                name: "Flask",
                imageUrl:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
                starsTotal: 3,
                starsActive: 2,
              },
              {
                id: 8,
                name: "MySql",
                imageUrl:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
                starsTotal: 3,
                starsActive: 1,
              }
            
            ],
            comment: [
              {
                  id:1,
                  name:"Random Guy 1",
                  company:"ABC Company",
                  designation:"CEO",
                  message:"He is a Good Engineer with Excellent Skills, and also my good friend ."
              },
              {
                  id:2,
                  name:"Random Guy 2",
                  company:"xyz Company",
                  designation:"CEO",
                  message:"He is a not good."
              },
              {
                  id:3,
                  name:"Random Guy 3",
                  company:"OOO Company",
                  designation:"CEO",
                  message:" He is my best friend and team partner !!! "
              },
            
              
          ],
          blogs : [
            {
              id:1,
              blogName:"Blog 1",
              imgUrl:"https://images.businessnewsdaily.com/app/uploads/2022/04/04073347/Laptop_undrey_getty.jpg",
              description:"this is my blog about..."
            },
            {
              id:2,
              blogName:"Blog 2",
              imgUrl:"https://images.businessnewsdaily.com/app/uploads/2022/04/04073347/Laptop_undrey_getty.jpg",
              description:"this is my blog about..."
            },
            {
              id:3,
              blogName:"Blog 3",
              imgUrl:"https://images.businessnewsdaily.com/app/uploads/2022/04/04073347/Laptop_undrey_getty.jpg",
              description:"this is my blog about..."
            },
          ]
          }
    
    render(){
        return(
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;