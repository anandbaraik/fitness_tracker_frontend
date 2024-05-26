import { ThreeCircles } from 'react-loader-spinner'
export const Loader = () => {
	return (
		<div className="flex justify-center items-center h-[70vh]">
			<ThreeCircles
				visible={true}
				height="100"
				width="100"
				color="#2563eb"
				ariaLabel="three-circles-loading"
				wrapperStyle={{}}
				wrapperClass=""
				/>
		</div>
	);
};
