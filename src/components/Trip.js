import TripData from "./TripData"
import "./TripStyles.css"
import image1 from "../images/card1.jpg"
import image2 from "../images/card2.jpg"
import image3 from "../images/card3.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
           
           <div className="tripcard">
                <TripData 
                    image={image1}
                    heading="Trip to Goa"
                    text="Goa is a coastal paradise in India known for its pristine beaches, vibrant nightlife, and Portuguese heritage. With a perfect blend of sun, sand, and sea, it offers a unique and unforgettable experience for travelers seeking relaxation and adventure. Explore its lively markets, indulge in water sports, and immerse yourself in the rich cultural heritage of this tropical destination
                    ."
                 />
                <TripData 
                    image={image2}
                    heading="Trip to Varanasi"
                    text="The land of Varanasi (Kashi) has been the ultimate pilgrimage spot for Hindus for ages. Hindus believe that one who is graced to die on the land of Varanasi would attain salvation and freedom from the cycle of birth and re-birth. Abode of Lord Shiva and Parvati, the origins of Varanasi are yet unknown."
                 />
                <TripData 
                    image={image3}
                    heading="Trip to Kasol"
                    text="The village is known for breathtaking views of the adjacent hills teeming with dense Himalayan vegetation. Visiting Tosh and experiencing the essential culture and lifestyle of Himachal Pradesh is certainly among the most enjoyable Things to do in Kasol."
                 />
           </div>
            

        </div>
       
    )
}

export default Trip
