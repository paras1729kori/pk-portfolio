interface PillProps {
  pill: string;
}

const Pill = ({ pill }: PillProps) => {
  return (
    <div className="w-fit text-xs font-bold text-teal-300 bg-teal-400/10 rounded-full px-2 py-1 mr-1.5 mt-2">
      {pill}
    </div>
  );
};

export default Pill;
