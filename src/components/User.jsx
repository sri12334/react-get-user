import PropTypes from "prop-types";
import './User.css'
import { FaMapMarkerAlt } from "react-icons/fa"; 
import { FaPhoneAlt } from "react-icons/fa";

const User = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>📧  {user.email}</p>
      <p><FaPhoneAlt />  {user.phone}</p>
      <p>🌐Website: {user.website}</p>

      <div className="address">
        <h3>Address:</h3>
        <p>Street: {user.address.street}</p>
        <p>Suite: {user.address.suite}</p>
        <p>City: {user.address.city}</p>
        <p>Zip code: {user.address.zipcode}</p>
      </div>

      <div>
        <h3>Company:</h3>
        <p>Name: {user.company.name}</p>
        <p>Catch Phrase: {user.company.catchPhrase}</p>
        <p>Business: {user.company.bs}</p>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
    }).isRequired,
    company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        business: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default User;