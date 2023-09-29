import { useEffect, useState } from "react";
import "./Dashboard.css";
import Profile from "./Components/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import BarLoader from "react-spinners/BarLoader";

const Dashboard = () => {
  const [uname, setuname] = useState("");
  const [uarr, setuarr] = useState([]);
  const [Userarray, setUserarray] = useState([]);
  const [loading, setloading] = useState(false);

  const handlechange = (e) => {
    setuname(e.target.value);
  };

  useEffect(() => {
    (async () => {
      try {
        const req = await axios.get(`http://localhost:8000/users`);
        const data = await req.data;
        setUserarray((prev) => {
          return [...data];
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const fetchdata = () => {
    setTimeout(async () => {
      try {
        const req = await axios.get(`http://localhost:8000/users`);
        const data = await req.data;
        setuarr((prev) => {
          return [...data];
        });
      } catch (error) {
        console.log(error);
      }

      setloading(false);
    }, 2000);

    setloading(true);
  };

  const searchprofile = (str) => {
    let validuser = false;

    if (str === "") {
      toast("Enter a name");
      return;
    }
    for (let i = 0; i < Userarray.length; i++) {
      if (Userarray[i].name === str.toLowerCase()) {
        validuser = true;
        break;
      }
    }

    if (!validuser) {
      toast("user not found");
      return;
    }

    setTimeout(() => {
      setuarr((prev) => {
        return Userarray.filter((ele, index) => {
          return ele.name === str.toLowerCase();
        });
      });
      setloading(false);
    }, 2000);
    setuname("");
    setloading(true);
  };

  return (
    <div className="dashboard">
      <ToastContainer autoClose={2000} />
      <div className="searchbar">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            value={uname}
            onChange={handlechange}
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success"
            onClick={(e) => {
              e.preventDefault();
              searchprofile(uname);
            }}
          >
            Search
          </button>
        </form>
        <button className="btn btn-outline-success" onClick={fetchdata}>
          all profiles
        </button>
      </div>
      <div className="loading">
        {loading ? <BarLoader color="#ffffff" /> : null}
      </div>
      <div className="data">
        <div className="profile">
          {uarr.map((ele, index) => {
            return (
              <Profile
                key={index}
                details={uarr[index].details}
                imgsrc={uarr[index].imgsrc}
                name={uarr[index].name}
                age={uarr[index].age}
                src={uarr[index].addr}
                gender={uarr[index].gender}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
