export default function Navbar() {
    return (
        <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">TinyLink</h1>

            <div className="flex gap-6">
                <a href="/" className="hover:text-gray-300">Dashboard</a>
                <a href="/code/test" className="hover:text-gray-300">Stats</a>
            </div>
        </nav>
    );
}
