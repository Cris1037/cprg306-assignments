export default function Dog({id, name,age, onDelete}) {
    return(
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <button onClick={()=> onDelete(id)}>Delete</button>
        </div>
    )
}