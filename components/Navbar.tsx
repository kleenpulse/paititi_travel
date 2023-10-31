"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
	const [isMenu, setIsMenu] = useState(false);

	useEffect(() => {
		if (isMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsMenu(false);
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isMenu]);

	return (
		<nav className="flex justify-between items-center max-container padding-container relative z-30 py-5">
			<Link href="/">
				<Image
					src="/hilink-logo.svg"
					alt="Hilink Logo"
					height={29}
					width={74}
				/>
			</Link>
			<ul className="hidden h-full gap-12 lg:flex">
				{NAV_LINKS.map((link) => (
					<Link
						className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all duration-300 hover:text-gray-90"
						href={link.href}
						key={link.key}
					>
						{link.label}
					</Link>
				))}
			</ul>

			<div className="lg:flexCenter hidden">
				<Button
					text="Login"
					icon="/user.svg"
					fullWidth
					className="bg-gray-90 text-white hover:bg-gray-50 "
				/>
			</div>
			<div className=" relative">
				<Image
					src={isMenu ? "/x-close.svg" : "/menu.svg"}
					alt="menu"
					height={32}
					width={32}
					className="lg:hidden cursor-pointer inline-block"
					onClick={() => setIsMenu(true)}
				/>
				{isMenu && (
					<div className="absolute top-10 right-0 max-w-[300px] w-full min-w-[250px] p-2 pl-4 pt-4 z-50 bg-white rounded-xl opacity-0 translate-x-40 slide-left">
						<ul className=" h-full gap-6 flex flex-col w-full items-start">
							{NAV_LINKS.map((link) => (
								<Link
									className="regular-18 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all duration-300 hover:text-gray-90"
									href={link.href}
									key={link.key}
								>
									{link.label}
								</Link>
							))}
							<Button
								text="Login"
								icon="/user.svg"
								fullWidth
								className="bg-gray-90 text-white hover:bg-gray-50 "
							/>
						</ul>
					</div>
				)}
			</div>
			{isMenu && (
				<div
					className="fixed top-0 left-0 h-screen w-full bg-black/20"
					onClick={() => setIsMenu(false)}
				/>
			)}
		</nav>
	);
};

export default Navbar;
