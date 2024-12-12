import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="home-layout">
			<div>
				<h1>Online shopping simplified</h1>
				<p>
					Order your items from <em>SuperCart</em> with our easy to use app, and
					get your products delivered straight to your doorstep.
				</p>
				<Link to="/products" className="btn btn-default">
					Start shopping
				</Link>
			</div>
			<img
				src="https://i.ibb.co/9hrZF79/Purple-Background-Basket-Image.jpg"
				width="450"
				height="auto"
				className="rounded home-image"
				alt=""
			/>
		</div>
	);
}
