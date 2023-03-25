import React from "react";
import styles from "./Courses.module.css";
// import "./courses.css";
import CourseCard from "../../components/courseCard";
import Heading from "../../components/heading";
import Reviews from "../../components/reviews/index";
import Propel from "../../assets/courses/Propel2.png";
import PropelXL from "../../assets/courses/PropelXL2.png";
import PropelPocket from "../../assets/courses/PropelPocket2.png";
import ReviewsImg from "../../assets/courses/reviews.jpeg";
import SatendraSingh from "../../assets/students/SatendraSingh.png";
import AyoghoTiku from "../../assets/students/AyoghoTiku.png";
import PawanSingh from "../../assets/students/PawanSingh.png";
import RajatMaurya from "../../assets/students/RajatMaurya.png";
import AnujPandey from "../../assets/students/AnujPandey.png";
import AniketGautam from "../../assets/students/AniketGautam.png";
import JitendraMishra from "../../assets/students/JitendraMishra.png";
import GauravKumar from "../../assets/students/GauravKumar.png";
import SheshmaniTewari from "../../assets/students/SheshmaniTewari.png";
import NishithTiwari from "../../assets/students/NishithTiwari.png";
import ShobhitAgnihotri from "../../assets/students/ShobhitAgnihotri.png";
import DeepakTiwari from "../../assets/students/DeepakTiwari.png";
import img1 from "../../assets/courses/medical representative training.jpg";
import img2 from "../../assets/courses/Best Pharma Sales Trainer & Sales Consultant in India.jpg";
import img3 from "../../assets/courses/medical representative training institute.jpg";
import img4 from "../../assets/courses/medical representative course.jpg";
import Info from "../../components/info";
import { Helmet } from "react-helmet";
import { JsonLd } from "react-schemaorg";

