import ProfileCard from "./components/ProfileCard";

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

function App() {
  return (
    <div className="App">
      {students.map((student) => (
        <ProfileCard
          name={student.name}
          age={student.age}
          location={student.location}
          image={student.image}
          bio={student.bio}
          occupation={student.occupation}
          hobbies={student.hobbies}
        />
      ))}
    </div>
  );
}

export default App;
