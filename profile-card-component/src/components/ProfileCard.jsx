/* eslint-disable react/prop-types */

function ProfileCard({
  name,
  age,
  bio,
  occupation,
  hobby,
  image,
  location,
  index,
}) {
  return (
    <div className="card" key={index}>
      <img src={image} alt="" className="image" />
      <div className="bio-content">
        <h1 className="name">{name}</h1>
        <p className="bio">{bio}</p>
        <p className="age">
          <span className="label">Age:</span> {age}
        </p>
        <p className="occupation">
          <span className="label">Occupation:</span> {occupation}
        </p>
        <p className="hobby">
          <span className="label">Hobby:</span> {hobby}
        </p>
        <p className="location">
          <span className="label">Location:</span> {location}
        </p>
      </div>
    </div>
  );
}
export default ProfileCard;
