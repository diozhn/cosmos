import { useTranslation } from "next-i18next";

import { FCWithLayout } from "types/interfaces/layout";

// eslint-disable-next-line jest/no-export
export const HomePage: FCWithLayout = () => {
	const { t } = useTranslation("landing");

	return <>{t("header.title")}</>;
};
