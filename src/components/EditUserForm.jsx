import React, {useState, useEffect} from "react";

const EditUserForm = props => {
  const [editedUser, setEditedUser] = useState({
    id: props.currentUser.id,
    first_name: props.currentUser.first_name,
    last_name: props.currentUser.last_name,
  });

  const handleChangeUser = e => {
    setEditedUser(
      {
        ...editedUser,
        [e.target.name]: e.target.value
      }
    )
  }
  console.log(props.currentUser);

  useEffect(() => {
  }, [editedUser.id, editedUser.first_name, editedUser.last_name]);

  return (
    <div>
      <h2>Edit user</h2>
      <form onSubmit={props.handleEditUser}>
        <div className={"form-group"}>
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            className={"form-control"}
            id="first_name"
            name="first_name"
            value={editedUser.first_name}
            onChange={handleChangeUser}
            required={true}
          />
        </div>
        <div className={"form-group"}>
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            className={"form-control"}
            id="last_name"
            name="last_name"
            value={editedUser.last_name}
            onChange={handleChangeUser}
            required={true}
          />
        </div>
        <button type="submit" className={"bg-green-400 text-white text-right px-4 py-2 rounded-md mt-4 mr-2"} value={props.currentUser.id}>
          Edit user
        </button>
        <button onClick={props.handleCancel} className={"bg-red-400 text-white px-4 py-2 rounded-md"}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default EditUserForm;