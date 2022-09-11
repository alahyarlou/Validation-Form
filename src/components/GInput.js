export const GInput = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <div
              key={item.id}
              className={`flex ${
                item.type === "checkbox"
                  ? "flex items-center"
                  : "flex-col gap-2"
              }`}
            >
              <label
                htmlFor={item.id}
                className={`${
                  item.type === "checkbox"
                    ? "mr-2 text-sm font-medium text-gray-900"
                    : "text-gray-500"
                }`}
              >
                {item.label}
              </label>
              <input
                type={item.type}
                name={item.name}
                id={item.id}
                className={`${
                  item.type === "checkbox"
                    ? "w-4 h-4 text-blue-600 bg-gray-100 rounded-md border-none"
                    : "border px-2 py-3 rounded-md placeholder:font-light focus:outline-indigo-500"
                }  ${item.className}`}
                placeholder={item.caption}
                onChange={item.onChange}
              />
            </div>
          </>
        );
      })}
    </>
  );
};
