import React from "react";
import UserList from "../components/UserList";
function User(){
    var Users=[
        {
            name:"shalini",
            id:"u1",
            place:"3",
            image:"https://scontent.fdel8-1.fna.fbcdn.net/v/t1.6435-9/141536347_110740790984156_4164337694945026300_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=TcU-vqhcB8AAX-NwLqX&tn=dMPrjA5rozDG-hIm&_nc_ht=scontent.fdel8-1.fna&oh=5c05567450d1f3b05cc13fbcacad97ba&oe=6130BAA4",
        },
        {
            name:"shalini",
            id:"02",
            place:"1",
            image:"https://scontent.fdel8-1.fna.fbcdn.net/v/t1.6435-9/141536347_110740790984156_4164337694945026300_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=TcU-vqhcB8AAX-NwLqX&tn=dMPrjA5rozDG-hIm&_nc_ht=scontent.fdel8-1.fna&oh=5c05567450d1f3b05cc13fbcacad97ba&oe=6130BAA4",
        }
    ]
    return (
        <div>
    <UserList item={Users}></UserList>
    </div>
    )
}
export default User;