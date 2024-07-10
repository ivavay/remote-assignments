export default function Card({name, description, topics}) {
    // Place props in {}!!!
    // Assign keys to each item 
    return(
        <div className="card">
            <span className="title">{name}</span>
            <span className="public-tag">Public</span>
            <p>{description}</p>
            
            <div className="tags">
            { 
                topics && topics.map((item, key) => (
                    <span className="tag" key={key}>{item}</span>
                ))
            }  
            </div>            
        </div>
    )
}