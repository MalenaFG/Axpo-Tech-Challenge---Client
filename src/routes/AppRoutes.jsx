import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import BalancingCirclesListPage from "../pages/BalancingCirclesListPage/BalancingCirclesListPage"
import BalancingCircleDetailsPage from "../pages/BalancingCircleDetailsPage/BalancingCircleDetailsPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/balancing-circles" element={<BalancingCirclesListPage />} />
            <Route path="/balancing-circles/:circleId" element={<BalancingCircleDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes