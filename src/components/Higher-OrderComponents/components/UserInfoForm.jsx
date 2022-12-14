import React from "react";
import withEditableResource from "./withEditableUser";

export const UserInfoForm = withEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age } = user || {};
    return user ? (
      <>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
        <label>Age:</label>
        <input
          value={age}
          onChange={(e) => onChangeUser({ age: e.target.value })}
        />
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  "users/1",
  "user"
);
