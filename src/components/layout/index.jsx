import { Header } from "../navbar";
export const Layout = ({ children }) => {
	return (
		<div className="flex flex-col w-full h-screen">
			<Header />
			<div className="flex w-full h-screen">
				<section className="w-[100%]">{children}</section>
			</div>
		</div>
	);
};
