import { FaStar } from "react-icons/fa6";
import { Card } from "flowbite-react";
import Image from "next/image";

export default function CardComponent() {
	return (
		<Card className="my-2 max-w-sm">
			<div className="flex flex-col items-center">
				<Image
					alt="Bonnie image"
					height="96"
					src="/Images/user.png"
					width="96"
					className=" object-fill mb-3 rounded-full shadow-lg max-sm:!w-10 max-sm:!h-10"
				/>
				<h5 className="mb-1  md:text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
				<span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
				<div className="mt-4 flex lg:mt-6">
					<FaStar className="text-yellow-400" />
					<FaStar className="text-yellow-400" />
					<FaStar className="text-yellow-400" />
					<FaStar className="text-yellow-400" />
					<FaStar className="text-gray-300" />
				</div>
				<div className="max-sm:text-xs mt-4 flex space-x-3 lg:mt-6">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et magnam ea, molestiae natus id aut dignissimos,
					dolor nulla autem beatae facere cum inventore, odit molestias.
				</div>
			</div>
		</Card>
	);
}
