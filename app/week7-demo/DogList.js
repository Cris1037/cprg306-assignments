
import Dog from './Dog';
export default function DogList(dogs) {
    return (
        <div>
            <h2>Dogs</h2>
            {dogs.map((dog, index) => (
                <Dog key={dog.id} name={dog.name} age={dog.age} />
            ))}
        </div>
    );

}