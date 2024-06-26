"use client";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import Image from "next/image";

export default function NavbarComp() {
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
			<Navbar.Toggle />
			<Navbar.Collapse className="">
				<Navbar.Link
					as={Link}
					href="/"
					className="text-black hover:!text-white"
				>
					Home
				</Navbar.Link>
				<Navbar.Link
					as={Link}
					href="/about"
					className="text-black hover:!text-white"
				>
					About Us
				</Navbar.Link>
				<Navbar.Link
					as={Link}
					href="/contact-us"
					className="text-black hover:!text-white"
				>
					Contact Us
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
