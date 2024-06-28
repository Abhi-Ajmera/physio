"use client";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import UserAuth from "./UserAuth";

export default function NavbarComp() {
	const { data, status } = useSession();
	console.log(status);
	return (
		<Navbar
			fluid
			rounded
			className="bg-[#00923F] m-0 px-4 text-white rounded-none"
		>
			<Navbar.Brand
				as={Link}
				href="/"
			>
				<Image
					width={96}
					height={96}
					src="/Images/logo-original.jpg"
					className="mr-3 "
					alt="Physio-Plus"
				/>
			</Navbar.Brand>
			<div className="flex gap-2 md:order-2">
				{status === "loading" && (
					<Button
						color="light"
						isProcessing
					>
						Loading
					</Button>
				)}
				{status === "unauthenticated" && (
					<Button
						color="light"
						onClick={() => signIn("google")}
					>
						<p className="text-center flex-nowrap gap-1.5 flex justify-center items-center">
							<FaGoogle /> Sign In
						</p>
					</Button>
				)}
				{status === "authenticated" && <UserAuth user={data.user} />}
				<Navbar.Toggle className="text-white hover:text-gray-300" />
			</div>
			<Navbar.Collapse>
				<Navbar.Link
					as={Link}
					href="/"
					className="text-black md:hover:!text-white"
				>
					Home
				</Navbar.Link>
				<Navbar.Link
					as={Link}
					href="/about"
					className="text-black md:hover:!text-white"
				>
					About
				</Navbar.Link>
				<Navbar.Link
					as={Link}
					href="/contact-us"
					className="text-black md:hover:!text-white"
				>
					Contact Us
				</Navbar.Link>
				<Navbar.Link
					as={Link}
					href="/enroll"
					className="text-black md:hover:!text-white"
				>
					Enroll Now
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
