import Image from "next/image";
import { HTMLAttributes } from "react";

type Props = {
	text: string;
	type?: "button" | "submit" | "reset" | undefined;
	fullWidth?: boolean;
	className?: HTMLAttributes<HTMLButtonElement>["className"];
	icon?: string;
};

const Button = ({ text, type, fullWidth, className, icon }: Props) => {
	return (
		<button
			type={type || "button"}
			className={` ${
				fullWidth ? "w-full" : ""
			} ${className} flexCenter p-4 px-6 rounded-full gap-3 transition-all duration-300 outline-none`}
		>
			{icon && <Image src={icon} alt={text} width={24} height={24} />}

			<span>{text}</span>
		</button>
	);
};

export default Button;
