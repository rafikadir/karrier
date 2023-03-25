import React from "react";
import styles from "./InternshipProgram.module.css";
import Heading from "../../components/heading";
import Benefits from "../../components/benefits";
import StudentsReviews from "../../components/studentsReviews";
import Background from "../../assets/images/Pictures/Internship/students/background.jpg";
import CollegeReviews from "../../components/collegeReviews";
import img1 from "../../assets/images/Pictures/campus to corporate/internship-after-graduation.jpg";
import img2 from "../../assets/images/Pictures/campus to corporate/Best Pharma Sales Trainer & Sales Consultant in India.jpg";
import internshipModel from "../../assets/images/Pictures/campus to corporate/campus to corporate.jpg";
import Info from "../../components/info";
import { Helmet } from "react-helmet";
import CollegeOne from '../../assets/images/Campus to corporate/chitkara university.png';
import CollegeTwo from '../../assets/images/Campus to corporate/Pad Dr D Y PATIL INSTITUTE OF PHARMACY.jpg';
import CollegeThree from '../../assets/images/Campus to corporate/goa college of pharmacy.jpg';
import CollegeFour from '../../assets/images/Campus to corporate/MAHARASTHRA.jfif.jpg';
import CollegeFive from '../../assets/images/Campus to corporate/LOVELY.png';
import CollegeSix from '../../assets/images/Campus to corporate/GOEL INSTITUTE.jfif.jpg';
import reviewOne from '../../assets/images/Campus to corporate/Ravinder comments.jpg';
import reviewFour from '../../assets/images/Campus to corporate/Ratish Dixit review.jpg';


