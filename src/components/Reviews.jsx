import { Carousel } from "flowbite-react";
import CardComponent from "./CardComponent";

const Reviews = () => {
	return (
		<Carousel
			indicators={false}
			slideInterval={3500}
			className="h-[calc(100vh-200px)]"
		>
			<div className="flex justify-evenly gap-4 py-2 px-4 ">
				<CardComponent />
				<CardComponent />
				<CardComponent />
			</div>
			<div className="flex justify-evenly gap-4 py-2 px-4 ">
				<CardComponent />
				<CardComponent />
			</div>
		</Carousel>
	);
};
export default Reviews;
