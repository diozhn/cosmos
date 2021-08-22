import { SITE } from "configs/site";

interface Props {
	ogLocale?: string;
}

export const HeadContent: FC<Props> = ({ ogLocale = "en_US" }) => (
	<>
		<meta name="og:site_name" content={SITE.name} />
		<meta name="og:url" content={SITE.url} />
		<meta name="og:locale" content={ogLocale} />
		<link rel="cannonical" href={SITE.url} />
	</>
);
