import Image from "next/image";
import CallToAction from "../components/callToAction";
import GetPaid from "../components/getPaid";
import Testimonials from "../components/testimonials";
import VectorOne from "../components/vectors/vectorOne";
import WhoIsFor from "../components/whoIsFor";

export default function Home() {
	return (
		<div className="max-w-[1440px] mx-auto overflow-hidden">
			<CallToAction />
			<div className="relative mb-36">
				<VectorOne />
			</div>
			<GetPaid />
			<div className="mt-24 mb-24">
				<WhoIsFor />
			</div>
			<Testimonials />
		</div>
	);
}
