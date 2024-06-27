"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export function LogoCarousel() {
	return (
		<Carousel
			indicators={false}
			slideInterval={3500}
			className="max-sm:h-[60px] sm:h-28 bg-[#00923F]"
			leftControl=" "
			rightControl=" "
		>
			<div className="flex justify-evenly py-2">
				<Image
					width={120}
					height={120}
					src="/Images/logo-original.jpg"
					alt="..."
					className="max-sm:!w-16"
				/>
				<Image
					width={120}
					height={120}
					src="/Images/logo-original.jpg"
					alt="..."
					className="max-sm:!w-16"
				/>
				<Image
					width={120}
					height={120}
					src="/Images/logo-original.jpg"
					alt="..."
					className="max-sm:!w-16"
				/>
				<Image
					width={120}
					height={120}
					src="/Images/logo-original.jpg"
					alt="..."
					className="max-sm:w-16"
				/>
			</div>
			<div className="flex justify-evenly px-4">
				<Image
					width={120}
					height={120}
					src="/Images/logo-original.jpg"
					alt="..."
					className="max-sm:w-16"
				/>
				<Image
					width={120}
					height={120}
					src="/Images/logo-original.jpg"
					alt="..."
					className="max-sm:w-16"
				/>
				<Image
					width={120}
					height={120}
					src="/Images/logo-original.jpg"
					alt="..."
					className="max-sm:w-16"
				/>
				<Image
					width={120}
					height={120}
					src="/Images/logo-original.jpg"
					alt="..."
					className="max-sm:w-16"
				/>
			</div>
		</Carousel>
	);
}
