import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import BalancingCircleListPage from "../pages/BalancingCircleListPage/BalancingCircleListPage"
import BalancingCircleDetailsPage from "../pages/BalancingCircleDetailsPage/BalancingCircleDetailsPage"
import MemberDetailsPage from "../pages/MemberDetailsPage/MemberDetailsPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/balancing-circles" element={<BalancingCircleListPage />} />
            <Route path="/balancing-circles/:circleId" element={<BalancingCircleDetailsPage />} />
            <Route path="/balancing-circles/:circleId/member/:memberId" element={<MemberDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes