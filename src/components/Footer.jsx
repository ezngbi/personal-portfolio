import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export default function Footer() {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-item-center">
					<Col sm={6}>
						<img src={logo} alt="" />
					</Col>
					<Col sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a href="https://www.linkedin.com/in/ha-binh-nguyen/">
								<img src={navIcon1} alt="" />
							</a>
							<a href="https://github.com/ezngbi">
								<img src={navIcon2} alt="" />
							</a>
							<a href="mailto:binhnguyen2783@gmail.com">
								<img src={navIcon3} alt="" />
							</a>
							<a href="https://leetcode.com/ezngbi/">
								<img src={navIcon4} alt="" />
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
