import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import WorkExperience from "./WorkExperience";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";

export default function Projects() {
	const projects = [
		{
			title: "YelpCamp",
			description: [
				"Developed a dynamic full-stack web application, YelpCamp, leveraging cutting-edge technologies such as Node.js, Express.js, MongoDB, Bootstrap and JavaScript. App implemented CRUD functionality and Model–view–controller design pattern.",
				"Implemented user authentication and authorization with Passport.js. Designed to avoid common security attacks such as Mongo injection or Cross-site scripting. Ultilized Sessions to establish secure login system and ensure seamless user experience",
				"Created a database schema to store campground information, user details, and user reviews using MongoDB and Mongoose",
				"Integrated the Mapbox API to enhance the application by providing interactive campground maps",
			],
			imgUrl: projImg1,
			projectUrl: "https://serene-sea-98216-d36f724cc4b8.herokuapp.com/",
		},
		{
			title: "This Portfolio website",
			description: [
				"Developed a responsive portfolio website with React and implemented advanced animations using CSS and React Bootstrap",
				"Utilized React components and state management techniques to ensure a modular and maintainable codebase",
			],
			imgUrl: projImg4,
			projectUrl: "https://github.com/ezngbi/personal-portfolio",
		},
	];

	const sideProjects = [
		{
			title: "Youtube Clone",
			description: [
				"Engineered a YouTube clone leveraging TypeScript, Next.js, Express.js Adopted a Dockerized deployment strategy.",
				"Implemented FFmpeg for efficient video compression, paired with Firebase Functions to manage uploads. Optimized storage with Google Cloud Storage, ensuring swift retrieval and playback, while Google Cloud Pub/Sub was harnessed to trigger events",
				"Incorporated Firebase Firestore for robust web hosting and ultilized Firebase Auth for secure Google account authentication",
			],
			imgUrl: projImg2,
			projectUrl: "https://yt-web-client-gq7klg4nva-uc.a.run.app/",
		},
		{
			title: "VivyNet AI Research Lab at ASU",
			description: [
				"Developed an AI model on Python that translates text input into music using an encoder-decoder architecture with BERT as the encoder and SymphonyNet as the decoder",
				"Collaborated with the team of 4 people to compare the performance, efficiency, and accuracy of the encoder-decoder model with the lab's primary transformer model for text-to-music translation",
			],
			imgUrl: projImg3,
			projectUrl: "",
		},
	];
	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col>
						<h2>Experience</h2>
						<p>
							Here are my work experience related to the field. This includes my internships and the personal projects that I have done. Check out the tabs to learn more about my skills ❤️
						</p>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav
								variant="pills"
								className="nav-pills mb-5 justify-content-center align-items-center"
								id="pills-tab"
							>
								<Nav.Item>
									<Nav.Link eventKey="first">Work Experience</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">
										Significant Projects
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Other Projects</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<WorkExperience />
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<Row>
										{projects.map((project, index) => {
											return (
												<ProjectCard key={index} {...project} />
											);
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<Row>
										{sideProjects.map((project, index) => {
											return (
												<ProjectCard key={index} {...project} />
											);
										})}
									</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img src={colorSharp2} alt="" className="background-image-right" />
		</section>
	);
}
