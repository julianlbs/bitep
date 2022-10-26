import Image from "next/image";

export default function WhoIsFor() {
	return (
		<section>
			<div className="flex justify-center items-center gap-5 mb-20 bg-[#009afe] py-7 relative z-0">
				<div>
					<h3 className="text-center text-primary-content uppercase">
						Find Out if You&apos;d Make a Great Partner
					</h3>
					<p className="text-center text-secondary-content">
						This is a referral program designed for Web Developers and Web
						Development Agencies
					</p>
				</div>
				<Image
					src="/undraw_relaunch_day_902d.svg"
					height={80}
					width={80}
					alt=""
				/>
			</div>
			<div className="flex flex-col items-center gap-6">
				<div className="self-end overflow-hidden flex flex-wrap justify-center p-2 gap-2 w-[348px] sm:w-[500px] lg:w-[800px] bg-base-100 shadow">
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
						<h4 className="leading-tight self-end text-primary">
							Web Developer
						</h4>
						<p className="max-w-md text-end">
							Show off your industry expertise by referring to your clients and
							fellow Web Developers. You&apos;ll be able to generate new leads
							and open up a whole new revenue stream for your business
						</p>
					</div>
				</div>
				<div className="self-start overflow-hidden flex flex-wrap justify-center p-2 gap-2 w-[348px] sm:w-[500px] lg:w-[800px] bg-base-100 shadow">
					<div className="flex flex-col">
						<h4 className="text-primary leading-tight">
							Web Development Agencies
						</h4>
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
