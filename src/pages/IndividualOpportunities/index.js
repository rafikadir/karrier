import React, { useEffect, useState } from "react";
import styles from "./IndividualOpportunities.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";


const IndividualOpportunity = () => {
	const handleClick = () => {
		console.info("You clicked the Chip.");
	};
	return (
		<div>
			<div className={styles.oppPage}>
				<Card className={`${styles.header} ${styles.card}`} sx={{ width: "78.5vw" }}>
					<Avatar
						className={styles.headerAvatar}
						alt="Position Name"
						src=""
						sx={{ width: "14vh", height: "14vh" }}
					/>
					<div className={styles.headerText}>
						<Typography
							variant="h3"
							sx={{ fontWeight: "bold" }}
							// gutterBottom
							color="text.secondary"
							component="div"
							// align="left"
						>
							Position Name
						</Typography>
						<Typography
							variant="h5"
							sx={{ fontWeight: "bold" }}
							gutterBottom
							color="text.secondary"
							component="div"
							align="left"
							width="100%"
						>
							Company Name
						</Typography>
					</div>
				</Card>
				<div className={styles.pageContent}>
					<div className={styles.left}>
						<Card className={`${styles.infoBox} ${styles.card}`} sx={{ maxWidth: "55vw" }}>
							<CardContent>
								<Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }} component="div">
									What you 'll do
								</Typography>
								<Typography sx={{ mb: 1.5 }} color="text.secondary">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor quis scelerisque pellentesque
									ut sed dolor.Tortor mauris tellus viverra curabitur laoreet.Fermentum risus diam elit dolor
									viverra pulvinar habitant.Proin diam euismod augue mauris facilisi placerat nullam
									dolor.Posuere id eu pellentesque ipsum nisl nunc nibh.Posuere in urna pulvinar in quis
									laoreet ullamcorper.Quis sapien consectetur magna auctor lorem eget cursus enim.Integer sed
									cursus nullam rhoncus in .Orci tristique justo, pharetra eget urna.In at congue ornare
									blandit.Sed ante tempor volutpat in .Adipiscing dui cursus hendrerit dis cras at facilisis
									diam ut.Gravida ultrices consequat nunc euismod ridiculus nisi, aliquam morbi.Tellus lorem
									laoreet massa, est neque.Porttitor libero risus id enim, tristique amet, convallis integer
									blandit.Sed odio ultricies elit pellentesque.Dolor leo urna, viverra mauris tincidunt
									vivamus interdum sed.A, arcu pharetra sem orci.Ut sed dolor egestas aliquet.Id elementum
									amet massa ipsum tincidunt libero sed.Nibh tellus ultrices proin egestas.Nisi lacus id sit
									amet urna.Sed proin facilisis urna, neque.Euismod tortor dolor egestas lorem ut purus varius
									in .Arcu feugiat tellus, elit placerat.{" "}
								</Typography>{" "}
								{/* <Typography variant="body2">
            						well meaning and kindly.
            						<br />
            						{'"a benevolent smile"'}
            					</Typography> */}
							</CardContent>
						</Card>
					</div>
					<div className={`${styles.rightBar}`}>
						<div className={styles.row}>
							<div className={`${styles.smallCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Location
								</Typography>
								<Typography
									sx={{ mb: 1.5, marginBottom: "0" }}
									align="left"
									width="100%"
									color="text.secondary"
								>
									Lorem Ipsum, COUNTRY
								</Typography>
							</div>
							<div className={`${styles.smallCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Location
								</Typography>
								<Typography
									sx={{ mb: 1.5, marginBottom: "0" }}
									align="left"
									width="100%"
									color="text.secondary"
								>
									Lorem Ipsum, COUNTRY
								</Typography>
							</div>
						</div>
						<div className={styles.row}>
							<div className={`${styles.smallCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Location
								</Typography>
								<Typography
									sx={{ mb: 1.5, marginBottom: "0" }}
									align="left"
									width="100%"
									color="text.secondary"
								>
									Lorem Ipsum, COUNTRY
								</Typography>
							</div>
							<div className={`${styles.smallCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Location
								</Typography>
								<Typography
									sx={{ mb: 1.5, marginBottom: "0" }}
									align="left"
									width="100%"
									color="text.secondary"
								>
									Lorem Ipsum, COUNTRY
								</Typography>
							</div>
						</div>
						<div className={styles.row}>
							<div className={`${styles.longCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Tags
								</Typography>
								<Stack direction="row" spacing={2.5} sx={{ width: "95%" }}>
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
								</Stack>
								<Stack direction="row" spacing={2.5} sx={{ margin: "2vh 0", width: "95%" }}>
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
								</Stack>
							</div>
						</div>
						<div className={styles.row}>
							<div className={`${styles.longCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Company Name on Social3
								</Typography>
								<Typography
									sx={{ mb: 1.5, marginBottom: "0" }}
									align="left"
									width="100%"
									color="text.secondary"
								>
									<div className={styles.table}>
										<div className={styles.tableCol}>
											<p>Open Opportunities Listed:</p>
											<p>People Hired:</p>
											<p>Category:</p>
										</div>
										<Typography sx={{ mb: 1.5, marginBottom: "0" }} align="right" color="text.secondary">
											<div>
												<p>03</p>
												<p>03</p>
												<p>Finance</p>
											</div>
										</Typography>
									</div>
									Associated Tags:
								</Typography>
								<Stack direction="row" spacing={2.5} sx={{ margin: "2vh 0", width: "95%" }}>
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
								</Stack>
								<Typography
									sx={{ mb: 1.5, margin: "2vh 0" }}
									align="center"
									width="100%"
									color="text.secondary"
								>
									Joined on DD Month YYYY
								</Typography>
							</div>
						</div>

						<div className={styles.row}>
							<div className={`${styles.longCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Share the Opportunity
								</Typography>
								<Stack direction="row" spacing={2.5} sx={{ width: "95%" }}></Stack>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default IndividualOpportunity;
