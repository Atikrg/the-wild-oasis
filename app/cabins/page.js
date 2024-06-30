import Counter from "@/app/_components/Counter/Counter.component";
import Navigation from "@/app/_components/navigation";

export const metadata = {
    title: "Cabins",
};

export default async function Page() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();

    console.log(data);

    return (
        <>
            <h1>Cabins Page</h1>
           {/*  <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <Counter users={data} /> */}
        </>
    );
}
