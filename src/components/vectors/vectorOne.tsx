import Image from "next/image";

export default function VectorOne() {
	return (
		<div className="vector-1">
			<Image
				src="/symbol-scatter-haikei-bg.svg"
				fill
				alt="stars"
				className="z-30"
			/>
			<svg
				data-name="Layer 1"
				viewBox="0 0 1200 120"
				width="1200"
				height="120"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				className="z-10"
			>
				<path
					d="M0 99L28.5 86.3C57 73.7 114 48.3 171.2 44.8C228.3 41.3 285.7 59.7 342.8 71.3C400 83 457 88 514.2 85.8C571.3 83.7 628.7 74.3 685.8 68.8C743 63.3 800 61.7 857.2 65.2C914.3 68.7 971.7 77.3 1028.8 72.8C1086 68.3 1143 50.7 1171.5 41.8L1200 33L1200 0L1171.5 0C1143 0 1086 0 1028.8 0C971.7 0 914.3 0 857.2 0C800 0 743 0 685.8 0C628.7 0 571.3 0 514.2 0C457 0 400 0 342.8 0C285.7 0 228.3 0 171.2 0C114 0 57 0 28.5 0L0 0Z"
					className="shape-fill"
				></path>
			</svg>
		</div>
	);
}
