import ProfileCard from "./ProfileCard";

function Cards() {
  const students = [
    {
      name: "Julie Johnson",
      age: 27,
      location: "Nigeria",
      image: "../image-one.jpg",
      bio: true,
      occupation: "Software Developer",
      hobbies: "gaming",
    },
    {
      name: "Liam Phimn",
      age: 25,
      location: "Uganda",
      image: "../image-two.jpg",
      bio: false,
      occupation: "Writer",
      hobbies: "Reading",
    },
    {
      name: "Yash Agarwal",
      age: 21,
      location: "India",
      image: "../image-three.jpg",
      bio: true,
      occupation: "Architect",
      hobbies: "ski diving",
    },
  ];

  return (
    <div className="card-container">
      <ProfileCard students={students} />
    </div>
  );
}

export default Cards;
