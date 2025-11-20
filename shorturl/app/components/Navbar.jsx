"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">TinyLink</h1>

            <div className="flex gap-6">
                <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
                <Link href="/stats" className="hover:text-gray-300">Stats</Link>
            </div>
        </nav>
    );
}
