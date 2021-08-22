import LinkNext from "next/link";

import { LinkProps } from "types/interfaces/link";

export const Link: FC<LinkProps> = ({
	href,
	blank,
	disabled,
	children,
	...props
}) => (
	<LinkNext href={href}>
		<a
			style={{ pointerEvents: disabled ? "none" : "auto" }}
			target={blank ? "_blank" : "_self"}
			rel="noopener noreferrer"
			{...props}
		>
			{children}
		</a>
	</LinkNext>
);
