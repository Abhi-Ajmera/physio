import { Carousel } from "flowbite-react";
import CardComponent from "./CardComponent";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = () => {
	return (
		<Carousel
			indicators={false}
			slideInterval={3500}
			className="h-[25rem] sm:h-[26rem]"
			leftControl={
				<FaChevronLeft className="border border-1 border-black h-8 w-8 sm:w-9 sm:h-9 p-2 text-black rounded-full text-xl" />
			}
			rightControl={
				<FaChevronRight className="border border-1 border-black h-8 w-8 sm:w-9 sm:h-9 p-2 text-black rounded-full text-xl" />
			}
		>
			<div className="flex justify-evenly gap-4 py-2 px-8 ">
				<CardComponent />
				<CardComponent />
			</div>
			<div className="flex justify-evenly gap-4 py-2 px-8 ">
				<CardComponent />
				<CardComponent />
			</div>
		</Carousel>
	);
};
export default Reviews;
