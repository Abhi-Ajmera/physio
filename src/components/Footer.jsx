"use client";
import Link from "next/link";
import { Footer } from "flowbite-react";

export default function FooterComp() {
	return (
		<Footer
			className="bg-[#00923F] "
			container
		>
			<div className="w-full text-center ">
				<div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
					<Footer.Brand
						as={Link}
						href="/"
						src="/Images/logo-original.jpg"
						alt="physio plus Logo"
						className="!text-black"
						name="Physio"
					/>
					<Footer.LinkGroup>
						<Footer.Link
							className="!text-black"
							href="/"
							as={Link}
						>
							Home
						</Footer.Link>
						<Footer.Link
							className="!text-black"
							href="/about"
							as={Link}
						>
							About
						</Footer.Link>
						<Footer.Link
							className="!text-black"
							href="/contact-us"
							as={Link}
						>
							Contact
						</Footer.Link>
					</Footer.LinkGroup>
				</div>
				<Footer.Divider />
				<Footer.Copyright
					className="!text-black"
					href="#"
					by="Physio"
					year={2024}
				/>
			</div>
		</Footer>
	);
}
