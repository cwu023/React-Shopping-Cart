import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Input from "./Input";
import Button from "./Button";

// TODO: Replace with your own publishable key
const stripeLoadedPromise = loadStripe(
	"pk_test_51QNPRo02fR5KqQuIDTsZ1gdhWyN08Aa6bUVJl62PnUQz02RhRrN3B4zZMykMHuBpyAKtLsBSMNmY2DkN5gGQmOlB00V8kQLkX8"
);

export default function Cart({ cart }) {
	const totalPrice = cart.reduce(
		(total, product) => total + product.price * product.quantity,
		0
	);

	const [email, setEmail] = useState("");

	function handleFormSubmit(event) {
		event.preventDefault();

		const lineItems = cart.map((product) => {
			return { price: product.price_id, quantity: product.quantity };
		});

		stripeLoadedPromise.then((stripe) => {
			stripe
				.redirectToCheckout({
					lineItems: lineItems,
					mode: "payment",
					successUrl: "https://superm.react-tutorial.app/",
					cancelUrl: "https://superm.react-tutorial.app/",
					customerEmail: email,
				})
				.then((response) => {
					// this will only log if the redirect did not work
					console.log(response.error);
				})
				.catch((error) => {
					// wrong API key? you will see the error message here
					console.log(error);
				});
		});
	}

	return (
		<div className="cart-layout">
			<div>
				<h1>Your Cart</h1>
				{cart.length === 0 && (
					<p>You have not added any product to your cart yet.</p>
				)}
				{cart.length > 0 && (
					<>
						<table className="table table-cart">
							<thead>
								<tr>
									<th width="25%" className="th-product">
										Product
									</th>
									<th width="20%">Unit price</th>
									<th width="10%">Quanity</th>
									<th width="25%">Total</th>
								</tr>
							</thead>
							<tbody>
								{cart.map((product) => {
									return (
										<tr key={product.id}>
											<td>
												<img
													src={product.image}
													width="30"
													height="30"
													alt=""
												/>{" "}
												{product.name}
											</td>
											<td>${product.price}</td>
											<td>{product.quantity}</td>
											<td>
												<strong>
													${(product.price * product.quantity).toFixed(2)}
												</strong>
											</td>
										</tr>
									);
								})}
							</tbody>
							<tfoot>
								<tr>
									<th colSpan="2"></th>
									<th className="cart-highlight">Total</th>
									<th className="cart-highlight">${totalPrice.toFixed(2)}</th>
								</tr>
							</tfoot>
						</table>
						<form className="pay-form" onSubmit={handleFormSubmit}>
							<p>
								Please enter a <strong>valid email</strong> and then click on{" "}
								<strong>&quot;Pay&quot;</strong> and your products will be on
								your way! (We won&#39;t spam your email)
							</p>
							<p>
								In the checkout page, you can use this testing credit card
								number: <strong>4242 4242 4242 4242</strong>
							</p>
							<p>
								<strong>Expiration date:</strong> Any date that&apos;s not
								before the current date.
							</p>
							<p>
								<strong>3 digit code:</strong> Any 3 digits.
							</p>
							<p>
								<strong>Cardholder Name:</strong> Any name.
							</p>
							<p>
								<strong>Zip Code:</strong> Any valid zip code.
							</p>
							<Input
								placeholder="Email"
								onChange={(event) => setEmail(event.target.value)}
								value={email}
								type="email"
								required
							/>
							<Button type="submit">Pay</Button>
						</form>
					</>
				)}
			</div>
		</div>
	);
}
