import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

export const AddUser = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMobile = (e) => setMobile(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);

  const user = useSelector((state) => state.user.users.find((user) => user.id == params.id));

  useEffect(() => {
    if (props.isEdit && user) {
      setName(user.name);
      setEmail(user.email);
      setMobile(user.mobile);
      setAddress(user.address);
    }
  }, [props.isEdit]);

  const handleClick = () => {
    if (name && email && mobile && address) {
      // dispatch(
      //   userAdded({
      //     id: usersAmount + 1,
      //     name,
      //     email,
      //   })
      // );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>{props.isEdit ? 'Edit User' : 'Add user'}</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          <label htmlFor="mobileInput">Mobile Number</label>
          <input
            className="u-full-width"
            type="number"
            placeholder="9887767752"
            id="mobileInput"
            onChange={handleMobile}
            value={mobile}
          />
          <label htmlFor="handleAddress">Address</label>
          <textarea
            type="number"
            placeholder="9887767752"
            id="addressInput"
            onChange={handleAddress}
            value={address}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            {props.isEdit ? 'Edit User' : 'Add User'}
          </button>
        </div>
      </div>
    </div>
  );
}
