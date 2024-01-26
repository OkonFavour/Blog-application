import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT</span>
                <img src="https://images.unsplash.com/photo-1597595452120-855581c199f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="lisidebarListItem">Life</li>
                    <li className="lisidebarListItem">Music</li>
                    <li className="lisidebarListItem">Style</li>
                    <li className="lisidebarListItem">Sport</li>
                    <li className="lisidebarListItem">Cinema</li>
                    <li className="lisidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fab fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fab fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fab fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fab fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
