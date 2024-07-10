export default function Card({name, description, topics, url, visibility}) {
    // Place props in {}!!!
    // Assign keys to each item 
    return(
        <div className="card">
            <a href={url} ><span className="title">{name}</span></a>
            <span className="public-tag">{visibility}</span>
            <p>{description}</p>
            
            <div className="tags">
            { 
            topics.map((item, key) => (
                    <span className="tag" key={key}>{item}</span>
                ))
            }  
            </div>            
        </div>
    )
}