import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from '../pages/Admin'

const AdminRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/Admin' element={<Admin/>} />
            </Routes>
        </>

    )
}

export default AdminRouter