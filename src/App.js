import React, { useState } from "react";
//import ReactDOM from "react-dom";

const App = () => {
    const [latitude, setlatitude] = useState(0);
    const [longitude, setlongitude] = useState(0);
    const [hemisphere, sethemisphere] = useState("");
    const [month, setmonth] = useState(() => { return new Date().getMonth() + 1 })
    function fetdhlocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setlatitude(position.coords.latitude)
                    setlongitude(position.coords.longitude)
                    if (position.coords.latitude > 0) {
                        sethemisphere("Northen hemisphere");
                    }
                    else if (position.coords.latitude < 0) {
                        sethemisphere("southern henisphere");
                    }
                    else {
                        sethemisphere("Equator");
                    }
                }
            )
        }
        else {

        }
    }
    return (
        <div>
            <button onClick={fetdhlocation}> Fetch Location</button>
            <p>Latitide :{latitude}</p>
            <p>longitude :{longitude}</p>
            <p>hemisphere:{hemisphere}</p>
            <p>Month:{month}</p>
            {
                hemisphere && (hemisphere == "Northen Hemisphere" && month >= 4 && month <= 10) &&
                (
                    <div>
                        <img src="https://th.bing.com/th/id/OIP.TAOCnNsrBermZeh9jq6nnQHaEo?rs=1&pid=ImgDetMain"></img>
                    </div>
                )
            }
            {
                hemisphere && (hemisphere == "Northen Hemisphere" && month<4  || month>10) &&
                (
                    <div>
                        <img src="https://th.bing.com/th/id/OIP.jmo1bagfwD0cdtSIGrvQVwHaE1?rs=1&pid=ImgDetMain"></img>
                    </div>
                )
            }
        </div>
    )
}

export default App;