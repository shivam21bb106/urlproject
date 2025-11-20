"use client";

import { useEffect, useState } from "react";

export default function LinkTable() {
    const [links, setLinks] = useState([]);

    async function fetchLinks() {
        const res = await fetch("/api/links");
        const data = await res.json();
        setLinks(data);
    }
    async function handleDelete(code) {
        console.log('codeeeeeeeeeeeee', code)
        const res = await fetch(`/api/links/${code}`, {
            method: "DELETE",
        });

        if (!res.ok) {
            alert("Failed to delete");
            return;
        }

        fetchLinks();
    }
    useEffect(() => {
        fetchLinks();
    }, []);

    return (
        <table className="w-3/5 mx-auto mt-10 border">
            <thead>
                <tr className="bg-yellow">
                    <th className="p-2 border">Short Code</th>
                    <th className="p-2 border">URL</th>
                    <th className="p-2 border">Clicks</th>
                    <th className="p-2 border">Actions</th>
                </tr>
            </thead>

            <tbody>
                {links.length === 0 ? (
                    <tr>
                        <td colSpan={4} className="p-4 text-center">
                            No links yet.
                        </td>
                    </tr>
                ) : (
                    links.map((item) => (
                        <tr key={item.code}>
                            <td className="p-2 border text-blue-600 underline">
                                <a href={`/${item.code}`} target="_blank">
                                    {item.code}
                                </a>
                            </td>

                            <td className="p-2 border truncate max-w-xs">
                                <a href={item.targetUrl} className="text-blue-600 underline" target="_blank">
                                    {item.targetUrl}
                                </a>
                            </td>

                            <td className="p-2 border">{item.totalClicks}</td>

                            <td className="p-2 border">
                                <button
                                    onClick={() => handleDelete(item.code)}
                                    className="bg-red-600 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}
