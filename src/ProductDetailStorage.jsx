import { useOutletContext } from "react-router-dom";

export default function ProductDetailStorage() {
	const category = useOutletContext().category;

	return (
		<p>
			<strong>Product Category:</strong> {category}
		</p>
	);
}
