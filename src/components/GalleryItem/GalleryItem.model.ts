export interface IGalleryItemProps {
	title: string;
	description: string;
	/** One photo (main). For backward compatibility. */
	image?: string;
	/** Multiple photos: the first is the main one in the card, in the modal you can switch between them. If set, it is used instead of image. */
	images?: string[];
	tags?: string[];
	type: "image" | "video" | "link";
	/** For type "link" — URL to open. Card becomes a link, modal is not opened. */
	link?: string;
	category: string;
	bottomCaption?: string;
	date: string;
}

/** All item photos: either images, or [image]. The main photo is the first element. */
export function getItemImages(item: IGalleryItemProps): string[] {
	if (item.images?.length) return item.images;
	if (item.image) return [item.image];
	return [];
}

export function getItemMainImage(item: IGalleryItemProps): string {
	const imgs = getItemImages(item);
	return imgs[0] ?? "";
}
