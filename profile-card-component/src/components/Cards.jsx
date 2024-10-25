import ProfileCard from "./ProfileCard";

function Cards() {
  const students = [
    {
      name: "Julie Johnson",
      age: 27,
      location: "Nigeria",
      image: "../image-one.jpg",
      bio: "DevOps and Blockchain Expert",
      occupation: "Software Developer",
      hobby: "gaming",
    },
    {
      name: "Liam Phimn",
      age: 25,
      location: "Uganda",
      image: "../image-two.jpg",
      bio: "A writer of Fiction",
      occupation: "Writer",
      hobby: "Reading",
    },
    {
      name: "Yash Agarwal",
      age: 21,
      location: "India",
      image: "../image-three.jpg",
      occupation: "Architect",
      hobby: "ski diving",
    },
  ];

  return (
    <div className="card-container">
      {students.map((student, index) => (
        <ProfileCard
          name={student.name}
          age={student.age}
          location={student.location}
          image={student.image}
          bio={student.bio ? student.bio : "No bio"}
          occupation={student.occupation}
          hobby={student.hobby}
          index={index}
        />
      ))}
    </div>
  );
}

export default Cards;
