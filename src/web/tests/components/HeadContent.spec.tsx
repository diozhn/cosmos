import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { HeadContent } from "web/components/HeadContent";

import { SITE } from "configs/site";

import { getAttributeValue } from "../helpers/get-attribute-value";

describe("Components > HeadContent", () => {
	it(`should find the meta og:name_name with ${SITE.name}`, () => {
		render(<HeadContent />);

		expect(
			getAttributeValue({
				element: "meta",
				attribute: "name",
				attributeValue: "og:site_name",
				namedItem: "content",
			}),
		).toBe(SITE.name);
	});

	it(`should find the meta og:url with ${SITE.url} value`, () => {
		render(<HeadContent />);

		expect(
			getAttributeValue({
				element: "meta",
				attribute: "name",
				attributeValue: "og:url",
				namedItem: "content",
			}),
		).toBe(SITE.url);
	});

	it("should find the meta og:locale with en_US value", () => {
		render(<HeadContent />);

		expect(
			getAttributeValue({
				element: "meta",
				attribute: "name",
				attributeValue: "og:locale",
				namedItem: "content",
			}),
		).toBe("en_US");
	});

	it(`should find the link cannonical with ${SITE.url} value`, () => {
		render(<HeadContent />);

		expect(
			getAttributeValue({
				element: "link",
				attribute: "rel",
				attributeValue: "cannonical",
				namedItem: "href",
			}),
		).toBe(SITE.url);
	});
});
