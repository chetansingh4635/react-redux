// import { fetchUsers, userDeleted } from "./usersSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { getUsersList } from "../redux/actions";

export function UserList() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.loading);
console.log('users', users)
  useEffect(()=>{
    dispatch(getUsersList())
  }, [])
  const handleDelete = (id) => {
    // dispatch(userDeleted({ id }));
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD User app</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button
            onClick={() => dispatch(getUsersList())}
            className="button-primary"
          >
            Load users
          </button>
        </div>
        <div className="two columns">
          <Link to="/add-user">
            <button className="button-primary">Add user</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.length &&
                users?.map(({ id, name, email }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-user/${id}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
