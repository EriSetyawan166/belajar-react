import './App.css';

function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson" />
    );
}

function Gallery() {
    return (
        <section>
            <h1>Amazing scientists!</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

export default Gallery;
