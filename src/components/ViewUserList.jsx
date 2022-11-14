import React from "react";

const ViewUserList = props => {
  let users = props.usersList;

  let userList = users.map(user => {
    return (
      <tr key={user.id} className={"border-b-[1px] border-b-green-400"}>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>
          <button
            className={"bg-orange-400 text-white text-right px-4 py-2 rounded-md my-3 mr-2"}
            value={user.id}
            onClick={props.handleEditUser}
          >
            Edit
          </button>
          <button
            className={"bg-red-400 text-white px-4 py-2 rounded-md"}
            value={user.id}
            onClick={props.handleDeleteUser}
          >
            Delete
          </button>
        </td>
      </tr>
    )
  })

  return (
    <div>
      <h2>View users</h2>
      <table>
        <thead className={"border-b-2 border-b-green-400 text-left"}>
          <tr>
            <th className={"w-[150px]"}>First name</th>
            <th className={"w-[150px]"}>Last name</th>
            <th className={"w-[150px]"}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList}
        </tbody>
      </table>
    </div>
  )
}

export default ViewUserList;