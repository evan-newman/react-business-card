import profilepic from './profile-pic.jpg'
import './Info.css'

function Info() {
    return (
        <div className="info">
            <img className="info--img" src={profilepic} alt=":)"/>
            <h2 className="info--name">Evan Newman</h2>
            <h4 className="info--job_title">Software Engineer</h4>
            <h5 className="info--website">newmanevan.com</h5>
            <div className="info--links">
                <a className="email" href="mailto: newmanevan.row@gmail.com"><i className="fa fa-envelope"></i>Email</a>
                <a className="linkedin" href="https://www.linkedin.com/in/evan-r-newman/"><i className="fa fa-linkedin-square"></i>LinkedIn</a>
            </div>
        </div>
    );
}

export default Info;