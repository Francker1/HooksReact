import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    const {user} = useContext(UserContext);
    console.log(user)

    return (
        <div>
            <h1 className='mt-5'>HomeScreen</h1>
            <hr />

            <pre className="m-5">
                { JSON.stringify(user, null, 3) }
            </pre>
        </div>
    )
}
