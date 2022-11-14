import React, {useState, useEffect} from "react";

const EditUserForm = props => {
  const [editedUser, setEditedUser] = useState(props.currentUser);
  console.log(props.currentUser);

  const handleOnChange = e => {
    props.setEditUser({...editedUser, [e.target.name]: e.target.value});
  }

  useEffect(() => {
    setEditedUser(props.currentUser);
  }, [editedUser, props.currentUser]);

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
            required={true}
            onChange={handleOnChange}
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
            required={true}
            onChange={handleOnChange}
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