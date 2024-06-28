"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const UserAuth = ({ user }) => {
	console.log(user);
	return (
		<>
			<Dropdown
				arrowIcon={false}
				inline
				label={
					<Avatar
						alt="User"
						img={user?.image}
						rounded
					/>
				}
			>
				<Dropdown.Header className="hover:bg-[#00923F] hover:text-white">
					<span className="block text-sm">Hi, {user?.name}</span>
				</Dropdown.Header>
				<Dropdown.Item
					className="hover:!bg-[#00923F] hover:!text-white"
					as={Link}
					href="/update-info"
				>
					Update Info
				</Dropdown.Item>
				<Dropdown.Item
					className="hover:!bg-[#00923F] hover:!text-white"
					onClick={() => signOut()}
				>
					Sign out
				</Dropdown.Item>
			</Dropdown>
			<Navbar.Toggle />
		</>
	);
};
export default UserAuth;
