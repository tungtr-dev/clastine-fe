import { ResourceType, SVGSource, WebPSource } from "@constants";

export const getResourceType = (resource: SVGSource | WebPSource): ResourceType => {
	return resource.split(".").at(-1) === ResourceType.WebP
		? ResourceType.WebP
		: ResourceType.SVG;
}