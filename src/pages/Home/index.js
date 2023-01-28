import React from "react";
import styles from "./home.module.css";
import background from "../../assets/background.jpg";
import IndustryReviews from "../../components/industryReviews";
import Hero from "../../components/Hero2";
import Keypoints from "../../components/keypoints";
import Heading from "../../components/heading";
import Achievements from "../../components/achievements";
import Quote from "../../components/quote";
import Team from "../../components/team/index";
import NeedJob from "../../assets/images/Pictures/I need a job/i-need-a-job.jpg";
import JobsForFresher from "../../assets/images/Pictures/Career Choice/jobs-for-fresher.jpg";
import JourneySoFar from "../../assets/images/Pictures/Anubhav-Saxena-Best-Pharma-Sales-Trainer-Sales-Consultant-in-India.jpg";
import ChooseUs from "../../components/chooseUs";
import Info from "../../components/info";
import FAQ from "../../components/faq";
import { Helmet } from "react-helmet";
// import Heading from "../../components/heading";

function Home() {
	return (
		<>
			<Helmet>
				<title>Pharma jobs for graduates with high salary- Karrier</title>
  				<meta name="description" content="Fresh graduate & searching job? then MR job can be a good choice. Salary of a medical representative is 2.80 lacs/annum- higher than a fresh engineer"/>
				<meta name="keywords" content="Fresher jobs, jobs after bcom, jobs after mba, after bba jobs, pharma jobs, jobs after graduation, after bcom, job after b pharmacy, mr job"/>
				<meta name="robots" content="index,follow"/>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name="language" content="English"/>
				{/* The Open Graph protocol */}
				<meta property="og:url" content="http://karrier.in"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="Pharma jobs for graduates with high salary- Karrier"/>
				<meta property="og:description" content="Fresh graduate & searching job? then MR job can be a good choice. Salary of a medical representative is 2.80 lacs/annum- higher than a fresh engineer"/>
				<meta property="og:image" content="http://karrier.in/static/media/black.0492f018.png"/>
				<meta name="twitter:card" content="summary_large_image"/>
				<meta property="twitter:domain" content="karrier.in"/>
				<meta property="twitter:url" content="http://karrier.in"/>
				<meta name="twitter:title" content="Pharma jobs for graduates with high salary- Karrier"/>
				<meta name="twitter:description" content="Fresh graduate & searching job? then MR job can be a good choice. Salary of a medical representative is 2.80 lacs/annum- higher than a fresh engineer"/>
				<meta name="twitter:image" content="http://karrier.in/static/media/black.0492f018.png"/>    
				 
				<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/21841890.js"></script>
			</Helmet>
		
			<section className={styles.page}>
				<section className={styles.hero}>
					<Hero />
				</section>
				<section className={styles.keypoints}>
					<Keypoints />
				</section>
				<section
					className={styles.onlineContainer}
					style={{
						backgroundImage: `url(${background})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				>
					<Info
						data={[
							{
								picAlign: "left",
								src: NeedJob,
								title: "I need a job",
								alt: "I need a job",
								heading: "I need a job!",
								text: "The biggest problem a recent graduate often faces is unemployment. According to Skill India's 2021-22 report, only 46% of graduates were able to get a job.",
							},
							{
								picAlign: "right",
								src: JobsForFresher,
								title: "jobs for fresher",
								alt: "a graduate picking his career option",
								text: "It's a great thing to have a dream, but sometimes it's difficult to decide what the right thing to do is. Many times students don't know which kind of job suits their interests & requirements, and they are unsure about which industry they should start their career in.",
							},
							{
								picAlign: "left",
								src: JourneySoFar,
								title: "Anubhav Saxena - Best Pharma Sales Trainer & Sales Consultant in India",
								alt: "Anubhav Saxena - Best Pharma Sales Trainer & Sales Consultant in India",
								text: "I faced the same problems you are facing when I was a fresh graduate 27 years back. Hello! I am Anubhav Saxena and I am the founder & director of Karrier Training & Evolution Institute and our mission is to help young graduates facing similar problems to find a career in top pharma companies.",
							},
						]}
					/>
				</section>
				<section className={styles.chooseUs}>
					<ChooseUs />
				</section>
				<section className={styles.industryReviews}>
					<Heading main="Reviews" subtext="what does industry say about us" />
					<IndustryReviews />
				</section>
				<section className={styles.achievements}>
					<Heading main="Achievements" subtext="our achievements" />
					<Achievements />
				</section>

				<section>
					<Team />
					<Quote quote="85% of your financial success is due to your personality and ability to communicate, negotiate, and lead. Shockingly, only 15% is due to technical knowledge." />
				</section>
				<section className={styles.faqs}>
					<Heading main="FAQs" subtext="Common questions that people have" />
					<FAQ />
				</section>
			</section>

			<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/21841890.js"></script>
		</>
	);
}

export default Home;
