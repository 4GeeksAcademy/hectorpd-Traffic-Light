import { useState } from "react";
import React from "react";
import "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	const [color, setColor] = useState("green");
	return (
		<div className="principal">
			<div className= "soporte"> </div>
			<div className="traffic-light">
				<div onClick={() => setColor("green")} className= {"light green" + (color === "green" ? " glow" : "")}></div>
				<div onClick={() => setColor("yellow")} className= {"light yellow" + (color === "yellow" ? " glow" : "")}></div>
				<div onClick={() => setColor("red")} className= {"light red" + (color === "red" ? " glow" : "")}></div>
			</div>
		</div>
		
	);
};

