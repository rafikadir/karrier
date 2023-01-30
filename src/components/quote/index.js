import React from "react";
import styles from "./quote.module.css";

function Quote(props) {
	return (
		<div className={styles.quote}>
			<hr style={{ margin: "60px auto", opacity: ".5" }} />
			<div className={`${styles.testimonialQuote} ${styles.group}`}>
				<div className={styles.quoteContainer}>
					<blockquote>
						<p>{props.quote}</p>
					</blockquote>
					<cite>
						~ Carnegie Institute of Technology				
					</cite>
				</div>
			</div>

			<hr style={{ margin: "55px auto", opacity: ".5" }} />
		</div>
	);
}

export default Quote;
