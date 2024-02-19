const Display = ({ display }) => {
  return (
    <div className="bg-display text-text-primary text-4xl rounded-lg p-6">
      <span id="display" className="float-right tracking-widest uppercase">
        {display}
      </span>
    </div>
  );
};

export default Display;
