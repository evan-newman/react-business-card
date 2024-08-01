import profilepic from './profile-pic.jpg'

function Info() {
    return (
        <div>
            <img src={profilepic} alt=":)"/>
            <h2>Evan Newman</h2>
            <h4>Software Engineer</h4>
            <small>newmanevan.com</small>
            <div>
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </div>
    );
}

export default Info;