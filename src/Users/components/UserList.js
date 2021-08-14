import React from "react";
import UserItem from "./UserItem";
function UserList(props) {
  if (props.length == 0) {
    return <div className="center"><h2>No Items Found</h2></div>;
  } else {
    
    return <ul>{props.item.map(function (user) {
          return <UserItem
            name={user.name}
            image={user.image}
            id={user.id}
            placeCount={user.place}
            key={user.id}
          ></UserItem>
      })}
      </ul>
  }
}

export default UserList;
