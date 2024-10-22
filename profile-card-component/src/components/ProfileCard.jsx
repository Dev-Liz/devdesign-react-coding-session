function ProfileCard({ name, age, location, image, bio, occupation, hobbies }) {
  return (
    <div className="card">
      <img src={image} alt="" className="image" />
      <div className="bio-content">
        <h1 className="name">{name}</h1>
        <p className="age">{age}</p>
        <p className="bio">{bio ? "This is my bio" : ""}</p>
        <p className="occupation">{occupation}</p>
        <p className="hobbies">{hobbies}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