function InternshipProgram() {
	return (
		<>
			<Helmet>
				<meta name="title" content="Graduate >> INTERNSHIP >> High Chances to get hired"/>
				<meta name="description" content="CAMPUS to CORPORATE - An internship in pharma sales for graduates. Ideal for Degree college/university placement cell. Industry Tie-ups ⭐⭐⭐⭐⭐"/>
				<meta name="keywords" content="Campus to corporate, campus to corporate training, soft skill trainer, campus placement, placement drive, internships in pharmaceutical companies, sales marketing internship, internship in pharma company, internship in pharmaceutical company, pharma internship, internship after graduation, industrial training in pharma"/>
				<meta name="robots" content="index,follow"/>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name="language" content="English"/>
				<link rel="canonical" href="https://karrier.in/corporate-training" />

				<meta property="og:url" content="https://karrier.in/corporate-training"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="Graduate >> INTERNSHIP >> High Chances to get hired"/>
				<meta property="og:description" content="CAMPUS to CORPORATE - An internship in pharma sales for graduates. Ideal for Degree college/university placement cell. Industry Tie-ups ⭐⭐⭐⭐⭐"/>
				<meta property="og:image" content="https://karrier.in/static/media/black.0492f01808c30c4fe252.png"/>

				<meta name="twitter:card" content="summary_large_image"/>
				<meta property="twitter:domain" content="karrier.in"/>
				<meta property="twitter:url" content="https://karrier.in/corporate-training"/>
				<meta name="twitter:title" content="Graduate >> INTERNSHIP >> High Chances to get hired"/>
				<meta name="twitter:description" content="CAMPUS to CORPORATE - An internship in pharma sales for graduates. Ideal for Degree college/university placement cell. Industry Tie-ups ⭐⭐⭐⭐⭐"/>
				<meta name="twitter:image" content="https://karrier.in/static/media/black.0492f01808c30c4fe252.png"/>  

				<script type="application/ld+json">
  					{JSON.stringify(
						{
							"@context": "https://schema.org/",
							"@type": "WebSite",
							"name": "campus to corporate",
							"url": "https://karrier.com/campus-to-corporate",
							"potentialAction": {
							"@type": "SearchAction",
							"target": "{search_term_string}",
							"query-input": "required name=search_term_string",
							},
						} 
					)} 
				</script>   
			</Helmet>
		
		<section className={styles.ForInstitutes}>
			<Heading
				h1={true}
				main="Campus to Corporate"
				subtext="Flagship Model, a win-win model for all stakeholders"
			/>
			<Info
				data={[
					{
						picAlign: "left",
						src: img1,
						h2: true,
						title: "Kick-start Your Career",
						alt: "students sitting in front of the laptop",
						heading: "Internship Program- Kick-start Your Career ",
						text: (<>
							<div className="mb-2">
								Kick-start your career - An Internship Program (for degree colleges, universities). <br/> 9 out of
								10 students with internships get the job offer. Our Internship Program introduces the future
								leaders of Pharma sales and marketing to the industry. You will be trained by our veteran
								team, learn from industry veterans, and create valuable relationships with top professionals.
								As a part of the program, you will be paired with a mentor who will guide you throughout your
								entire experience.
							</div>
							<div>
								This program is ideal for degree colleges/university final year graduates (any stream) willing
								to start a career in pharma sales. This is a unique opportunity for students to earn a stipend
								during a field internship within their state for a period of 3 months. There is a very high
								chance for students to get employed after the successful completion of the field internship.
							</div></>
						),
					},
					{
						picAlign: "right",
						src: img2,
						title: "certified soft skill trainer in India",
						alt: "Anubhav Saxena- Best Pharma Sales Trainer",
						heading:
							"Know your Mentor: Anubhav Saxena - Best Pharma Sales Trainer & Sales Consultant in India",
						text: (
							<>
							<div className="mb-2">
								Karrier Institute was founded by industry veteran Anubhav Saxena in 2015 having a rich 27+ years of experience in top-notch companies like SUN PHARMA, Cadila, Torrent, IPCA & Emcure. He is LSSSDC & NSDC certified pharma trainer in India.
							</div>
							<div>
							He not only understands the real pain & struggle of graduates as he himself faces the situation but also he knows the way to overcome these situations. Under his able leadership, Karrier institute is making a significant difference in students' life from tier 2/3 towns for the past 7 years, thus karrier is considered the best medical representative training institute in India.
							</div>
							</>
						),
					},
				]}
			/>
			<div className="container">
				<h2 className="mb-5">Campus to Corporate Program</h2>

				<div className={styles.video}>
				<iframe src="https://www.youtube.com/embed/Y0p1iwtDH0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
			</div>
			<p>Kindly refer to the Internship model illustrated here… </p>
			<img
				src={internshipModel}
				title="campus to corporate"
				alt="illustrating campus to corporate program"
				className={styles.internshipModel}
			/>
			<Info
				data={[
					{
						text: "Note: Inquiries from colleges & universities for tie-up for the internship program are most welcomed. (We don’t entertain individual student internship requests.)",
					},
				]}
			/>
			<section className={styles.featuresSection}>
				<Heading main="Features" subtext="Salient Features" />
				<Benefits />
			</section>
			<section className={styles.reviews}>
				<Heading main="Affiliations with Institutions" subtext=""/>
				<div className="row text-center pt-5 align-items-center">
					<div className="col-lg-2 col-md-4">
						<img className={styles.collegeLogo} src={CollegeOne} alt="college" />
					</div>
					<div className="col-lg-2 col-md-4">
						<img className={styles.collegeLogo} src={CollegeTwo} alt="college" />
					</div>
					<div className="col-lg-2 col-md-4">
						<img className={styles.collegeLogo} src={CollegeThree} alt="college" />
					</div>
					<div className="col-lg-2 col-md-4">
						<img className={styles.collegeLogo} src={CollegeFour} alt="college" />
					</div>
					<div className="col-lg-2 col-md-4">
						<img className={styles.collegeLogo} src={CollegeFive} alt="college" />
					</div>
					<div className="col-lg-2 col-md-4">
						<img className={styles.collegeLogo} src={CollegeSix} alt="college" />
					</div>
				</div>

				<div className="row">
					<div className="col-md-6 mb-1">
						<div className={styles.collegeComment}>
							<img src={reviewOne} alt="college" />
						</div>
					</div>
					<div className="col-md-6">
						<div className={styles.collegeComment}>
							<img src={reviewFour} alt="college" />
						</div>
					</div>
				</div>
				{/* <Reviews /> */}
				<CollegeReviews />
			</section>
			<section
				style={{
					backgroundImage: `url(${Background})`,
					backgroundPosition: "center",
					backgroundSize: "center",
					backgroundRepeat: "no-repeat",
				}}
				className={styles.reviews}
			>
				<Heading main="Student Reviews" subtext="What do our students say about us" />
				{/* <Reviews /> */}
				<StudentsReviews />
			</section>
		</section>
		</>
	);
}

export default InternshipProgram;
