'use client';

import Table from '../components/Table';
import UrlForm from '../components/UrlForm';

export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">Dashboard</h1>
            <UrlForm />
        </div>
    );
}