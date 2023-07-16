import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Waitlist from "./components/Waitlist";
import { Helmet } from "react-helmet";

function App() {
	return (
		<div>
			{/* <!-- Header Banner --> */}
			<Helmet>
				<title>Raum INC.</title>
				<meta name="title" content="Raum INC." />
				<meta
					name="description"
					content="Pioneering sustainable living with tech-driven property solutions."
				/>
			</Helmet>
			<Header />
			<Waitlist />
			<div className="bg-[#111111]">
				<Footer />
			</div>
		</div>
	);
}

export default App;
