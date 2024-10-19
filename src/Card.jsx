import Button from "./Button";

const Card = ({ children, label, user, link }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl ring-2 ring-accent p-4">
      <figure>{children}</figure>
      <div className="card-body">
        <h2 className="card-title">{user}</h2>

        <div className="card-actions justify-end">
          <Button label={label} link={link} />
        </div>
      </div>
    </div>
  );
};
export default Card;
