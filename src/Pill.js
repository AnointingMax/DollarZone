import React from "react";

const Pill = ({ text, color }) => {
	return (
		<div className="pill" style={{ backgroundColor: color }}>
			<div className="blue"></div>
			{text}
		</div>
	);
};

export default Pill;
