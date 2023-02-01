// import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem, { imageListItemClasses } from "@mui/material/ImageListItem";
import styles from "./gallery.module.css";
import React, { useLayoutEffect, useState } from "react";
import wide1 from "../../assets/images/Pictures/gallery/wide1.jpg";
import wide3 from "../../assets/images/Pictures/gallery/wide3.jpg";
import wide4 from "../../assets/images/Pictures/gallery/wide4.jpg";
import wide5 from "../../assets/images/Pictures/gallery/wide5.jpg";
import wide6 from "../../assets/images/Pictures/gallery/wide6.jpg";
import wide7 from "../../assets/images/Pictures/gallery/wide7.jpg";
import wide8 from "../../assets/images/Pictures/gallery/wide8.jpg";
import wide9 from "../../assets/images/Pictures/gallery/wide9.jpg";
import wide10 from "../../assets/images/Pictures/gallery/wide10.jpg";
import wide11 from "../../assets/images/Pictures/gallery/wide11.jpg";
import square1 from "../../assets/images/Pictures/gallery/square1.jpg";
import square2 from "../../assets/images/Pictures/gallery/square2.jpg";
import tall1 from "../../assets/images/Pictures/gallery/tall1.jpg";
import tall2 from "../../assets/images/Pictures/gallery/tall2.jpg";
import tall3 from "../../assets/images/Pictures/gallery/tall3.jpg";
import tall4 from "../../assets/images/Pictures/gallery/tall4.jpg";

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}
function Gallery() {
	const [width, height] = useWindowSize();
	let col, rowHeight;
	if (width > 850) {
		col = 4;
		rowHeight = 302;
	} else {
		col = 2;
		rowHeight = 250;
	}
	return (
		<section className={styles.gallerySection}>
			<ImageList sx={{ width: "100%", height: "100%" }} variant="quilted" cols={col} rowHeight={rowHeight}>
				{itemData.map(item => (
					<ImageListItem
						className={styles.listItem}
						key={item.img}
						cols={item.cols || 1}
						rows={item.rows || 1}
					>
						<img
							className={styles.image}
							{...srcset(item.img, 121, item.rows, item.cols)}
							alt={item.title}
							loading="lazy"
						/>

					</ImageListItem>
				))}
			</ImageList>
		</section>
	);
}

const itemData = [
	{
		img: "https://res.cloudinary.com/def4bqkxv/image/upload/v1643440468/karrier/KarrierAssets/InstituteActivities/VIRACARE_PHARMA_w1eefy.jpg",
		title: "Breakfast",
		rows: 2,
		cols: 2,
	},
	{
		img: wide10,
		title: "Tomato basil",
		cols: 2,
	},

	{
		img: wide9,
		title: "Tomato basil",
		cols: 2,
	},
	{
		img: wide1,
		title: "Hats",
		cols: 2,
	},
	{
		img: tall1,
		title: "Honey",
		author: "@arwinneil",
		rows: 2,
		cols: 2,
	},
	{
		img: square2,
		title: "Basketball",
	},
	{
		img: square1,
		title: "Fern",
	},
	{
		img: tall3,
		title: "Mushrooms",
		rows: 2,
		cols: 2,
	},
	{
		img: tall2,
		title: "Mushrooms",
	},

	{
		img: wide6,
		title: "Tomato basil",
	},

	{
		img: wide3,
		title: "Bike",
		cols: 2,
	},

	{
		img: wide4,
		title: "Mushrooms",
		cols: 2,
	},
	{
		img: wide5,
		title: "Bike",
		cols: 2,
	},
	{
		img: tall4,
		title: "Sea star",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://res.cloudinary.com/def4bqkxv/image/upload/v1643440478/karrier/KarrierAssets/InstituteActivities/Rafflesia_Life_Sciences_Training_Seesion_zrkhmg.jpg",
		title: "Burger",
		cols: 2,
		rows: 2,
	},
	{
		img: wide7,
		title: "Tomato basil",
		cols: 2,
	},
	{
		img: wide8,
		title: "Tomato basil",
		cols: 2,
	},

	{
		img: "https://res.cloudinary.com/def4bqkxv/image/upload/v1643440479/karrier/KarrierAssets/InstituteActivities/Institute_Pic_ne5tvq.jpg",
		title: "Coffee",
		cols: 2,
	},
	{
		img: wide11,
		title: "Tomato basil",
		cols: 2,
	},
];

export default Gallery;

// https://cloudinary.com/console/c-117881a20a15f3616a9c9acd951efc/media_library/folders/bf5257b4fb89323189504cf87c9ba310bb
