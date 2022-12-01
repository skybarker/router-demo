import Search from "../components/Search";
import Button from "../components/FormButton";
import Nav from "../components/Nav";

export default function Home() {
return (
    <div className="bg-gray-300 w-1/5 h-screen pl-8">
        <div className="flex gap-x-2 items-center">
            <Search />
            <Button />
        </div>
        <Nav />
        <h1>React Router Contacts</h1>
    </div>
  );
}