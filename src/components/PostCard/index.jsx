import './styles.css'

export const PostCard = ({post, index}) => (
    <div className="post" key={index}>
        <img src={post.cover} alt={post.title} />
        <div key={post.id} className='post-content'>
            <h2>{post.title}{post.id}</h2>
            <p>{post.body}</p>
        </div>  
    </div>
)
