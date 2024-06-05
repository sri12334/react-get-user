import { useState, useEffect } from "react";
import Loading from "./Loading";
import User from "./User";
import getUser from "../apis/getUser";
import "./UserContainer.css";

const UserContainer = () => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pagination, setPagination] = useState({
    previous: true,
    next: false,
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(id);
        setUser(userData);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  useEffect(() => {
    setPagination({
        previous: id <= 1,
        next: id >= 10,
      });
    }, [id]);

  const clickHandler = (change) => {
    if (change == 'previous') {
      setId((prevId) => prevId - 1);
    } else {
      setId((prevId) => prevId + 1);
    }
  };

  return (
    <div className="container">
      {loading && <Loading />}
      {user && <User user={user} />}
      {error && <div>Error</div>}

        <div className="buttons">
      <button className="previous-btn"
        onClick={() => clickHandler("previous")}
        disabled={pagination.previous}
      >
        Previous
      </button>
      <button className="next-btn"
      onClick={() => clickHandler("next")} disabled={pagination.next}>
        Next
      </button>
      </div>
    </div>
  );
};

export default UserContainer;

