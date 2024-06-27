"use client";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const page = () => {
	return (
		<div className="min-h-[calc(100vh-230px)] flex flex-col justify-center items-center gap-8 mt-4">
			<form className="flex w-[60vw] flex-col gap-4">
				<h2 className="text-3xl sm:text-4xl text-center font-bold my-2">Contact Us</h2>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="name"
							value="Your Name"
						/>
					</div>
					<TextInput
						id="name"
						type="text"
						placeholder="John Doe"
						required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="subject"
							value="Subject"
						/>
					</div>
					<TextInput
						id="subject"
						type="text"
						placeholder="Subject"
						required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="message"
							value="Your Message"
						/>
					</div>
					<Textarea
						id="message"
						placeholder="Write your message here..."
						required
						rows={4}
					/>
				</div>

				<Button
					color="green"
					type="submit"
				>
					Send
				</Button>
			</form>
			<div>
				<div className="max-sm:flex-col flex gap-4 items-center justify-evenly w-[60vw] mb-4">
					<div className="flex flex-col gap-2">
						<h4 className="max-sm:text-center font-bold text-2xl">Address</h4>
						<p>C-5, Gujar Ki thadi, Jaipur</p>
						<p>Mob No. - 7878787878</p>
					</div>
					<div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1058.0985762468576!2d75.76413356406017!3d26.871575909848584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db45a043cf51b%3A0xba2dc550e20f15b2!2sCONCEPT%20RNA%20(Best%20Nursing%20Coaching%20in%20Jaipur%2C%20Staff%20Nurse%20Coaching%20%7C%20Best%20AIIMS%20Nursing%20Officer%20Coaching%20in%20India)!5e0!3m2!1sen!2sin!4v1719467000980!5m2!1sen!2sin"
							width="360"
							height="240"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};
export default page;
