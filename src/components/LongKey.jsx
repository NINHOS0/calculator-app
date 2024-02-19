const LongKey = ({ children, clickHandler }) => {
  return (
    <div
      className={`col-span-2 ${children === "reset" ? "bg-key-shadow-secondary" : "bg-key-shadow-tertiary"} pb-1 rounded-md`}
      onClick={() => clickHandler(children)}
    >
      <div
        className={`col-span-2 ${
          children === "reset" ? "bg-key-secondary hover:bg-key-hover-secondary text-text-tertiary" : "bg-key-tertiary hover:bg-key-hover-tertiary text-text-quaternary"
        } text-xl pt-4 pb-3 sm:text-2xl sm:pt-3 sm:pb-2 h-full rounded-md grid place-items-center cursor-pointer uppercase transition-all`}
      >
        {children}
      </div>
    </div>
  );
};

export default LongKey;
