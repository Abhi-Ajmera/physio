import Image from "next/image";
import HeroDetailComponent from "../components/HeroDetailComponent";
import DetailComponent from "../components/DetailComponent";
import { LogoCarousel } from "../components/LogoCarousel";
import Reviews from "../components/Reviews";

export default function Home() {
	return (
		<>
			{/* Hero section */}
			<div className="flex flex-col justify-center mb-4">
				<div className="pt-8 pb-2 md:pb-0 md:pt-0 flex flex-col md:flex-row md:justify-center items-center gap-4 sm:gap-12 md:h-[calc(100vh-180px)] max-sm:mx-0 max-md:mx-16 ">
					<HeroDetailComponent />
					<Image
						width={480}
						height={480}
						className="w-60 h-60 md:w-80 md:h-80 rounded-3xl"
						src={"/Images/1.jpg"}
						alt=""
					/>
				</div>

				{/* Partner Logo Carousel */}
				<LogoCarousel />
			</div>

			{/* Benefit Section */}
			<div className="py-4 flex flex-col-reverse md:flex-row justify-center items-center gap-4">
				<div className="relative flex justify-center items-center w-60 h-60 md:w-80 md:h-80 lg:h-96 lg:w-96">
					<Image
						className="rounded-3xl md:p-4"
						src={"/Images/1.jpg"}
						alt=""
						fill
					/>
				</div>
				<DetailComponent
					title="Become Sports Physiotherapist"
					subtitile="lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing"
				/>
			</div>

			{/* Benefit Section */}
			<div className="my-4 flex flex-col md:flex-row justify-center items-center gap-4">
				<DetailComponent
					title="Benefits of our Internship"
					subtitile="lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing"
				/>
				<div className="relative flex justify-center items-center w-60 h-60 md:w-80 md:h-80 lg:h-96 lg:w-96">
					<Image
						className="rounded-3xl md:p-4"
						src={"/Images/1.jpg"}
						alt=""
						fill
					/>
				</div>
			</div>

			{/* User Review Section */}
			<Reviews />
		</>
	);
}
