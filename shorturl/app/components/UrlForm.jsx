'use client'

import { useState } from "react"

export default function UrlForm() {




    const [data, setData] = useState({ shortCode: '', fullUrl: '' })

    const handleChange = (e) => {


        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)

    }









    return (<>
        <form onSubmit={handleSubmit} className="w-3/5 mx-auto space-y-4 bg-yellow p-5 rounded-lg">
            <input
                type="text"
                placeholder="Custom Code (Optional)"
                name="shortCode"
                value={data.shortCode}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />

            <input
                type="text"
                placeholder="Enter long URL"
                value={data.fullUrl}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                name="fullUrl"
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