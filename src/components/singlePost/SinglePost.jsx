import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.unsplash.com/photo-1570477951696-5f0903583ed4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h1 className="singlePostTilte">
                    Lorem ipsum dolor, sit amet.
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Favour Okon</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                    <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit at odio suscipit similique voluptatem ducimus impedit eum quos alias sint eius natus, reiciendis dignissimos aspernatur non, quis veritatis nesciunt! Alias qui a ad neque optio. Itaque, impedit. Facere, quia! Beatae molestias odit perferendis enim! Libero quia numquam dicta officiis eos saepe. Esse voluptate, nulla quam tenetur enim velit! Sint asperiores autem, illo omnis laboriosam fugit maiores iste excepturi nesciunt ducimus, consequuntur recusandae quis corporis. Fugit odio corporis commodi magni adipisci cupiditate ipsum dolores fuga repellendus sit aliquam provident, possimus atque explicabo eveniet, nulla quibusdam porro iusto optio et architecto deserunt doloribus ut ullam. Cupiditate praesentium explicabo necessitatibus odit ab repellendus quidem. Rem qui sed, laboriosam earum nemo sequi quae.</p>
                </div>
            </div>
        </div>
    )
}
