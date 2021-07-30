import react from "react";
import Contacts from "../Contacts";

        function Note(props){
            return(
        <div className="note" contentEditable="true" spellCheck="false" >     
    
        <h1>{props.name}</h1>
        <p>{props.des}</p>
        
        <img src={props.img} alt="no-img" height="170px" width="170px" className="img1"/>

       
        
        </div>
       
        
            );
        }
        <footer>
    <p>copyrighted by Santhosh Kumar @2021</p>
</footer>

 export default Note;