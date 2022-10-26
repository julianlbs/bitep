import Image from "next/image";
import GetPaidImage from "../../public/undraw_to_the_moon_re_q21i.svg";

export default function GetPaid() {
	return (
		<section className="container">
			<div className="flex gap-2 justify-center items-center mb-12">
				<Image
					src="/rocket-svgrepo-com.svg"
					width={50}
					height={50}
					alt="Rocket icon"
				/>
				<h3 className="text-primary uppercase ">
					Get Paid for Playing it Forward
				</h3>
			</div>
			<div className="flex flex-wrap justify-center gap-10">
				<div className="w-80 h-80 relative">
					<Image src={GetPaidImage} fill alt="" />
				</div>
				<div className="max-w-md flex flex-col gap-6">
					<div className=" card bg-base-100 shadow p-4">
						<div className="flex gap-2 items-center">
							<Image
								src="/user-svgrepo-com.svg"
								height={24}
								width={24}
								alt=""
							/>
							<h4 className="">Bring your customer to us</h4>
						</div>
						<p>
							Sign up as a partner (it&apos;s free) and you&apos;ll get a unique
							URL to invite your clients
						</p>
					</div>

					<div className="card bg-base-100 shadow p-4">
						<div className="flex gap-2 items-center">
							<Image
								src="/money-svgrepo-com.svg"
								height={24}
								width={24}
								alt=""
							/>
							<h4>Get Rewarded</h4>
						</div>
						<p>
							Once your referrals pay for their account, your earn a{" "}
							<strong className="text-primary">15% lifetime cut</strong> of
							every transaction
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
