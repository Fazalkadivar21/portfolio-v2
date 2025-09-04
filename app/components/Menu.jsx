export default function Menu({ isOpen, setOpen }) {
    if (!isOpen) return null;
    return (
        <nav className="smokey text-[beige] menu fixed z-50 top-0 left-0 w-full h-screen flex flex-col items-center font-[Luxnoleg] justify-center leading-none text-center">
            <h1 className="font-[TDF] text-[18rem]">Let's Talk</h1>
            <ul className="text-6xl flex gap-16">
                <li>X</li>
                <li>Github</li>
                <li>Linkedin</li>
            </ul>
        </nav>
    );
}