import { useState } from "react";
import "./Profile";
import Profile from "./Profile";
import Usersarray from "./Userarray";

function App() {
  const getlocation = () => {
    let loc = navigator.geolocation.getCurrentPosition((e) => {
      console.log(e.coords.latitude + " " + e.coords.longitude);
    });
    console.log(loc);
  };

  const [users, setUsers] = useState([...Usersarray]);

  return (
    <div className="App">
      {users.map((object, index) => {
        return (
          <Profile
            key={index}
            id={index}
            imgsrc={Usersarray[index].imgsrc}
            name={Usersarray[index].name}
            age={Usersarray[index].age}
            src={Usersarray[index].addr}
            gender={Usersarray[index].gender}
          />
        );
      })}
    </div>
  );
}

export default App;
