interface GetAttributeValue {
	element: string;
	attribute: string;
	attributeValue: string;
	namedItem: string;
}

export const getAttributeValue = ({
	element,
	attribute,
	attributeValue,
	namedItem,
}: GetAttributeValue) =>
	document
		.querySelector(`${element}[${attribute}="${attributeValue}"]`)
		?.attributes.getNamedItem(namedItem)?.value;
