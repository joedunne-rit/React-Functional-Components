const React = require('react');
const {useState, useEffect} = React;
const ReactDOM = require('react-dom');

const SongContainer = (props) => {
    const [songs, setSongs] = useState(props.songs);

    useEffect(async () => {
        const response = await fetch('/getSongs');
        const data = await response.json();
        setSongs(data);
    }, []);

    if(songs.length === 0){
        return (
            <div>
                <h3>No Song Yet!</h3>
            </div>
        );
    };

    const songList = songs.map(song => {
        return (
            <div key={song.title}>
                <h2>{song.artist} - <i>{song.title}</i></h2>
            </div>
        );
    });

    return (
        <div>
            <h1>My Favorite Songs!</h1>
            {songList}
        </div>
    );
};

const init = () => {
    ReactDOM.render(
        <SongContainer songs={[]} />,
        document.getElementById('app'),
    );
};
window.onload = init;