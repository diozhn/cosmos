import "next-i18next";

jest.mock("next-i18next", () => ({
	useTranslation: () => {
		return {
			t: (key: string) => key,
		};
	},
}));
