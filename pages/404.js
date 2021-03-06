import React from "react";

const NotFound = (props) => {
	return (
		<div>
			<div className="nope">NOPE.</div>
			<style jsx>{`
				.nope {
					position: absolute;
					background: #000;
					top: 0px;
					left: 0px;
					right: 0px;
					bottom: 0px;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			`}</style>
		</div>
	);
};

export default NotFound;
