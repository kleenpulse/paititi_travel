import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
	return (
		<section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md-gap-28 xl:flex-row ">
			<div className="hero-map" />

			{/* LEFT */}

			<div className="relative z-20 flex fle1 flex-col xl:w-1/2">
				<Image
					src="/camp.svg"
					alt="Camp"
					width={50}
					height={50}
					className="absolute -left-[5px] -top-[30px] w-10 lg:w-[50px]"
				/>

				<h1 className="bold-52 lg:bold-88">Paititi Camp Area</h1>
				<p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
					Embark on a transformative journey with us, where the allure of
					nature's untainted beauty awaits at every turn. Our camping website
					isn't just an app; it's your trusted companion for global adventures.
				</p>

				<div className="flex my-11 flex-wrap gap-5">
					<div className="flex items-center gap-2">
						{Array(5)
							.fill(1)
							.map((_, index) => (
								<Image
									key={index}
									src="/star.svg"
									alt="Star"
									width={24}
									height={24}
								/>
							))}
					</div>

					<p className="bold-16 lg:bold-20 text-blue-70">
						169k{" "}
						<span className="regular-16 lg:regular-20 ml-1">Based Reviews</span>
					</p>
				</div>

				<div className="flex flex-col w-full gap-3 sm:flex-row">
					<Button
						text="Download App"
						className="btn_green font-medium hover:opacity-80"
					/>

					<Button
						text="How we work?"
						className=" font-medium hover:opacity-80 btn_white_text"
						icon="/play.svg"
					/>
				</div>
			</div>

			{/* RIGHT */}
			<div className="relative flex flex-1 items-start ">
				<div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-gray-90 px-7 py-8">
					<div className="flex flex-col gap-y-8">
						<div className="flex justify-between items-start">
							<div className="flex flex-col">
								<p className="regular-16 text-gray-20">Location</p>
								<p className="bold-20 text-white">Aguas Calientes</p>
							</div>
							<Image src="/close.svg" alt="Location" width={24} height={24} />
						</div>
						<div className="flexBetween">
							<div className="flex flex-col">
								<p className="regular-16 text-gray-20 block">Distance</p>
								<p className="bold-20 text-white">173.28 mi</p>
							</div>
							<div className="flex flex-col">
								<p className="regular-16 text-gray-20 block">Elevation</p>
								<p className="bold-20 text-white">2.040 km</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
