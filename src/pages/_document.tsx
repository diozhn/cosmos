import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

import { HeadContent } from "web/components/HeadContent";

import enUSSystem from "assets/translations/en-US/common.json";
import ptBRSystem from "assets/translations/pt-BR/common.json";

import { GetSystemInformationResult } from "types/interfaces/system";

const getSystemInformation = (locale: string): GetSystemInformationResult => {
	switch (locale) {
		case "pt-BR":
			return ptBRSystem as GetSystemInformationResult;
		case "en-US":
		default:
			return enUSSystem as GetSystemInformationResult;
	}
};

export default class MyDocument extends Document {
	public static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	public render() {
		const { locale } = this.props.__NEXT_DATA__;
		const { system } = getSystemInformation(locale as string);

		return (
			<Html lang={system.html.lang}>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap"
						rel="stylesheet"
					/>
					<HeadContent ogLocale={system.html.head.ogLocale} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
