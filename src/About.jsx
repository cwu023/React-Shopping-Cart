export default function About() {
	return (
		<div className="about-layout">
			<div>
				<h1>About Us</h1>
				<p>
					We started operations in 2024. We guarantee fast delievry to your
					doorstep at a low cost. Save time by shopping on our app and we'll
					deliver the products right to your home.
				</p>
				<p>
					<em>
						<strong>We use Stripe to process your payment.</strong>
					</em>
				</p>
			</div>
			<img
				src="https://i.ibb.co/JpS9N8s/Mobile-Commerce-Dress-Photo.jpg"
				height="275"
				width="183"
				className="rounded about-image"
				alt=""
			/>
		</div>
	);
}
