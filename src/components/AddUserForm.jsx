import React from "react";

const AddUserForm = props => {
  return (
    <div>
      <h2>Add user</h2>
      <form onSubmit={props.handleAddUser}>
        <div className={"form-group"}>
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            className={"form-control"}
            id="first_name"
            name="first_name"
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
            required={true}
          />
        </div>
        <button type="submit" className={"bg-green-400 text-white text-right px-4 py-2 rounded-md mt-4"}>
          Add user
        </button>
      </form>
    </div>
  );
}

export default AddUserForm;