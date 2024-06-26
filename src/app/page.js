import Image from "next/image";
import HeroDetailComponent from "../components/HeroDetailComponent";
import DetailComponent from "../components/DetailComponent";
import { LogoCarousel } from "../components/LogoCarousel";
import Reviews from "../components/Reviews";

export default function Home() {
	return (
		<>
			{/* Hero section */}
			<div className="max-sm:h-[calc(100vh-80px)] flex flex-col justify-center">
				<div className="pt-8 pb-2 md:pb-0 md:pt-0 flex flex-col md:flex-row md:justify-center items-center gap-12 md:h-[calc(100vh-220px)]">
					<HeroDetailComponent />
					<Image
						width={480}
						height={480}
						className="h-48 w-48 md:w-80 md:h-80"
						src={"/Images/1.jpg"}
						alt=""
					/>
				</div>
				{/* Partner Logo Carousel */}
				<LogoCarousel />
			</div>
			{/* Benefit Section */}
			<div className="mt-4 flex flex-col-reverse md:flex-row justify-center items-center gap-4 md:h-[calc(100vh-200px)]">
				<div className="relative w-80 h-80 lg:w-96 lg:h-96">
					<Image
						className="z-10"
						src={"/Images/1.jpg"}
						alt=""
						fill
					/>
				</div>
				<DetailComponent
					title="If you've completed BPT or MPT then Become Sports Physiotherapist"
					subtitile="lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing"
				/>
			</div>
			{/* Benefit Section */}
			<div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4 md:h-[calc(100vh-200px)]">
				<DetailComponent title="Benefits of our Internship" />
				<div className="relative w-80 h-80 lg:w-96 lg:h-96">
					<Image
						className="z-10"
						src={"/Images/1.jpg"}
						alt=""
						fill
					/>
				</div>
			</div>
			<Reviews />
		</>
	);
}
