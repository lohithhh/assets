import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* <link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap"
						rel="stylesheet"
					/> */}
					<meta name="theme-color" content="#000" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
