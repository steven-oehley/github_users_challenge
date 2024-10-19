const Button = ({ label, link }) => {
  return (
    <a href={link} target="_blank" className="btn btn-outline btn-accent">
      {label}
    </a>
  );
};
export default Button;
