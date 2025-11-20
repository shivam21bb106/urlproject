'use client'

import { useState } from "react"

export default function UrlForm() {




    const [data, setData] = useState({ code: "", targetUrl: "" });

    const handleChange = (e) => {


        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))


    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/link", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            alert("Error creating short link");
            return;
        }

        const result = await res.json();
        console.log(result);

        setData({ code: "", targetUrl: "" });
    };







    return (<>
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

    </>)
}