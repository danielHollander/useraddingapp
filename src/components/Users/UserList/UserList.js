import React from 'react';
import Card from '../../UI/Card/Card.js';
import User from '../Users/User.js';

import classes from './UserList.module.css';

function UserList(props) {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => <User key={user.id} id={user.id} age={user.age} name={user.username} onDelete={props.onDeleteUser} ></User>)}
            </ul>
        </Card >
    );
}

export default UserList;
