import { PillProps } from "@/interfaces";

const Pill = ({ label, isActive, onClick }: PillProps) => {
  return (
    <button
  onClick={onClick}
  className={`px-4 py-1.5 rounded-full border text-sm ${
    isActive
      ? "bg-[#34967C] text-white border-[#34967C]"
      : "bg-white text-gray-800 border-gray-300"
  } hover:bg-[#34969C] transition`}
>
  {label}
</button>

  );
};

export default Pill;