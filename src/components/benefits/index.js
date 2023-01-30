import React from "react";
import styles from "./benefits.module.css";

const student = [
	"1) Clear edge over the competition ",
	"2) Takes a well-informed decision",
	"3) Fixed stipend for 3 months",
	"4) Practical understanding of Pharma sales and marketing",
	"5) Certificates on completion of course. ",
	"6) High probability to get hired",
	"7) LSSSDC certified trainers",
	"8) Rigorous training module",
];
const college = [
	"1) Zero cost for training and placement of the student",
	"2) Develop students as per industry need.",
	"3) Reduces cost for developing students, organising placement drives / job fairs.",
	"4) Enhances placements, reputation, referral & admission.",
	"5) A model ahead of competition- where institutes work as a centre where unmet needs of industry & corporate are addressed.",
];
const corporate = [
	"1) Trained professionals who are “Pharma Sales Ready” from Day-1.",
	"2) Zero cost for training of the candidate.",
	"3) Lowers CTC (cut the cost)- saves lots of time and resources.",
	"4) Addresses business loss due to gaps in representation.",
	"6) Better company's reputation due to quality candidates.",
	"7) Companies can offer employment to deserving candidates.",
];
function Benefits() {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<div className={`${styles.panel} ${styles.pricingTable}`}>
					<div className={styles.pricingPlan}>
						<img
							src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
							alt=""
							className={styles.pricingImg}
						/>
						<h2 className={styles.pricingHeader}>Student</h2>
						<ul className={styles.pricingFeatures}>
							{student.map(str => {
								return <li className={styles.pricingFeaturesItem}>{str}</li>;
							})}				
						</ul>
					</div>

					<div className={styles.pricingPlan}>
						<img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" className={styles.pricingImg} />
						<h2 className={styles.pricingHeader}>College</h2>
						<ul className={styles.pricingFeatures}>
							{college.map(str => {
								return <li className={styles.pricingFeaturesItem}>{str}</li>;
							})}
						</ul>
					</div>

					<div className={styles.pricingPlan}>
						<img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" className={styles.pricingImg} />
						<h2 className={styles.pricingHeader}>Corporate</h2>
						<ul className={styles.pricingFeatures}>
							{corporate.map(str => {
								return <li className={styles.pricingFeaturesItem}>{str}</li>;
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Benefits;
