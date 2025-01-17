import Logo from "@/app/_components/logo";
import Navigation from "@/app/_components/navigation";

function Header() {
    return (
        <header className="border-b border-black px-8 py-5">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Logo />
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
