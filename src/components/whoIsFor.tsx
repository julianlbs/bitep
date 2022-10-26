import Image from "next/image";

export default function WhoIsFor() {
	return (
		<section className="container">
			<div className="mb-20">
				<h3 className="text-center text-primary uppercase">
					Find Out if You&apos;d Make a Great Partner
				</h3>
				<p className="text-center text-secondary">
					This is a referral program designed for Web Developers and Web
					Development Agencies
				</p>
			</div>
			<div className="flex flex-col items-center gap-6">
				<div className="overflow-hidden flex flex-wrap justify-center p-2 gap-2">
					<div>
						<Image
							src="/web-developer.svg"
							height={260}
							width={260}
							alt="Web Developer"
							object-fit="cover"
						/>
					</div>
					<div className="flex flex-col">
						<h4 className="leading-tight self-end">Web Developer</h4>
						<p className="max-w-md text-end">
							Show off your industry expertise by referring to your clients and
							fellow Web Developers. You&apos;ll be able to generate new leads
							and open up a whole new revenue stream for your business
						</p>
					</div>
				</div>
				<div className="overflow-hidden flex flex-wrap justify-center p-2 gap-2">
					<div className="flex flex-col">
						<h4 className=" leading-tight">Web Development Agencies</h4>
						<p className="max-w-md">
							Show off your industry expertise by referring to your clients and
							fellow Web Developers. You&apos;ll be able to generate new leads
							and open up a whole new revenue stream for your business
						</p>
					</div>
					<Image
						src="/web-development-agency.svg"
						height={260}
						width={260}
						alt="Web Developer"
						object-fit="cover"
					/>
				</div>
			</div>
		</section>
	);
}
