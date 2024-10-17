import { useParams } from "react-router-dom"
import BalancingCircleDetails from "../../components/BalancingCircleDetails/BalancingCircleDetails"
import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = "http://localhost:5295/api"

const BalancingCircleDetailsPage = () => {
    const [balancingCircleData, setBalancingCircleData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const { circleId } = useParams()

    useEffect(() => {
        fetchBalanceCircleData();
    }, [circleId]);

    const fetchBalanceCircleData = () => {
        axios
            .get(`${API_URL}/v1/balancing`)
            .then(response => {
                const circle = response.data.find(item => item.id === circleId);
                setBalancingCircleData(circle);
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                isLoading ?
                    "Loading..."
                    :
                    <BalancingCircleDetails data={balancingCircleData} />
            }
        </div>
    )
}

export default BalancingCircleDetailsPage