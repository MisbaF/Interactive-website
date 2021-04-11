import profileImage from "../assests/face.jpeg"
import { aboutData } from "../data/aboutData"
export default function About() {
    return (
        <div>
        <div id="image-container">
            <img id="profile-image" alt = "profileImage" src= { profileImage}/>
        </div>
        <div id="about-data">
            <p>
                {aboutData.name}
            <p/>
            <p>
            {aboutData.degree}
            </p>
               {aboutData.tagline}
            </p>
            <p>
                {aboutData.interests}
            </p>
            <p>
                {aboutData.skills}
            </p>
            <p>
                {aboutData.footertext}
            </p>
        </div>
        </div>
    )
}