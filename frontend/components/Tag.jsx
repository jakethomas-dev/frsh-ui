const Tag = ({ text, red, green, yellow }) => {
  return (
    <div className="border-black border rounded-full dark:border-white dark:bg-zinc-800 dark:text-white">
      <div className="flex items-center px-4 py-1">
        {red && <div className="w-2 h-2 rounded-full bg-red-500 mr-2" />}
        {green && <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />}
        {yellow && <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />}
        <p className="text-sm font-semibold capitalize mx-auto">{text}</p>
      </div>
    </div>
  );
};

export default Tag;
