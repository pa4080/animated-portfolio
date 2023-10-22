import Link from "next/link";
import "./framer-motion.scss";
import { RiArrowGoBackFill } from "react-icons/ri";

interface Props {
	children: React.ReactNode;
}

const FramerMotionLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="h-full">
			<div className="sticky top-0">
				<div className="absolute top-8 right-8">
					<Link className="text-inherit hover:text-inherit" href={`/framer-motion-test`}>
						<div className="rounded-md bg-slate-600 p-2 hover:invert text-2xl">
							<RiArrowGoBackFill />
						</div>
					</Link>
				</div>
			</div>
			{children}
		</div>
	);
};

export default FramerMotionLayout;
