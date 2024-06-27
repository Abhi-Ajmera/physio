"use client";
import Link from "next/link";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
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
			<div className="flex gap-2 md:order-2">
				<Dropdown
					arrowIcon={false}
					inline
					label={
						<Avatar
							alt="User settings"
							img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							rounded
						/>
					}
				>
					<Dropdown.Header className="hover:bg-[#00923F] hover:text-white">
						<span className="block text-sm">Hi, John Doe</span>
					</Dropdown.Header>
					<Dropdown.Item className="hover:!bg-[#00923F] hover:!text-white">Update Info</Dropdown.Item>
					<Dropdown.Item className="hover:!bg-[#00923F] hover:!text-white">Sign out</Dropdown.Item>
				</Dropdown>
				<Navbar.Toggle />
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
