const Module = ({ title, children, columnSpan }) => {
  return (
    <div
      className="module"
      style={columnSpan && { gridColumn: `1 / ${1 + columnSpan}` }}
    >
      <div className="module__title">
        <p>{title}</p>
      </div>
      <div className="module__children">{children}</div>
    </div>
  );
};

export default Module;
