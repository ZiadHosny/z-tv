import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { Account } from "./pages/Account"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"

export const Router = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
            path="/account"
            element={
                <ProtectedRoute>
                    <Account />
                </ProtectedRoute>
            }
        />
    </Routes>
    )
}