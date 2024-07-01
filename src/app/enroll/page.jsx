"use client";
import { Button, Label, Select, TextInput, Tooltip } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { FaPencil } from "react-icons/fa6";

const Enroll = () => {
	const enrollForm = useFormik({
		initialValues: {
			name: "",
			email: "",
			number: "",
			gender: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(5, "Name should be more than 5")
				.max(30, "Name should be less than 30")
				.required("Required"),
			email: Yup.string()
				.email("Invalid email address")
				.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email address")
				.required("Required"),
			number: Yup.string()
				.matches(/^[6789]\d{9}$/, "Enter valid mobile number")
				.length(10, "Mobile number should be 10 characters")
				.required("Required"),
		}),
		onSubmit: (value) => {
			console.log(value);
		},
	});

	return (
		<div className="min-h-[calc(100vh-230px)] flex justify-center items-center">
			<form
				className="w-[60vw] flex flex-col gap-4 my-4 "
				onSubmit={enrollForm.handleSubmit}
			>
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
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="name"
							value="Your Name"
						/>
					</div>
					<TextInput
						id="name"
						name="name"
						type="text"
						placeholder="John Doe"
						onChange={enrollForm.handleChange}
						value={enrollForm.values.name}
						required
					/>
					{enrollForm.touched.name && enrollForm.errors.name ? (
						<div className="text-red-600 text-xs pt-2">{enrollForm.errors.name}</div>
					) : null}
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
						name="email"
						type="text"
						onChange={enrollForm.handleChange}
						value={enrollForm.values.email}
						placeholder="name@email.com"
						required
					/>
					{enrollForm.touched.email && enrollForm.errors.email ? (
						<div className="text-red-600 text-xs pt-2">{enrollForm.errors.email}</div>
					) : null}
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
						name="number"
						type="number"
						onChange={enrollForm.handleChange}
						value={enrollForm.values.number}
						placeholder="9879879879"
						className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [appearance:textfield]"
						maxLength={10}
					/>
					{enrollForm.touched.number && enrollForm.errors.number ? (
						<div className="text-red-600 text-xs pt-2">{enrollForm.errors.number}</div>
					) : null}
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
						name="gender"
						onChange={enrollForm.handleChange}
						value={enrollForm.values.gender}
						placeholder="9879879879"
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
					Proceed to Pay
				</Button>
			</form>
		</div>
	);
};
export default Enroll;
