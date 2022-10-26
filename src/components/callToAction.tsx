import Image from "next/image";
import MainImage from "../../public/undraw_outer_space_re_u9vd.svg";

export default function CallToAction() {
	return (
		<section className="container flex flex-wrap justify-center items-center  bg-[url(../../public/symbol-scatter-3-haikei.svg)] bg-center">
			<div className="max-w-md w-full md:w-[50%] flex flex-col gap-3 bg-white p-8 bg-opacity-[85%] rounded">
				<h3 className="text-secondary-content">
					Bring your customers to us and get{" "}
					<span className="font-bold text-primary">
						15% of their payments lifetime
					</span>
				</h3>
				<button className="btn btn-primary self-start px-9">Sign Up Now</button>
			</div>
			<div className="hidden md:block sm:w-[65%] md:w-[50%]">
				<div className="w-full h-[260px] md:w-[320px] md:h-[320px]  mx-auto relative">
					<Image src={MainImage} fill alt="" />
				</div>
			</div>
		</section>
	);
}
