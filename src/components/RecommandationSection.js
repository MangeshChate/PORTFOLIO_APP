import React from 'react'
import {v4 as uuid} from 'uuid'
import RecommandationCard from './RecommandationCard'
import { Consumer } from "../context";

export default function RecommandationSection() {
  return(
    <Consumer>
    {value=>{
        const {comment} = value;

        return (
            
         
          <div className="container-fluid my-5 track">
          <div className="row text-center  d-flex flex-nowrap overflow-auto scrollbar" >

              {comment.map((re)=>(
     
                  <RecommandationCard key={uuid()} recommendation={re}/>
   
              ))
      
              }
          </div>
        </div>
        
      
        )
    }}
        
    </Consumer>
  )
}



