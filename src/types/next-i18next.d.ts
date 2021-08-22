import "next-i18next";

import common from "assets/translations/en-US/common.json";
import home from "assets/translations/en-US/home.json";

declare module "next-i18next" {
	interface Resources {
		common: typeof common;
		home: typeof home;
	}

	interface CustomTypeOptions {
		defaultNS: "common";
		resources: {
			common: typeof common;
			home: typeof home;
		};
	}
}
