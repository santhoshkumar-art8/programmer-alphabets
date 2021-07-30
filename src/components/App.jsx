import react from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Contacts from "../Contacts";

function contactdetails(Contact){
    return(
        <Note 
            name={Contact.name}
            des={Contact.des}
            img={Contact.img}
        />
    );
}


function App(){
    return(
        <div >
<Header />
{Contacts.map(contactdetails)}
<Footer />

        </div>
    );
}

export default App;