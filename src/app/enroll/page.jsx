"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const page = () => {
	return (
		<div className="min-h-[calc(100vh-230px)] flex justify-center items-center">
			<form className="flex max-w-lg flex-col gap-4">
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="name"
							value="Your Name"
						/>
					</div>
					<TextInput
						id="name"
						type="text"
						placeholder="John Doe"
						required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="email"
							value="Your email"
						/>
					</div>
					<TextInput
						id="email"
						type="email"
						placeholder="name@email.com"
						required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="number"
							value="Contact Number"
						/>
					</div>
					<TextInput
						id="number"
						type="number"
						placeholder="7777777777"
						required
					/>
				</div>

				<Button
					color="green"
					type="submit"
				>
					Pay
				</Button>
			</form>
		</div>
	);
};
export default page;
