
export default function PostFormat({post}) {
    return (
        <div className="post-template" id={"post" + post.id}> {/* className= all array elements , id= element specific(unique) */ }
            <span className="post-header">
                <h4>{post.title}</h4>
                <p>Topic: {post.topic}</p>
                <p>posted on: {post.timeCreated}</p>
                <p>time to read: {post.timeToRead}</p>
                <p>author: {post.author}</p>
            </span>
            <div className="post-content">
                {post.content}
            </div>
            <div className="post-sources">
                <h5>sources: </h5>
                {post.sources.map((element) => 
                    <div>
                        <em>{element.source}</em>
                        <a href={element.link}>{element.link}</a>
                    </div>

                )}
            </div>
        </div>
    );
}