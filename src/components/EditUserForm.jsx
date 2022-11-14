import React from "react";

const EditUserForm = props => {
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
            value={props.currentUser.first_name}
          />
        </div>
        <div className={"form-group"}>
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            className={"form-control"}
            id="last_name"
            name="last_name"
            value={props.currentUser.last_name}
          />
        </div>
        <button type="submit" className={"bg-green-400 text-white text-right px-4 py-2 rounded-md mt-4"}>
          Edit user
        </button>
      </form>
    </div>
  )
}

export default EditUserForm;