import { useState, useEffect } from "react";
import { NavLink, Routes, Route, useParams, Outlet } from "react-router-dom";
import useFetch from "./useFetch";

export default function ProductDetails(props) {
	const [product, setProduct] = useState({});
	const { get } = useFetch(
		"https://shopping-cart-a70b3-default-rtdb.firebaseio.com/"
	);
	const params = useParams();

	useEffect(() => {
		get(`products/${params.id}.json`)
			.then((data) => {
				setProduct(data);
			})
			.catch((error) => console.log("Could not load product details", error));
	}, []);

	return (
		<div className="product-details-layout">
			<div>
				<h2>{product.name}</h2>
				<img
					src={product.image}
					width="125"
					height="125"
					className="product-details-image"
					alt={product.name}
				/>
			</div>
			<div>
				<div className="tabs">
					<ul>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? "tab-active" : "")}
								to=""
								end
							>
								Details
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? "tab-active" : "")}
								to="rating"
							>
								Rating
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? "tab-active" : "")}
								to="category"
							>
								Category
							</NavLink>
						</li>
					</ul>
				</div>

				<Outlet context={product} />
			</div>
		</div>
	);
}
