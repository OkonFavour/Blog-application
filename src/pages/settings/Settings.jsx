import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your account</span>
                    <span className="settingsTitleDelete">Delete Your account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Pixture</label>
                    <div className="settingsPP">
                        <img src="https://images.unsplash.com/photo-1570477951696-5f0903583ed4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} className="settingsPPInput"/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Favour Okon" name="name"/>
                    <label>Email</label>
                    <input type="email" placeholder="favourokon264@gmail.com" name="email"/>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
