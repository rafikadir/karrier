import React from "react";
import styles from "./ForCorporate.module.css";
import Heading from "../../components/heading";
import onlineClasses from "../../assets/onlineClasses.jpg";
import long from "../../assets/images/Pictures/Corporate Training/corporate-training-program.jpg";
import wide from "../../assets/nabigeta/wide.jpg";
import nabgita from "../../assets/images/Pictures/Corporate Training/nabegita.png"
import { Helmet } from "react-helmet";
import { JsonLd } from "react-schemaorg";
import Reviews from "../../components/reviews";
import RamgopalBangad from "../../assets/images/Pictures/Internship/corporate/RamgopalBangad.png";
import ArvindNigam from "../../assets/images/Pictures/Internship/corporate/ArvindNigam.png";
import RajendraKhati from "../../assets/images/Pictures/Internship/corporate/RajendraKhati.png";
import RajeshTewari from "../../assets/images/Pictures/Internship/corporate/RajeshTewari.png";
import RajivPathak from "../../assets/images/Pictures/Internship/corporate/RajivPathak.png";

function ForCorporate() {
	let data = [
		{
			name: "RAMGOPAL BANGAD",
			designation: "DIRECTOR EVIDENS LIFESCIENCES",
			review:
				"“Good start by KARRIER. The training and teaching module is well created and executed. The candidate's comes out with enhanced skills, knowledge and stronger base in pharma sales. Great going. Well done”",
			src: RamgopalBangad,
		},
		{
			name: "ARVIND NIGARM",
			designation: "DIRECTOR KAPKIND PHARMA PVT LTD.",
			review:
				"“Yes, I believe with the help of this institute candidate can get help to improve themselves in a better way. Thank you Anubhav Sir, Please keep it up as always.” ",
			src: ArvindNigam,
		},
		{
			name: "RAJENDRA KHATI",
			designation: "ABBOTT HEALTHCARE",
			review:
				"Great platform for new comers in our pharma industry I welcome and wish ALL THE BEST for career and prosperity as pharma sales is one of the admired and respectable profession where one reach to the topmost post of the organization thru his dedicated hard work and sincerity",
			src: RajendraKhati,
		},
		{
			name: "RAJIV PATHAK",
			designation: "Zonal Sales Manager SUN PHARMA",
			review:
				"It's good to join Karrier Med Representative training Institute. As you get trained from a skilled trainer to grow in your career",
			src: RajivPathak,
		},
		{
			name: "RAJESH TEWARI",
			designation: "Head L&D Ozone Pharmaceuticals",
			review:
				"“Mr. Anubhav is a passionate training and development professional. He has excellent networking and interpersonal skills. He has strong business acumen. My association with Anubhav has always been mutually satisfying, rewarding and purposeful.”",
			src: RajeshTewari,
		},
	];

	return (
		<>
		<Helmet>
			<title>Corporate Sales Training Programs - Nabigeta Solutionist</title>
			<meta name="description" content="Anubhav Saxena - Best Sales Trainer & Sales Consultant in India, Sales Trainer and Motivator who transforms businesses. Best Trainer ⭐⭐⭐⭐⭐"/>
			<meta name="keywords" content="CPharmaceutical sales training program, management development programs, MDP, corporate training, list of training programs for employees development, corporate soft skills training, pharma sales training, best corporate trainer, best pharma sales trainer, Freelancer sales trainer consultant"/>
			<meta name="robots" content="index,follow"/>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
			<meta name="language" content="English"/>

			<meta property="og:url" content="https://karrier.in/campus-to-corporate"/>
			<meta property="og:type" content="website"/>
			<meta property="og:title" content="Corporate Sales Training Programs - Nabigeta Solutionist"/>
			<meta property="og:description" content="Anubhav Saxena - Best Sales Trainer & Sales Consultant in India, Sales Trainer and Motivator who transforms businesses. Best Trainer ⭐⭐⭐⭐⭐"/>
			<meta property="og:image" content="https://karrier.in/static/media/internship-after-graduation.12d7a3a26f559ed44899.jpg"/>

			<meta name="twitter:card" content="summary_large_image"/>
			<meta property="twitter:domain" content="karrier.in"/>
			<meta property="twitter:url" content="https://karrier.in/campus-to-corporate"/>
			<meta name="twitter:title" content="Corporate Sales Training Programs - Nabigeta Solutionist"/>
			<meta name="twitter:description" content="Anubhav Saxena - Best Sales Trainer & Sales Consultant in India, Sales Trainer and Motivator who transforms businesses. Best Trainer ⭐⭐⭐⭐⭐"/>
			<meta name="twitter:image" content="https://karrier.in/static/media/internship-after-graduation.12d7a3a26f559ed44899.jpg"/>    

			<JsonLd>
			{{
				"@context": "https://schema.org",
				"@type": "VideoObject",
				name: "Corporate training program",
				description: "Corporate training program",
				thumbnailUrl: [""],
				uploadDate: "",
				contentUrl: "https://youtu.be/NSPZpn49jz0",
			}}
			</JsonLd>
		</Helmet>

		<section className={styles.ForCorporate}>
			<img src={nabgita} className={styles.nabgitaLogo} alt="navita logo"/>
			<Heading subtext="A guiding light to address your key challenges.!!!" />
			<div className={styles.onlineContainerRow}>
				<div
					className={styles.onlineImg}
					style={{
						backgroundImage: `url(${long})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				>
				</div>
				<div className={styles.onlineClassInfo}>
					<h2>Key Challenges in Pharma Industry Today</h2>
					<p>• A mediocre strategy can look great provided the execution is par excellence as quoted by  Chang “without execution, strategy is useless”. Now the question arises how do we improve
					the execution, who are key persons involved & who can make all the difference.</p>
					<p>• Wouldn’t it make life easier for Managers / Leaders / Brand Managers?</p>
					<p>• Welcome to Nabigeta Solutionist. A guiding light to address your key challenges.!!!</p>
				</div>
			</div>
			<div className={styles.onlineContainerRow}>
				<div className={styles.onlineClassInfo}>
					<h2>What do we do?</h2>
					<p>
						Nabigeta Solutionist imparts professional training to facilitate corporates in strengthening
						people capability, building brands, augmenting leadership skills, training & nurturing Soft
						Skills.
					</p>
				</div>
				<div
					className={styles.onlineImg}
					style={{
						backgroundImage: `url(${wide})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				></div>
			</div>
			<div className={styles.onlineContainerRow}>
				<div
					className={styles.onlineImg}
					style={{
						backgroundImage: `url(${onlineClasses})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				></div>
				<div className={styles.onlineClassInfo}>
					<h2>Why Nabigeta?</h2>
					<p>• At Nabigeta , we understand the key challenges & then customize the programs which helps to
					get superior outcomes.</p>
					<p>• Trainers at Nabigeta have very rich & proven experience in launching products from
						strategizing to execution, management development programs & entry level training.</p>
							
					<p>• Our strength lies in end to end understanding of the business. </p>	
						
					<p>• We believe in a pragmatic approach and delivering solutions which are apt to the organization
					and provide return on investment.</p>	
				</div>
				<div className={styles.missionVision}>
					<div className={`${styles.mission} ${styles.card}`}>
						<h4>Mission</h4>
						<p>
							Providing Solution at an affordable cost the most critical interface between RBM & sales
							representative the First line manager which drives execution excellence.
						</p>
					</div>
					<div className={`${styles.vision} ${styles.card}`}>
						<h4>Vision</h4>
						<p>Creating model which will help to create help Managers to improve execution excellence.</p>
					</div>
				</div>

				<div className={styles.offerings}>
					<Heading
						main="NABIGETA MAGICAL OFFERINGS"
					/>

					<div className={styles.offeringsContainer}>
						<div className={styles.col}>
							<ul>
								<h4>TRAINING</h4>
								<li>• Level-1 BTP- Basic Training Program (Induction Program) for Sales Professionals.</li>
								<li>• Level-2 CTP- Comprehensive Training Program for Sales Professionals.</li>
								<li>• Level-3 CPP- Career Progression Program.</li>
								<li>• INDUCTION PROGRAM FOR FLM</li>
							</ul>
							<ul>
								<h4>COACHING</h4>
								<li>• FLM: First Line Manager</li>
								<li>• SLM: Second Line Manager</li>
							</ul>
							<ul>
								<h4>ASSESSMENT</h4>
								<li>• Sales Professional</li>
								<li>• FLM: First Line Manager</li>
							</ul>
						</div>
						<div className={styles.col}>
							<ul>
								<h4>SOFT SKILLS</h4>
								<li>• Communication</li>
								<li>• Presentation</li>
								<li>• Teamwork</li>
								<li>• Problem Solving</li>
								<li>• Critical Thinking</li>
							</ul>
							<ul>
								<h4>BUILDING BIG BRANDS</h4>
								<li>• Developing Key Consumer Insights</li>
								<li>• Segmentation</li>
								<li>• Targeting</li>
								<li>• Positioning</li>
								<li>• Patient journey Map</li>
								<li>• Brand Portrait Wheel to derive SMP</li>
								<li>• Belief shift Map</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<section className={styles.reviews}>
				<Heading main="Corporate Reviews" subtext="What do pharma companies say about us" />
				<Reviews data={data} />
			</section>
		</section>
		</>
	);
}

export default ForCorporate;
