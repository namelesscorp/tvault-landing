export interface IGalleryItemProps {
	title: string;
	description: string;
	image: string;
	tags?: string[];
	type: "image" | "video" | "link";
	category: string;
	bottomCaption?: string;
}
