import { Carousel } from "flowbite-react";
import CardComponent from "./CardComponent";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = () => {
	return (
		<Carousel
			indicators={false}
			slideInterval={3500}
			className="h-96"
			leftControl={
				<FaChevronLeft className="border border-1 border-black w-8 h-8 p-2 text-black rounded-full text-xl" />
			}
			rightControl={
				<FaChevronRight className="border border-1 border-black w-8 h-8 p-2 text-black rounded-full text-xl" />
			}
		>
			<div className="flex justify-evenly gap-4 py-2 px-4 ">
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
