import "./App.css";
import logo from "./assets/logo.png";
import advert from "./assets/advert.png";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";
import image6 from "./assets/image6.jpg";
import image7 from "./assets/image7.jpg";
import image8 from "./assets/image8.jpg";
import image9 from "./assets/image9.jpg";
import image10 from "./assets/image10.jpg";
import image11 from "./assets/image11.jpg";
import image12 from "./assets/image12.jpg";
import image13 from "./assets/image13.jpg";
import affordable from "./assets/affordable.png";
import quality from "./assets/quality.png";
import topService from "./assets/top-service.png";
import variety from "./assets/variety.png";
import { ReactComponent as Facebook } from "./assets/facebook.svg";
import { ReactComponent as Twitter } from "./assets/twitter.svg";
import { ReactComponent as Instagram } from "./assets/instagram.svg";
import Pill from "./Pill";
import Slider from "react-slick";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		>
			<svg
				width="26"
				height="43"
				viewBox="0 0 26 43"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="slider-icon"
			>
				<path
					d="M0.981201 41.5958C0.387451 41.0437 0.0905762 40.3901 0.0905762 39.6348C0.0905762 38.8811 0.387451 38.2281 0.981201 37.676L18.3781 21.5L0.921826 5.26874C0.367659 4.75347 0.0905762 4.10937 0.0905762 3.33645C0.0905762 2.56354 0.387451 1.90104 0.981201 1.34895C1.57495 0.79687 2.27795 0.520828 3.0902 0.520828C3.90087 0.520828 4.60308 0.79687 5.19683 1.34895L25.1468 19.9542C25.3843 20.175 25.553 20.4142 25.6527 20.6719C25.7509 20.9295 25.8 21.2055 25.8 21.5C25.8 21.7944 25.7509 22.0705 25.6527 22.3281C25.553 22.5858 25.3843 22.825 25.1468 23.0458L5.13745 41.651C4.58328 42.1663 3.90087 42.424 3.0902 42.424C2.27795 42.424 1.57495 42.1479 0.981201 41.5958Z"
					fill="black"
				/>
			</svg>
		</div>
	);
}
function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		>
			<svg
				width="26"
				height="43"
				viewBox="0 0 26 43"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="slider-icon"
			>
				<path
					d="M25.0187 1.40417C25.6125 1.95626 25.9094 2.60992 25.9094 3.36517C25.9094 4.11895 25.6125 4.77188 25.0187 5.32396L7.62186 21.5L25.0781 37.7313C25.6323 38.2465 25.9094 38.8906 25.9094 39.6635C25.9094 40.4365 25.6125 41.099 25.0187 41.651C24.425 42.2031 23.722 42.4792 22.9097 42.4792C22.0991 42.4792 21.3969 42.2031 20.8031 41.651L0.853109 23.0458C0.61561 22.825 0.446987 22.5858 0.347237 22.3281C0.249069 22.0705 0.199986 21.7945 0.199986 21.5C0.199986 21.2056 0.249069 20.9295 0.347237 20.6719C0.446987 20.4142 0.61561 20.175 0.853109 19.9542L20.8625 1.34896C21.4167 0.833687 22.0991 0.576046 22.9097 0.576046C23.722 0.576046 24.425 0.852089 25.0187 1.40417Z"
					fill="black"
				/>
			</svg>
		</div>
	);
}

function App() {
	const pills = [
		{
			text: "Beauty",
			color: "#9747FF",
		},
		{
			text: "Cleaning",
			color: "#98BBFF",
		},
		{
			text: "Automotives",
			color: "#D93B34",
		},
		{
			text: "Arts and Crafts",
			color: "#F7C034",
		},
		{
			text: "Pets and Supplies",
			color: "#1CB4C4",
		},
	];
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	const sliderImages = [
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
		image9,
		image10,
		image11,
		image12,
		image13,
	];

	return (
		<div className="App">
			<header className="header">
				<img src={logo} alt="Dollar Zone" className="logo" />
			</header>
			<main className="full-bleed">
				<div className="hero">
					<div className="text">
						<h1 className="title">
							Quality products priced <span>$10 or below!</span>
						</h1>
						<h2 className="sub-title">
							Dollar Zone is a bargain retail store selling a wide range of
							household goods.
						</h2>
					</div>
					<div className="pills">
						{pills.map((pill) => (
							<Pill {...pill} />
						))}
					</div>
					<div className="buttons">
						<a
							className="button"
							target="_blank"
							href="https://www.google.com/maps/search/?api=1&query=7916 dorsey run road suite 6, jessup MD 20794"
							rel="noreferrer"
						>
							Locate Us
						</a>
						<a className="button" href="tel:+1 (410) 867-5407">
							Call Us
						</a>
					</div>
					<div className="slider">
						<Slider {...settings}>
							{sliderImages.map((image) => (
								<div>
									<img src={image} className="slider-image" alt="slider" />
								</div>
							))}
						</Slider>
					</div>
				</div>
				<ul className="services full-bleed">
					<li className="service">
						<img src={quality} alt="serivce" />
					</li>
					<li className="service">
						<img src={affordable} alt="serivce" />
					</li>
					<li className="service">
						<img src={variety} alt="serivce" />
					</li>
					<li className="service">
						<img src={topService} alt="serivce" />
					</li>
				</ul>
				<ul className="services-info full-bleed">
					<li className="service-info">
						<h3>Quality</h3>
						<p>We provide the best quality in both experience and products</p>
					</li>
					<li className="service-info">
						<h3>Affordable</h3>
						<p>Quality products priced for $10 or below!</p>
					</li>
					<li className="service-info">
						<h3>Variety</h3>
						<p>There is something for everybody!</p>
					</li>
					<li className="service-info">
						<h3>Top Service</h3>
						<p>Helpful staffs skilled in the art of customer service</p>
					</li>
				</ul>
				<div className="small-services full-bleed">
					<div className="small-service">
						<div className="small-service-img">
							<img src={quality} alt="small-service" />
						</div>
						<div className="small-service-text">
							<h3>Quality</h3>
							<p>We provide the best quality in both experience and products</p>
						</div>
					</div>
					<div className="small-service">
						<div className="small-service-img">
							<img src={variety} alt="small-service" />
						</div>
						<div className="small-service-text">
							<h3>Variety</h3>
							<p>There is something for everybody!</p>
						</div>
					</div>
					<div className="small-service">
						<div className="small-service-img">
							<img src={affordable} alt="small-service" />
						</div>
						<div className="small-service-text">
							<h3>Affordable</h3>
							<p>Quality products priced for $10 or below!</p>
						</div>
					</div>
					<div className="small-service">
						<div className="small-service-img">
							<img src={topService} alt="small-service" />
						</div>
						<div className="small-service-text">
							<h3>Top Service</h3>
							<p>Helpful staffs skilled in the art of customer service</p>
						</div>
					</div>
				</div>
			</main>
			<footer className="footer full-bleed">
				<img src={advert} alt="advert" className="advert" />
				<div className="socialIcons">
					<a
						target="_blank"
						href="https://m.facebook.com/story.php?story_fbid=pfbid02tbLwKFJSZFBk8PDE5VBZT8NpVC4MdGaV1HPnc9X2XUFFg3QUZdpBeu9B1vHnXTHtl&id=100089023857833"
						rel="noreferrer"
					>
						<Facebook />
					</a>
					<Twitter />
					<Instagram />
				</div>
			</footer>
		</div>
	);
}

export default App;
