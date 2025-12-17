export interface IGalleryItemProps {
	title: string;
	description: string;
	image: string;
	tags?: string[];
	type: "image" | "video";
	category: string;
	bottomCaption?: string;
}