let data = [
	{
		name: "SATENDRA SINGH",
		designation: "FRESENIUS KABI",
		review:
			"“Great place where you can change yourself to a corporate person. I started my career with ALKEM LABS and till am working with FRESENIUS KABI”",
		src: SatendraSingh,
	},
	{
		name: "AYOGHO TIKU",
		designation: "from South Africa",
		review:
			"As PMaRx student in Karrier Training & Evolution Institute will appreciate the instructors for their knowledge they impact in me despite the distance from South Africa the training is 100%. I'm now exposed to Pharmaceuticals companies national and international.",
		src: AyoghoTiku,
	},
	{
		name: "PAWAN SINGH",
		designation: "ZUVENTUS HEALTHCARE LTD / MACLEODS PHARMA",
		review:
			"“Karrier Institute is the best institute for medical representative. Anubhav sir and Mam knowledge and experience will make you eligible to work in this line, this coaching makes your future secure”",
		src: PawanSingh,
	},
	{
		name: "RAJAT MAURYA",
		designation: "RELIANCE RETAIL",
		review:
			"”Spoken English classes helped me a lot, while talking during interview with confidence. Best coach & guidance support.  Got job in top growing company- Reliance Retail at Barabanki, my dream comes true.  Happy moments for me & family.  Thanks Karrier Institute for changing my life.”",
		src: RajatMaurya,
	},
	{
		name: "ANUJ PANDEY",
		designation: "SINSAN PHARMACEUTICAL LTD",
		review:
			"“Excellent faculty highly recommended for the ones who wants to build career in pharma industry. The training program enhances our knowledge about pharma industry which helps you to start your career in pharma industry and enhance your knowledge and understanding about pharma industry”",
		src: AnujPandey,
	},
	{
		name: "ANIKET GAUTAM",
		designation: "BAYER INDIA",
		review:
			"“Karrier Training & Evolution Institute is one of the best MR training Institute. The faculty is really superb & helpful. The training helps me to gain in-depth knowledge about body system and pharmacology as well as it boost my confidence level. I'm really thankful to Mr Anubhav Saxena Sir who transformed me into a confident and professional person.”",
		src: AniketGautam,
	},
	{
		name: "JETENDRA MISHRA",
		designation: "MICRO LABS",
		review:
			"“This is the best medical Rep Training Institute in Eastern UP, ,bcz the faculty of this institute is highly educated, skillful,, so that u r learning skills, communication for ur bright future in pharma industry. Now i m working at Micro Labs Ltd. Over a year at Lucknow HQ. So guys if u want, to make future in pharma industry this is the best place,,. ..👍👍”",
		src: JitendraMishra,
	},
	{
		name: "GAURAV KUMAR",
		designation: "MSN LABS",
		review:
			"“Karrier provide me an excellent path in my career. Thanks to Karrier institute for providing a job In one of the fastest growing company in India, MSN LAB Pvt. Ltd, Karrier institute is complete solution towards your desirable job where you looking for”",
		src: GauravKumar,
	},
	{
		name: "SHESHMANI TEWARI",
		designation: "GSK",
		review:
			"“it's a best place where we can develop yourself, brush up our knowledge and learn how to improve our skill required for sales & Marketing....”",
		src: SheshmaniTewari,
	},
	{
		name: "NISHITH TIWARI",
		designation: "ALEMBIC PHARMA",
		review:
			"“Karrier MR Training Institute is a big platform to learn more and more about pharma industry. Thanks Anubhav sir and Vivek sir for guidance me that's I am selected in Alembic pharmaceutical Ltd.”",
		src: NishithTiwari,
	},
	{
		name: "Drx SHOBHIT AGNOHOTRI",
		designation: "MANKIND PHARMA",
		review:
			"“I would like to say thank you sir . Now i am on my right way to get success. This Institute is best for new fresher’s who have not awareness about their profession n career. Pls join n get success.”",
		src: ShobhitAgnihotri,
	},
	{
		name: "DEEPAK TIWARI",
		designation: "MEDLEY PHARMACEUTICALS LTD",
		review:
			"“If we start talking about Karrier training have a very excellent faculty Mr. Anubhav Sir founder of Karrier with lots of experience I am doing Karrier Training because the quality of teaching is awesome so academic is excellent value of money is good in Karrier. If you are investing your money in Karrier training don’t worry you get a good result but it depends on student personality how they show their efforts. They provide good placement.”",
		src: DeepakTiwari,
	},
];
function Courses() {
	return (
		<>
			<Helmet>
				<title>90% of students get the job after doing a job oriented course.</title>
				<meta name="description" content="Pharma sales career- jobs with high salaries, incentives, national and foreign trips. JOIN ONLINE JOB oriented course and get a job in 60 days!⭐⭐⭐⭐⭐"/>
				<meta name="keywords" content="medical representative training institute, medical representative training institute near me, medical representative training, pharma training institute, mr training, medical representative course, medical representative course fee, short term job oriented courses, short term professional courses after graduation"/>
				<meta name="robots" content="index,follow"/>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name="language" content="English"/>
				<link rel="canonical" href="https://karrier.in/job-oriented-course-after-graduation" />

				<meta property="og:url" content="https://karrier.in/job-oriented-course-after-graduation"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="90% of students get the job after doing a job oriented course."/>
				<meta property="og:description" content="Pharma sales career- jobs with high salaries, incentives, and national and foreign trips. JOIN ONLINE JOB-oriented course and get a job in 60 days!⭐⭐⭐⭐⭐"/>
				<meta property="og:image" content="https://karrier.in/static/media/medical%20representative%20training.21f706b7a31ae5ee705f.jpg"/>

				<meta name="twitter:card" content="summary_large_image"/>
				<meta property="twitter:domain" content="karrier.in"/>
				<meta property="twitter:url" content="https://karrier.in/job-oriented-course-after-graduation"/>
				<meta name="twitter:title" content="90% of students get the job after doing a job oriented course."/>
				<meta name="twitter:description" content="Pharma sales career- jobs with high salaries, incentives, and national and foreign trips. JOIN ONLINE JOB-oriented course and get a job in 60 days!⭐⭐⭐⭐⭐"/>
				<meta name="twitter:image" content="https://karrier.in/static/media/medical%20representative%20training.21f706b7a31ae5ee705f.jpg"/>  
   
				<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/21841890.js"></script>

				<script type="application/ld+json">
  					{JSON.stringify({
						"@context": "http://schema.org",
						"@type": "VideoObject",
						"name": "Medical representative training institute",
						"description": "Medical representative training institute",
						"thumbnailUrl": "https://i.ytimg.com/vi/p565Q2-OBb4/default.jpg",
						"uploadDate": "2021-05-03T04:04:32Z",
						"duration": "PT3M18S",
						"embedUrl": "https://www.youtube.com/embed/p565Q2-OBb4",
						"interactionCount": "54"						
					})}
				</script>

				<script src="https://apps.elfsight.com/p/platform.js" defer></script>
			</Helmet>

			<section className={styles.ForStudents}>
				<Heading main="Medical Representative Course" h1={true} subtext="Be Pharma Sales Ready from Day 1" />
				<Info
					data={[
						{
							picAlign: "left",
							src: img1,
							title: "medical representative training",
							alt: "person sitting with his laptop",
							text: "Karrier training and evolution institute offers a range of medical representative training courses. These courses are short term job-oriented courses as per student need, suitability & budget. Karrier Institute was founded by industry veteran Anubhav Saxena in 2015. ",
						},
						{
							picAlign: "right",
							src: img2,
							title: "Best Pharma Sales Trainer & Sales Consultant in India",
							alt: "Anubhav Saxena - Best Pharma Sales Trainer & Sales Consultant in India",
							text: (
								<div>
									He has a rich 27+ years of experience in top-notch companies like SUN PHARMA, Cadila, Torrent,
									IPCA & Emcure. He is also LSSSDC & NSDC certified pharma trainer in India. He not only
									understands the real pain & struggle of graduates as he himself faces the situation but also
									he knows the way to overcome these situations. Under his able leadership, Karrier institute is
									making a significant difference in students' life from tier 2/3 towns for the past 7 years,
									thus karrier is considered the best medical representative training institute in India.
								</div>
							),
						},
						{
							heading: "Medical Representative Training Institute",
							h2: true,
							picAlign: "left",
							src: img3,
							title: "medical representative training institute",
							alt: "graduate becoming a professional",
							text: (
								<div>
									There are various regional training institutes that run mr courses like endeavour medical
									representative training centre & carreograph institute of medical representative, iimr, mrti
									which are offering a medical representative course in kolkata, west bengal, UP, orissa, delhi
									or state level but karrier institute has an edge over them as it offers:
									<ul>
										<li>• Pan-India presence through industry tie-up. </li>
										<li>• Both online and offline modes for training.</li>
										<li>
											• Propel Pocket- Highly Effective Online Medical Representative Training Course (Hybrid
											Model). KARRIER- the first institute that introduced online MR training courses- Live as
											well as Hybrid.
										</li>
									</ul>
								</div>
							),
						},
						{
							picAlign: "right",
							src: img4,
							title: "medical representative course",
							alt: "a man pulling another person with help of a pulley",
							text: (
								<div>
									<ul>
										<li>• Training through highly experienced LSSSDC and NSDC certified trainers.</li>
										<li>• Mock interview sessions.</li>
										<li>• Detailing and RCPA role-play.</li>
										<li>• Doubt clearance session for weak students.</li>
										<li>• Assessments, Assignments & Notes.</li>
										<li>• Professional resume writing services.</li>
										<li>• Both Hindi and English mediums are available for training.</li>
										<li>• Karrier certification after compilation of training.</li>
										<li>• Job assistance - Interview conduction in top pharma companies till selection.</li>
									</ul>
								</div>
							),
						},
					]}
				/>
				<div className="container">
					<div className="row mb-5">
						<div className="col-lg-6">
							<h2 className="mt-0 mb-4">Karrier Training & Evolution Institute</h2>
							<iframe src="https://www.youtube.com/embed/p565Q2-OBb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
						<div className="col-lg-6">
							<h2 className="mt-0 mb-4">Medical Representative Course Fees</h2>
							<iframe src="https://www.youtube.com/embed/qy8_mPgaNIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
					</div>
				</div>
				<div className={styles.courseCardContainer}>
					<CourseCard
						name="Propel"
						src={Propel}
						curriculumPoints={[
							"Effective Communication",
							"Basics of Pharma Selling",
							"MR Role and Responsibilities",
							"Basic Science",
							"Body System",
							"Pharmacology",
							"Diseases",
							"Therapies",
							"Secret of  Pharma Selling",
							"Roleplay",
							"Personality Development",
							"Grooming",
							"Interview Preparation classes (5 hour workshop)",
						]}
						eligibilityPoints={["Graduate with any stream", "Age <=25 years"]}
						mode={["Live online classes"]}
						duration="40 hours (45 days)"
						cost="Rs 15000 + GST"
						usp="Assured Placement"
						payment="https://pages.razorpay.com/propel"
					/>
					<CourseCard
						name="Propel Pocket"
						src={PropelPocket}
						curriculumPoints={[
							"Basics of Pharma Selling",
							"MR Role and Responsibilities",
							"Basic Science",
							"Body System",
							"Pharmacology",
							"Diseases",
							"Therapies",
							"Secret of  Pharma Selling",
						]}
						eligibilityPoints={["Graduate with any stream", "No age bar"]}
						mode={[" 70% pre-recorded classes + ", "30% live online classes."]}
						duration="29 hours of pre-recorded classes"
						cost="Rs 4900 + GST"
						usp="Placement Assistence (9 out of 10 get job offer)"
						payment="https://rzp.io/l/propelpocket"
					/>

					<CourseCard
						name="Propel XL"
						src={PropelXL}
						curriculumPoints={[
							"Spoken English  ",
							"Effective Communication",
							"Basics of Pharma Selling",
							"MR Role and Responsibilities",
							"Basic Science",
							"Body System",
							"Pharmacology",
							"Diseases",
							"Therapies",
							"Secret of  Pharma Selling",
							"Roleplay",
							"Personality Development",
							"Grooming",
							"Power of dressing",
							"Profiling",
							"Killer first Impression",
						]}
						eligibilityPoints={["Graduate with any stream", "Age <=25 years"]}
						mode={["Live online classes"]}
						duration="80 hours (90 days)"
						cost="Rs 20,400 + GST"
						usp="Assured Placement"
						payment="https://pages.razorpay.com/propelxl"
					/>
				</div>
				<div className="container">
					<h2 className="text-center mb-5">Students’ Personality Transformation </h2>
					<div className="row">
						<div className="col-lg-6 mb-2">
							<h4 className="text-center mb-4 text-primary">Amit Kushwaha Personality Transformation</h4>
							<iframe src="https://www.youtube.com/embed/A_D_7CC2jGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
						<div className="col-lg-6">
							<h4 className="text-center mb-4 text-primary">Syed Mohd Asad Personality Transformation</h4>
							<iframe src="https://www.youtube.com/embed/ljQ2wax9CB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
					</div>
				</div>
				<section className={styles.reviews}>
					<Heading main="Reviews" subtext="what do our students say about us" />
					<div className="row px-5 mb-5">
						<div className="col-lg-3">
							<iframe src="https://www.youtube.com/embed/7Ok6lgX_0kY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
						<div className="col-lg-3">
							<iframe src="https://www.youtube.com/embed/JY6KVzxF6tA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
						<div className="col-lg-3">
							<iframe src="https://www.youtube.com/embed/dNtC_o5kP5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
						<div className="col-lg-3">
							<iframe src="https://www.youtube.com/embed/gt6wrgf3X1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
						<div className="col-lg-3">
							<iframe src="https://www.youtube.com/embed/HXIC_39nwUc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
						<div className="col-lg-3">
							<iframe src="https://www.youtube.com/embed/F8B39NDvRNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
						<div className="col-lg-3">
							<iframe src="https://www.youtube.com/embed/9vuEtnsyf_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
						<div className="col-lg-3">
							<iframe src="https://www.youtube.com/embed/95hzNKh8UvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
					</div>

					<img src={ReviewsImg} className={styles.reviewImg} alt="reviews" />

					<Reviews data={data} />
				</section>
				<div className="mt-5">
					<div class="elfsight-app-0a395800-30b7-4648-a058-d87897ca1250"></div>
				</div>
			</section>
		</>
	);
}

export default Courses;
