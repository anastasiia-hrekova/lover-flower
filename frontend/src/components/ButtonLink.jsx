const ButtonLink = ({ text, onNavigate }) => {
  return (
    <button className="button-link" onClick={onNavigate}>
      {text}
    </button>
  );
};

export default ButtonLink;
