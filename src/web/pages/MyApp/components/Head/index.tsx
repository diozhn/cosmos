import HeadNext from "next/head";

import { SITE } from "configs/site";

export const Head: FC = () => (
	<HeadNext>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>{SITE.name}</title>
	</HeadNext>
);
