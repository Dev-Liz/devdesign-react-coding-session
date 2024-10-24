/* eslint-disable react/prop-types */

function ProfileCard({ students }) {
  return (
    <>
      {students.map((student, index) => (
        <div key={index} className="card">
          <img src={student.image} alt="" className="image" />
          <div className="bio-content">
            <h1 className="name">{student.name}</h1>
            <p className="age">{student.age}</p>
            <p className="bio">{student.bio ? "This is my bio" : ""}</p>
            <p className="occupation">{student.occupation}</p>
            <p className="hobbies">{student.hobbies}</p>
            <p className="location">{student.location}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProfileCard;
