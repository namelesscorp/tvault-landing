const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			className="w-full h-[45px] rounded-[10px] bg-white border-1 border-[#E6E7EB] focus-visible:outline-none focus:border-[#3A73ED] px-[20px] font-inter font-light text-[16px] tracking-[-0.05em] text-black/80 placeholder:text-black/60 transition-all duration-300"
			{...props}
		/>
	);
};

export { Input };
