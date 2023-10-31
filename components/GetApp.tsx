import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
	return (
		<section className="flexCenter flex-col w-full pb-[100px]">
			<div className="get-app">
				<div className="flex flex-col gap-12 items-start z-20 flex-1 justify-center">
					<h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
						Get for free now!
					</h2>
					<p className="regular-16 text-gray-10">
						Available on Android and iOS
					</p>
					<div className="flex flex-col gap-5 w-full whitespace-nowrap xl:flex-row">
						<Button
							fullWidth
							text="Download App"
							icon="/apple.svg"
							className="text-green-50 bg-white hover:opacity-80 font-medium"
						/>

						<Button
							fullWidth
							text="Play Store"
							icon="/android.svg"
							className="border border-gray-10 font-medium hover:opacity-80"
						/>
					</div>
				</div>

				<div className="flex flex-1 items-center justify-end">
					<Image src="/phones.png" alt="Phone" width={550} height={870} />
				</div>
			</div>
		</section>
	);
};

export default GetApp;
