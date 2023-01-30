import React from "react";
import styles from "./placedStudents.css";
import Student from "./student";
import Heading from "../heading";

function PlacedStudents(props) {
	return (
		<div>
			<section className={styles.PlacedStudentsSection} class="PlacedStudentsSection">
				<div class="placedStudentHeading">
					<Heading main="Hundreds of Students Trained and Placed" subtext="students placed by us" />
				</div>

				<div class="container">
					<div class="row flex-center sm-no-flex">
						<div class="pull-right sm-no-float col-md-8">
							<ul class="team-members">
								<li class="clearfix">
									<Student />
									<Student />
									<Student />
								</li>
								<li class="clearfix">
									<Student />
									<Student />
									<Student />
								</li>
								<li class="clearfix">
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default PlacedStudents;
