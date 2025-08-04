import { Routes, Route } from "react-router-dom";
import Dashboard from '@/pages/Dashboard/Dashboard';
import AppLayout from '@/layout/AppLayout';

const Router = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
            {/* Anda bisa tambah halaman lain seperti /products atau /analytics */}
        </Routes>
    )
}

export default Router