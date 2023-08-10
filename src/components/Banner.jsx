import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css'
import TrackVisibility from "react-on-screen";

export default function Banner() {
	const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
	const toRotate = [
		"Fullstack Developer",
		"Web Developer",
		"Software Engineer",
    ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1);
            setDelta(500)
        }
    }

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? "animate__animated animate__fadeIn"
											: ""
									}
								>
									<span className="tagline">
										Welcome to my Portfolio
									</span>
									<h1>
										{`Hi I'm Binh 👋`}
										<br />
										<span className="wrap">{text}</span>
									</h1>
									<p>
										I&apos;m a Computer Science junior at Arizona
										State University. My expertise lies in Web
										Development languages like HTML, CSS, JavaScript,
										Bootstrap, and MERN stack (MongoDB, Express,
										React, Node). I&apos;m also proficient in Java and
										C++ and familiar with Object-oriented and
										Multithreading programming. Additionally, I have
										hands-on experience with Python and Machine
										Learning Algorithms.
									</p>
									<button
										onClick={() =>
											(window.location.href =
												"/personal-portfolio/Binh_Nguyen_Resume.pdf")
										}
									>
										My Resume <ArrowRightCircle size={25} />
									</button>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={7}>
						<img src={headerImg} alt="Header Img" />
					</Col>
				</Row>
			</Container>
		</section>
	);
}
