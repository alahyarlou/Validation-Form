export const GInput = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id} className="flex flex-col gap-y-2">
            <label htmlFor={item.id}>{item.label}</label>
            <input
              type={item.type}
              name={item.name}
              id={item.id}
              className={`border px-2 py-3 rounded-md placeholder:font-light focus:outline-indigo-500 ${item.className}`}
              placeholder={item.caption}
            />
          </div>
        );
      })}
    </>
  );
};
