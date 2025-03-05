import dogData from './dogs.json';
import Dog from './Dog';

export default function Page(){
    const [dogs, setDogs] = useState(dogData);
        
        const handleAddDog = (dog) => {
            setDogs([...dogs, dog]);
        };
        const handleRemoveDog = (id) => {
            setDogs(dogs.filter((dog) => dog.id !== id));
        };

    return(
        <div>
            
            <DogList onAddDog={handleAddDog} />
            <DogForm dogs={dogs} />
        </div>
    );
}