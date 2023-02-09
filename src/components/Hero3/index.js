import React from "react";
import styles from "./hero.module.css";
import "animate.css";
import SlidingDiagonals from "./slidingDiagonals";

function Hero() {
	return (
		<div className={`${styles.hero} ${styles.bubbles}`}>
			<SlidingDiagonals />

			<div className={styles.box1}></div>
			<div className={styles.box2}>
				<div className={styles.text}>
					<h1 className={styles.name}>Jobs for Fresher</h1>
					<br />
				</div>
			</div>
		</div>
	);
}

export default Hero;
