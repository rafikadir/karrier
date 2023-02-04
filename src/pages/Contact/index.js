import React from "react";
import styles from "./contact.module.css";
import ContactImg from "../../assets/contact.jpg";

function Contact() {
	return (
		<div
			className={styles.outerContainer}
			style={{
				backgroundImage: `url(${ContactImg})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className={styles.container}>
				<h1>Contact Us</h1>
				<div className={styles.icon_wrapper}></div>
				<form action="#" method="post" className={styles.contact_form}>
					<div className={styles.name}>
						<label for="name"></label>
						<input type="text" placeholder="Name" name="name" className={styles.name_input} required />
					</div>
					<div className={styles.email}>
						<label for="email"></label>
						<input type="email" placeholder="Email" name="email" className={styles.email_input} required />
					</div>
					<div className={styles.telephone}>
						<label for="name"></label>
						<input
							type="text"
							placeholder="Number"
							name="telephone"
							className={styles.telephone_input}
							required
						/>
					</div>
					<div className={styles.message}>
						<label for="message"></label>
						<textarea
							name="message"
							placeholder="Message"
							className={styles.message_input}
							cols="30"
							rows="5"
							required
						></textarea>
					</div>
					<div className={styles.submit}>
						<input type="submit" value="Send Message" className={`${styles.form_button} ${styles.button}`} />
					</div>
				</form>
			</div>
			</div>
	);
}

export default Contact;
