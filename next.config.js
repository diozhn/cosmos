/* eslint-disable @typescript-eslint/no-require-imports */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require("./next-i18next.config");

module.exports = {
	i18n,
	eslint: {
		ignoreDuringBuilds: true,
	},
};
