const Container = ({ children, title }) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className="relative">
      <h2 className="font-black text-lg mb-2">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {childrenArray.map((child, index) => {
          const hasTitle =
            child.type.title &&
            typeof child.type.title === "string" &&
            child.type.title.trim() !== "";

          return (
            <div
              key={index}
              className="border border-black p-4 rounded hover:shadow-lg transition ease-in-out duration-300"
            >
              {hasTitle && (
                <h2 className="font-semibold mb-4 pb-2 border-b border-black">
                  {child.type.title}
                </h2>
              )}
              <div className="w-content">{child}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
