import { createGlobalStyle } from "styled-components";

import { COLORS } from "assets/colors";

export const GlobalStyle = createGlobalStyle`
	 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

		&:focus-visible {
			outline: 3px solid transparent;
		 	box-shadow: 0 0 0 3px var(--secondary);
		}
  }

	html, body {
		min-height: 100%;
	}

  html {
    font-size: 62.5%;
		scroll-behavior: smooth;
  }

  body {
    background: var(--background);
    color: var(--secondary);
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

	h1, h2, h3, h4, h5, h6 {
  	font-family: "Poppins", Arial, Helvetica, sans-serif;
	}

	a {
		color: var(--secondary);
		text-decoration: none;
	}

	button, input, textarea {
		background: transparent;
    color: var(--secondary);
		font-size: 1.6rem;
		border: transparent;
	}

	ul {
		list-style: none;
	}

	::-webkit-scrollbar {
		width: 1rem;
		height: 1rem;
	}

	::-webkit-scrollbar-track {
		background: var(--scrollbar-background);
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb {
		background: var(--scrollbar);
		border-radius: 4px;
	}

	::-webkit-scrollbar-corner {
		background: transparent;
	}

	:root {
		--main: ${COLORS.main};
		--black: ${COLORS.black};
		--white: ${COLORS.white};
		--shadow: ${COLORS.black}50;
		--page-max-width: 112.8rem;
		--vertical-padding: 2rem;
		--horizontal-padding: 2rem;
	}

	[data-theme='dark'] {
		--primary: ${COLORS.black};
		--secondary: ${COLORS.white};
		--background: ${COLORS.darkThemeBackground};
		--scrollbar: var(--main);
		--scrollbar-background: ${COLORS.black}50;
	}

	@media (max-width: 768px) {
    html {
      font-size: 57.5%;
    }
  }

	@media (max-width: 320px) {
    html {
      font-size: 55.5%;
    }
  }

	@media (max-width: 280px) {
    html {
      font-size: 52.5%;
    }
  }
`;
