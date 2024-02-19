const Key = ({ children, clickHandler }) => {
  return (
    <div
      className={`${children === "del" ? "text-xl bg-key-shadow-secondary" : "bg-key-shadow-primary"} pb-1 rounded-md`}
      onClick={() => clickHandler(children)}
    >
      <div
        className={`rounded-md grid place-items-center ${
          children === "del" ? "text-xl sm:text-2xl bg-key-secondary hover:bg-key-hover-secondary text-text-tertiary uppercase" : "text-3xl sm:text-4xl bg-key-primary hover:bg-key-hover-primary text-text-secondary"
        } pt-4 pb-2 h-full sm:pt-2 sm:pb-0.5 cursor-pointer transition-all`}
      >
        {children}
      </div>
    </div>
  );
};

export default Key;
