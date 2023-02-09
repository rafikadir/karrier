import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import styles from "./gallery.module.css";
import React, { useLayoutEffect, useState } from "react";
import one from "../../assets/images/Pictures/gallery/1.jpg";
import two from "../../assets/images/Pictures/gallery/2.jpg";
import three from "../../assets/images/Pictures/gallery/3.jpg";
import four from "../../assets/images/Pictures/gallery/4.jpg";
import five from "../../assets/images/Pictures/gallery/5.jpg";
import six from "../../assets/images/Pictures/gallery/6.jpeg";
import seven from "../../assets/images/Pictures/gallery/7.jpg";
import eight from "../../assets/images/Pictures/gallery/8.jpg";
import nine from "../../assets/images/Pictures/gallery/9.jpg";
import ten from "../../assets/images/Pictures/gallery/10.jpg";
import elv from "../../assets/images/Pictures/gallery/11.jpg";
import twl from "../../assets/images/Pictures/gallery/12.jpg";
import thr from "../../assets/images/Pictures/gallery/13.jpg";
import fourthen from "../../assets/images/Pictures/gallery/14.jpg";
import fifth from "../../assets/images/Pictures/gallery/15.jpg";
import sixteen from "../../assets/images/Pictures/gallery/16.jpg";
import seventh from "../../assets/images/Pictures/gallery/17.jpg";
import eighteen from "../../assets/images/Pictures/gallery/18.jpg";

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


function Gallery() {

	return (
		<section className={styles.gallerySection}>
			<div className="container">
				<div className="row">
					{itemData.map(item => (
						<div className="col-lg-4">
							<img src={item.img} alt="gallery" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

const itemData = [
	{
		img: fourthen,
		title: "Honey",
	},
	{
		img: fifth,
		title: "Basketball",
	},
	{
		img: nine,
		title: "gallery",
		cols: 2,
	},
	{
		img: seven,
		title: "gallery",
		cols: 2,
	},
	{
		img: one,
		title: "gallery",
		cols: 2,
	},
	{
		img: seventh,
		title: "Mushrooms",
		rows: 2,
		cols: 2,
	},
	{
		img: two,
		title: "gallery",
		cols: 2,
	},
	{
		img: sixteen,
		title: "Fern",
	},
	{
		img: three,
		title: "gallery",
		cols: 2,
	},
	{
		img: four,
		title: "gallery",
		cols: 2,
	},
	{
		img: six,
		title: "gallery",
		cols: 2,
	},
	{
		img: eight,
		title: "gallery",
		cols: 2,
	},
	{
		img: eighteen,
		title: "gallery",
		cols: 2,
	},
	{
		img: five,
		title: "gallery",
		cols: 2,
	},
	{
		img: elv,
		title: "Tomato basil",
		cols: 2,
	},

	{
		img: twl,
		title: "Tomato basil",
		cols: 2,
	},
	{
		img: thr,
		title: "Hats",
		cols: 2,
	},
	{
		img: ten,
		title: "gallery",
		cols: 2,
	}
];

export default Gallery;
