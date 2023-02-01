import React from "react";
import styles from "./InternshipProgram.module.css";
// import "./courses.css";
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
import { JsonLd } from "react-schemaorg";


function InternshipProgram() {
	return (
		<>
			<Helmet>
				<meta name="title" content="Graduate >> INTERNSHIP >> High Chances to get hired"/>
				<meta name="description" content="CAMPUS to CORPORATE - An internship in pharma sales for graduates. Ideal for Degree college/university placement cell. Industry Tie-ups ⭐⭐⭐⭐⭐"/>
				<meta name="keywords" content="Campus to corporate, campus to corporate training, soft skill trainer, campus placement, placement drive, internships in pharmaceutical companies, sales marketing internship, internship in pharma company, internship in pharmaceutical company, pharma internship, internship after graduation"/>
				<meta name="robots" content="index,follow"/>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name="language" content="English"/>

				<meta property="og:url" content="https://karrier.in"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="Graduate >> INTERNSHIP >> High Chances to get hired"/>
				<meta property="og:description" content="CAMPUS to CORPORATE - An internship in pharma sales for graduates. Ideal for Degree college/university placement cell. Industry Tie-ups ⭐⭐⭐⭐⭐"/>
				<meta property="og:image" content=""/>

				<meta name="twitter:card" content="summary_large_image"/>
				<meta property="twitter:domain" content="karrier.in"/>
				<meta property="twitter:url" content="https://karrier.in"/>
				<meta name="twitter:title" content="Graduate >> INTERNSHIP >> High Chances to get hired"/>
				<meta name="twitter:description" content="CAMPUS to CORPORATE - An internship in pharma sales for graduates. Ideal for Degree college/university placement cell. Industry Tie-ups ⭐⭐⭐⭐⭐"/>
				<meta name="twitter:image" content=""/>  

				<JsonLd>
					{{
						"@context": "https://schema.org/",
						"@type": "WebSite",
						name: "campus to corporate",
						url: "https://karrier.com/campus-to-corporate",
						potentialAction: {
						"@type": "SearchAction",
						target: "{search_term_string}",
						"query-input": "required name=search_term_string",
						},
					}}
				</JsonLd>       
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
						title: "Kick-start your career",
						alt: "students sitting in front of the laptop",
						heading: "Kick-start Your Career",
						text: (
							<div>
								Kick-start your career - An Internship Program (for degree colleges, universities). 9 out of
								10 students with internships get the job offer. Our Internship Program introduces the future
								leaders of Pharma sales and marketing to the industry. You will be trained by our veteran
								team, learn from industry veterans, and create valuable relationships with top professionals.
								As a part of the program, you will be paired with a mentor who will guide you throughout your
								entire experience.
								<span className={styles.mb}></span>
								This program is ideal for degree colleges/university final year graduates (any stream) willing
								to start a career in pharma sales. This is a unique opportunity for students to earn a stipend
								during a field internship within their state for a period of 3 months. There is a very high
								chance for students to get employed after the successful completion of the field internship.
							</div>
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
							<div>
								9 out of 10 students with internships get the job offer. Our Internship Program introduces the
								future leaders of Pharma sales and marketing to the industry. You will be trained by our
								veteran team, learn from industry veterans, and create valuable relationships with top
								professionals. As a part of the program, you will be paired with a mentor who will guide you
								throughout your entire experience.
								<span className={styles.mb}></span>
								This program is ideal for degree colleges/university final year graduates (any stream) willing
								to start a career in pharma sales. This is a unique opportunity for students to earn a stipend
								during a field internship within their state for a period of 3 months. There is a very high
								chance for students to get employed after the successful completion of the field internship.
							</div>
						),
					},
				]}
			/>
			<p>Kindly refer to the Internship model illustrated here… </p>
			<img
				src={internshipModel}
				title="campus to corporate"
				alt="Picture illustrating campus to corporate program"
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
			<section className={styles.reviews}>
				<Heading main="College Reviews" subtext="What do colleges say about us" />
				{/* <Reviews /> */}
				<CollegeReviews />
			</section>
		</section>
		</>
	);
}

export default InternshipProgram;
