const Avatar = ({ imgUrl, alt }) => {
  return (
    <>
      <div className="avatar">
        <div className="w-32 h-auto rounded-full">
          <img src={imgUrl} alt={alt} />
        </div>
      </div>
    </>
  );
};
export default Avatar;
