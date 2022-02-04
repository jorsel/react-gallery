import React from "react";

function SocialMediaLinks(){

    return(
        <span> 
            <img  style={{background:"white", borderRadius:"9px"}} src="images/fb.png" alt="" onClick={() => {console.log("Clicked facebook link")}}/>
            <img  style={{background:"white", borderRadius:"9px"}} src="images/insta.png" alt=""/>
            <img  style={{background:"white", borderRadius:"9px"}} src="images/pint.png" alt=""/>
        </span>
    )
}


export default SocialMediaLinks;
