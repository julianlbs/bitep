import React from "react";
import Slider from "react-slick";
import Avatar from "./avatar";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Testimonials() {
	return (
		<section className=" bg-[#0f62ff] p-5">
			<div className=" mb-12">
				<h3 className="text-center text-primary-content uppercase">
					Testimonials
				</h3>
				<p className="text-center text-secondary">
					What our clients are saying
				</p>
			</div>

			<div className="w-72 sm:w-[450px] md:w-[650px] mx-auto pb-10">
				<Slider
					dots={true}
					infinite={true}
					speed={500}
					slidesToShow={1}
					slidesToScroll={1}
					className="none"
					// prevArrow={<PreviousBtn />}
					// nextArrow={<NextBtn />}
				>
					<div className="!flex !flex-col !gap-5 !justify-center !items-center !pl-16 !pr-12">
						<Avatar />
						<p className="text-center text-white">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
							ullam enim maiores illo cumque porro doloremque dolorum quisquam
							vitae recusandae ad nesciunt, numquam animi dolore odio, eius
							explicabo, laudantium repudiandae blanditiis sequi suscipit
							facere. Aut cupiditate vero architecto repellendus aperiam magnam
							quod soluta ex unde, eligendi neque sunt, non ea.
						</p>
						<div className="flex flex-col items-center">
							<h5 className="text-accent font-bold uppercase">John Stamos</h5>
							<span className="text-sm text-secondary self-end">
								Backend Developer
							</span>
						</div>
					</div>

					<div className="!flex !flex-col !gap-5 !justify-center !items-center !px-12">
						<Avatar />
						<p className="text-center text-white">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
							ullam enim maiores illo cumque porro doloremque dolorum quisquam
							vitae recusandae ad nesciunt, numquam animi dolore odio, eius
							explicabo, laudantium repudiandae blanditiis sequi suscipit
							facere. Aut cupiditate vero architecto repellendus aperiam magnam
							quod soluta ex unde, eligendi neque sunt, non ea.
						</p>
						<div className="flex flex-col items-center">
							<h5 className="text-accent font-bold uppercase">John Stamos</h5>
							<span className="text-sm text-secondary self-end">
								Web Designer
							</span>
						</div>
					</div>
				</Slider>
			</div>
		</section>
	);
}

const PreviousBtn: React.FC = (props: React.ComponentPropsWithRef<"div">) => {
	const { className, onClick } = props;
	return (
		<IconContext.Provider value={{ className: "text-primary" }}>
			<div className={className} onClick={onClick}>
				<MdOutlineKeyboardArrowLeft style={{ fontSize: "44px" }} />
			</div>
		</IconContext.Provider>
	);
};

const NextBtn: React.FC = (props: React.ComponentPropsWithRef<"div">) => {
	const { className, onClick } = props;
	return (
		<IconContext.Provider value={{ className: "text-primary" }}>
			<div className={className} onClick={onClick}>
				<MdOutlineKeyboardArrowRight style={{ fontSize: "44px" }} />
			</div>
		</IconContext.Provider>
	);
};
