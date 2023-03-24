const Module = ({ title, children, className, columnSpan }) => {
  return (
    <div
      className={`${className && className} module`}
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
