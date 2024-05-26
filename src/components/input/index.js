export const Input = ({ label, placeholder, type, ...rest }) => {
	return (
		<label className="flex flex-col gap-1 text-[#1f1e1e] text-sm">
			{label}
			<input
				type={type}
				placeholder={placeholder}
				className="border p-1 text-sm rounded-md px-2 focus:outline"
				{...rest}
			/>
		</label>
	);
};
