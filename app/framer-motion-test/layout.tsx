import "./framer-motion.scss";

interface Props {
	children: React.ReactNode;
}

const FramerMotionLayout: React.FC<Props> = ({ children }) => {
	return <div className="h-full">{children}</div>;
};

export default FramerMotionLayout;
