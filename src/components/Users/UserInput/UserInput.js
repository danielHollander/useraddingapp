import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Modal from '../../UI/Modal/Modal';
import Card from '../../UI/Card/Card';

import classes from './UserInput.module.css';

function UserInput(props) {
    const [error, setError] = useState();
    const [enteredUserName, setUserName] = useState('');
    const [enteredAge, setAge] = useState('');

    const validateInput = () => {
        if (enteredUserName.trim().length === 0
            || enteredAge === 0) {
            setError({
                title: 'Invalid input',
                message: `There are empty fields in either age or name. Please enter a valid name and age which are non-empty values`,
            });
            return false;
        }
        if (enteredAge < 0) {
            setError({
                title: 'Invalid age',
                message: `Age found is ${enteredAge}. Please enter a valid age (>0).`,
            })
            return false;
        }
        if (enteredUserName.match(/^[A-Za-z]+$/) == null) {
            setError({
                title: 'Invalid name',
                message: `name found is ${enteredUserName}. Please enter a valid name in english`,
            })
            return false;
        }
        if (enteredUserName.match(/^[0-9]+$/) == null) {
            setError({
                title: 'Invalid name',
                message: `Age found is ${enteredAge}. Please enter a valid age which containes only numbers`,
            })
            return false;
        }
        return true;
    }

    const usernameChangeHandler = value => {
        setUserName(value);
    }

    const ageChangeHandler = value => {
        setAge(value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(enteredUserName);
        console.log(enteredAge);
        if (validateInput())
            props.onAdduser({ username: enteredUserName, age: enteredAge })

    }
    const errorHandler = () => {
        setError(null)
    }
    return (
        <Card className={classes.input}>
            {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler}></Modal>}
            <form onSubmit={formSubmitHandler}>
                <Input type="text" label="Username" id="username" htmlFor="username" change={usernameChangeHandler}></Input>
                <Input type="number" label="Age (Years)" id="age" htmlFor="age" change={ageChangeHandler}></Input>
                <Button type="submit">Add User</Button>
            </form >
        </Card>
    );
}

export default UserInput;
