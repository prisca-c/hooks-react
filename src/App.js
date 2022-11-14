import './App.css';
import React, {useEffect, useState} from "react";
import AddUserForm from "./components/AddUserForm";
import ViewUserList from "./components/ViewUserList";
import EditUserForm from "./components/EditUserForm";

function App() {
  const [users, setUsers] = useState(
    [
      {
        id: 1,
        first_name: "John",
        last_name: "Doe",
      }
  ]);

  const [editUser, setEditUser] = useState({
    id: null,
    first_name: "",
    last_name: ""
  })

  const [switchForm, setSwitchForm] = useState(false);

  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers(
      [...users, {
          id:
            users.length > 0
              ? users[users.length - 1].id + 1
              : 1,
          first_name: e.target.first_name.value,
          last_name: e.target.last_name.value
        }]);
  }

  const handleDeleteUser = (e) => {
    e.preventDefault();
    setUsers(users.filter(user => user.id !== parseInt(e.target.value)));
  }

  const handleEditEvents = (e) => {
    setSwitchForm(true)
    currentEditUser(e)
  }

  const currentEditUser = (e) => {
    setEditUser(
      users.find(user => user.id === parseInt(e.target.value))
    );
  }

  useEffect(() => {}, [editUser.id, editUser.first_name, editUser.last_name]);

  const handleEditUser = (e) => {
    e.preventDefault();
    setUsers(
      users.map(user => {
        if (user.id === editUser.id) {
          return {
            ...user,
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value
          }
        }
        return user;
      }))
    setSwitchForm(false);
  }

  return (
    <div className="App">
      <h2 className={"text-center"}>CRUD App with Hooks</h2>
      <div className=" flex justify-center gap-4 mt-6">
        {
          !switchForm
            ? <AddUserForm handleAddUser={handleAddUser}/>
            : <EditUserForm
              handleEditUser={handleEditUser}
              setSwitchForm={() => setSwitchForm}
              setEditUser={setEditUser}
              currentUser={editUser}
              handleCancel={() => setSwitchForm(false)}
            />
        }
        <ViewUserList usersList={users} handleEditUser={handleEditEvents} handleDeleteUser={handleDeleteUser}/>
      </div>
    </div>
  );
}

export default App;
