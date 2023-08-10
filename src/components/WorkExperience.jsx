import { Container, Row, Col } from "react-bootstrap";

export default function WorkExperience() {
	return (
		<section className="">
			<Container>
				<Row>
					<Col>
						<div className="work-experience">
							<h2>Oryza Systems (May 2023 - Jul 2023)</h2>
							<h3>Software Engineer Intern</h3>
							<ul>
								<li>
									Constructed a Video Management System (VMS) using Qt
									C++ to enable real-time monitoring of IP cameras,
									review of video recordings, and intelligent video
									analysis by implementing video and image processing
									AI models
								</li>
								<li>
									Upgraded the VMS to support 32 simultaneous camera
									streams, up from 1 stream, using OpenCV, FFmpeg, and
									C++ multi- threading techniques. Optimized
									performance enabling image processing on basic
									hardware with no external GPU needed
								</li>
								<li>
									Analyzed and integrated UI features from open-source
									Nx-Meta to the project, enhancing user interface and
									experience
								</li>
								<li>
									Collaborated with 5 other engineers to develop
									RESTful APIs for login, and data management based on
									the CRUD principle. Implemented real-time intelligent
									video analysis using WebSocket connections for data
									transfer between server and client.
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
