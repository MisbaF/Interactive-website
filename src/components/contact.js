import gitImage from "../assests/git.svg"
import linkedinImage from "../assests/LINKDN.svg"
import gmailImage from "../assests/Gmail-logo.png"
export default function Contact() {
    return (
       <div>

       <div>
       <p> Github </p> 
        <img className="icon"id ="git-icon"src = {gitImage} alt="git icon"/> 
        </div>
        <div>
        <p> Linkedin </p>
        <img className="icon" id ="linkedin-icon"src = {linkedinImage} alt="linkedin icon"/>
        
        </div>
        <div>
        <p> Email Id: misbafarheen309@gmail.com </p>
        <img className="icon" id="gmail-icon" src={gmailImage} alt="gmail icon"/>
        </div>
        <div>
        <p> feedback thingy </p>
        </div>
        
        </div>
    )
}