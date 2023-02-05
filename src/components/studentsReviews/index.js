import React from "react";
import styles from "./studentsReviews.module.css";
import Prajwal from "../../assets/images/Pictures/Internship/students/Prajwal.png";
import Sachin from "../../assets/images/Pictures/Internship/students/Sachin.png";
import Subhasmita from "../../assets/images/Pictures/Internship/students/Subhasmita.png";
import poem from "../../assets/images/Campus to corporate/poem - rahul hakke glenmark pharma.jpg";
import letter from "../../assets/images/Campus to corporate/Maharashtra Poly (D.Pharm) Institute Nilanga.jpg";

function StudentsReviews() {
	return (
		<>
			<div className={styles.container}>
				<img
					src={Prajwal}
					style={{
						border: "2px solid #c471ed",
					}}
					className={styles.review}
				/>
				<img
					src={Subhasmita}
					style={{
						border: "2px solid #12c2e9",
					}}
					className={styles.review}
				/>
				<img
					src={Sachin}
					style={{
						border: "2px solid #f64f59",
					}}
					className={styles.review}
				/>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<img src={poem} alt="poem" />
					</div>
					<div className="col-lg-6">
						<img src={letter} alt="poem" />
					</div>
				</div>
			</div>
		</>
	);
}

export default StudentsReviews;
