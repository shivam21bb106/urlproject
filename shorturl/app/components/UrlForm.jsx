'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export default function UrlForm() {

    const router = useRouter();
    const [data, setData] = useState({ code: "", targetUrl: "" });
    const [newLink, setNewLink] = useState(null);

    const handleChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/links", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const errorMessage = await res.text();
            alert(errorMessage);
            return;
        }

        const result = await res.json();
        console.log(result);

        setNewLink(result);

        setData({ code: "", targetUrl: "" });

        router.refresh();
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="w-3/5 mx-auto space-y-4 bg-yellow p-5 rounded-lg">
                <input
                    type="text"
                    placeholder="Custom Code (Optional)"
                    name="code"
                    value={data.code}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />

                <input
                    type="text"
                    placeholder="Enter long URL"
                    value={data.targetUrl}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    name="targetUrl"
                    required
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Create Short Link
                </button>
            </form>

            {newLink && (
                <div className="w-3/5 mx-auto mt-4 p-4 bg-black-100 border border-green-400 rounded">
                    <p className="font-bold mb-1">Short Link Created:</p>

                    <a
                        href={`${window.location.origin}/${newLink.code}`}
                        target="_blank"
                        className="text-blue-600 underline break-all"
                    >
                        {window.location.origin}/{newLink.code}
                    </a>
                </div>
            )}
        </>
    )
}
