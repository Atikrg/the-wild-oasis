import Counter from "../components/Counter/Counter.component";
import Navigation from "../components/navigation";

export default async function Page() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();

    console.log(data);

    return (
        <>
            <h1>Cabins Page</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <Counter users = {data}/>
        </>
    );
}
