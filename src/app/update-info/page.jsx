import { Button, Label, Select, TextInput, Tooltip } from "flowbite-react";
import Image from "next/image";
import { FaPencil } from "react-icons/fa6";

const page = () => {
	return (
		<div className="min-h-[calc(100vh-230px)] flex flex-col justify-center items-center gap-8 mt-4 mb-8">
			<form className="flex w-[60vw] flex-col gap-4">
				<h2 className="text-3xl sm:text-4xl text-center font-bold my-2">Update Info</h2>
				<div>
					<div className="flex justify-center flex-wrap gap-2 relative">
						<Image
							width={120}
							height={120}
							src="/Images/user.jpg"
							alt="avatar of Jese"
							className="h-48 w-48 rounded-[100vw] "
						/>
						<div className="absolute top-2 right-1/3 text-white bg-black border border-1 border-white p-1.5 rounded-[100vh]">
							<Tooltip
								content="Update photo"
								placement="right"
								arrow={false}
								className="ms-1 text-nowrap"
							>
								<label
									htmlFor="photo"
									className="cursor-pointer"
								>
									<FaPencil />
								</label>
							</Tooltip>
							<input
								id="photo"
								type="file"
								className="hidden"
							/>
						</div>
					</div>
					<div className="mb-2 block">
						<Label
							htmlFor="name"
							value="Name"
						/>
					</div>
					<TextInput
						id="name"
						type="text"
						required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="contact"
							value="Contact Number"
						/>
					</div>
					<TextInput
						id="contact"
						type="number"
						required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="email"
							value="Email"
						/>
					</div>
					<TextInput
						id="email"
						type="email"
						required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="gender"
							value="Gender"
						/>
					</div>
					<Select
						id="gender"
						required
					>
						<option>Male</option>
						<option>Female</option>
						<option>Other</option>
					</Select>
				</div>
				<Button
					color="green"
					type="submit"
				>
					Update
				</Button>
			</form>
		</div>
	);
};
export default page;
