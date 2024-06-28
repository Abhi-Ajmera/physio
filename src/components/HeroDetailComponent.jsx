import { Button } from "flowbite-react";
import Link from "next/link";
const HeroDetailComponent = () => {
	return (
		<div className="flex flex-col justify-between max-sm:justify-center gap-2 sm:gap-6 max-w-[90vw] md:max-w-[50vw]">
			<h2 className="text-center md:text-left text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight">
				Get Internship as <br /> Sports
				<span className="text-[#00923F]"> Physiotherapist</span>
				<br /> with {""}
				<span className="text-[#00923F]">
					PHysio<sub>+</sub>
				</span>
			</h2>
			<p className="text-center sm:text-left leading-relaxed">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi voluptatem distinctio modi enim
				voluptatum libero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi voluptatem distinctio
				modi enim voluptatum libero.
			</p>
			<div className="justify-center md:justify-start flex gap-6 max-sm:gap-4">
				<Link href="/enroll">
					<Button
						color="success"
						size="lg"
						className="bg-[#00923F] hover:bg-[#277b4c] px-4"
					>
						Enroll Now
					</Button>
				</Link>
			</div>
		</div>
	);
};
export default HeroDetailComponent;
