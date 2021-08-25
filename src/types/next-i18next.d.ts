import "next-i18next";

import common from "assets/translations/en-US/common.json";
import landing from "assets/translations/en-US/landing.json";

declare module "next-i18next" {
	interface Resources {
		common: typeof common;
		landing: typeof landing;
	}

	interface CustomTypeOptions {
		defaultNS: "common";
		resources: {
			common: typeof common;
			landing: typeof landing;
		};
	}
}
