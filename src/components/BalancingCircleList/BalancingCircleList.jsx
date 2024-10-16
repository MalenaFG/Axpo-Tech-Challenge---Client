import axios from "axios"
import { useEffect, useState } from "react"

const API_URL = "http://localhost:5295/api"

const BalancingCircleList = () => {

    const [balancingData, setBalancingData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchBalancingData()
    }, [])

    const fetchBalancingData = () => {
        axios
            .get(`${API_URL}/v1/balancing`)
            .then(({ data }) => {
                setBalancingData(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {isLoading ?
                "Loading..."
                : balancingData.map((circle) => (
                    <div key={circle.id}>
                        {circle.name}
                    </div>
                ))}
        </div>
    )

}

export default BalancingCircleList