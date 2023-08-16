import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import DestinationData from "./DestinationData"
import image3 from "../images/3.jpg"
import image4 from "../images/4.jpg"

import "./DestinationStyle.css"

const Destination = ()=>{
    return(
        
            <div className="destination">
                <h1>Popular Destination</h1>
                <p>Tourd give you opportunity to see a lot, within a time frame.</p>
                
                <DestinationData
                cName="first-des"
                heading="Shivamogga"
                text="Shimoga is a very popular tourist destination in Karnataka and a storehouse of beautiful things. This town is famous for handicrafts, rosewood carvings, sandalwood, sarees with Kasuri work, and wooden toys made of lacquer."

                img1={image1}
                img2={image2}
                />
                
                <DestinationData
                cName="sec-des"
                heading="Hassan"
                text="Hassan is mainly famous for its age-old temples like Lakshmi Narsimha Temple, Kedareshwar Temple, and Hoysala Temples. They represent the history and cultures of Hassan very well. Hassan comprises various temples with great historical significance."

                img1={image3}
                img2={image4}
                />
               
            </div>
       
       
    )
}

export default Destination