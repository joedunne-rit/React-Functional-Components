const React = require('react');
const {useState} = React; //const useState = React.useState;
const ReactDOM = require('react-dom');

const HelloUser = (props) => {
    const [username, setUsername] = useState(props.username);

    return (
        <div>
            <p>Hello {username}</p>
            <label>Change Name: </label>
            <input type='text' value={username}
                onChange={(e) => setUsername(e.target.value)}/>
        </div>
    );
};

const init = () => {
    ReactDOM.render(
        <HelloUser username="Moztove"/>,
        document.getElementById('app'),
    );
};

window.onload = init;