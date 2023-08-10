/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export default function ProjectCard({ title, description, imgUrl, projectUrl }) {
	return (
		<Col size={12}>
			<div className="proj-imgbx">
				<img src={imgUrl} alt="" />
				<div className="proj-txtx">
					<h4 className="mt-3">{title}</h4>
					<ul>
						{description.map((des, index) => {
							return <li key={index}>{des}</li>;
						})}
					</ul>
				</div>
			</div>
			{projectUrl && (
				<button
					onClick={() => (window.location.href = projectUrl)}
					id="project-button"
				>
					Go to {title} <ArrowRightCircle size={25} />
				</button>
			)}
		</Col>
	);
}
