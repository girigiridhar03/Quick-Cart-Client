export const CustomHeader = ({ title, description }) => {
  return (
    <div className="w-full" >
      <h2 className="text-[1.9rem] font-bold" >{title}</h2>
      <p className="text-[#8A8A8A] text-[0.9rem] font-semibold" >{description}</p>
    </div>
  );
};
