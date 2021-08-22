import { useTranslation } from "next-i18next";

import { FCWithLayout } from "types/interfaces/layout";

export const HomePage: FCWithLayout = () => {
	const { t } = useTranslation("home");

	return <>{t("message")}</>;
};
