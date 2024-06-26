import { Badge } from "flowbite-react";
import { IoBook } from "react-icons/io5";

const DetailComponent = ({ title, subtitile }) => {
	return (
		<div className="flex flex-col justify-between items-center max-sm:justify-center gap-4 max-w-[90vw] md:max-w-[45vw]">
			<h2 className="text-center text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight">{title}</h2>
			{subtitile && <h4 className="text-center md:text-left text-gray-400  leading-tight">{subtitile}</h4>}
			<div className="justify-center sm:justify-start flex gap-6 max-sm:gap-4">
				<ul className="mt-4 flex flex-col gap-4">
					{subtitile && <p className="text-xl text-center">Benefits of Our Program</p>}
					<li className="flex gap-4 items-center">
						<div className="flex flex-wrap gap-2">
							<Badge icon={IoBook} />
						</div>
						Earn Upto 7000/- per month
					</li>
					<li className="flex gap-4 items-center">
						<div className="flex flex-wrap gap-2">
							<Badge icon={IoBook} />
						</div>
						<div className="flex flex-col">
							Training from Expert <br />
							<p className="text-sm">Enchance your skills with industry experts with 15+ yrs of experience.</p>
						</div>
					</li>
					<li className="flex gap-4 items-center">
						<div className="flex flex-wrap gap-2">
							<Badge icon={IoBook} />
						</div>
						<div className="flex flex-col">
							Certificate <br />
							<p className="text-sm">Earn accredited Certificate </p>
						</div>
					</li>
					<li className="flex gap-4 items-center">
						<div className="flex flex-wrap gap-2">
							<Badge icon={IoBook} />
						</div>
						<div className="flex flex-col">
							On-Field Training <br />
							<p className="text-sm">Get training on field</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default DetailComponent;
