import React from 'react';


function User(props) {
    const deleteUser = () => {
        props.onDelete(props.id);
    }

    return (
        <li onClick={deleteUser}>{`${props.name} (${props.age} years old)`}</li>
    );
}

export default User;
