import React from "react";
import styles from "./collegeReviews.module.css";
import collegeOnePic from '../../assets/images/Campus to corporate/chitkara (2).jpg';
import collegeTwoPic from '../../assets/images/Campus to corporate/chitkara university pic.jpg';
import collegeThreePic from '../../assets/images/Campus to corporate/goel institute.jpg';
import collegeFourPic from '../../assets/images/Campus to corporate/HYGIA INSTITUTE.jpg';
import collegeFivePic from '../../assets/images/Campus to corporate/Goel Institute- 4.jfif';
import collegeSixPic from '../../assets/images/Campus to corporate/Goel Institute- 6.jfif';


function CollegeReviews() {
	return (
		<div className="container">
			<div className="row pt-5">
				<div className="col-md-6 mb-2">
					<img src={collegeOnePic} alt="college" />
				</div>
				<div className="col-md-6  mb-2">
					<img src={collegeTwoPic} alt="college" />
				</div>
				<div className="col-md-6  mb-2">
					<img src={collegeThreePic} alt="college" />
				</div>
				<div className="col-md-6  mb-2">
					<img src={collegeFourPic} alt="college" />
				</div>
				<div className="col-md-6  mb-2">
					<img src={collegeFivePic} alt="college" />
				</div>
				<div className="col-md-6  mb-2">
					<img src={collegeSixPic} alt="college" />
				</div>
			</div>
		</div>
	);
}

export default CollegeReviews;
