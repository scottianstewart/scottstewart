const ThemeButton = ({ children, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`theme-button ${active && "theme-button--active"}`}
    >
      {children}
    </button>
  );
};

export default ThemeButton;
