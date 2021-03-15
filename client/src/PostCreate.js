import React, { useState } from 'react'
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        //it requires a change in C:\Windows\System32\Drivers\etc\hosts or it´s equivalent in macOS
        //you have to add 127.0.0.1 posts.com this will trick Windows
        await axios.post('http://posts.com/create', {
            title
        });

        setTitle('');

        window.location.reload();
    }

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input 
                    value={title} 
                    onChange={ e=> setTitle(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>;
}