import { useOutletContext } from "react-router-dom";

export default function ProductDetailNutrition() {
	const product = useOutletContext();
	const rating = product.rating;

	return (
		<table className="table table-nutrition">
			<thead>
				<tr>
					<th>Rating</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Rate</td>
					<td>{rating.rate}</td>
				</tr>
				<tr>
					<td>Count</td>
					<td>{rating.count}</td>
				</tr>
			</tbody>
		</table>
	);
}
