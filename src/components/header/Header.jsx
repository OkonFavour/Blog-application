import "./header.css"

export default function Header() {
    return (
        <div className='header'>
          <div className="headerTitles">
            <span className="headerTitleSm">Favour Okon</span>
            <span className="headerTitleLg">Blog</span>
          </div>
          <img className="headerImg" src="https://images.unsplash.com/photo-1561816544-21ecbffa09a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    )
}
