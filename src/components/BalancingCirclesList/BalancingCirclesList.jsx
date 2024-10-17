import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const API_URL = "http://localhost:5295/api"

const BalancingCirclesList = () => {

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
        <div className="BalancingCirclesList">
            {isLoading ?
                "Loading..."
                : balancingData.map((circle) => (
                    <div key={circle.id}>
                        <Button as={Link} to={`/balancing-circles/${circle.id}`} variant='light' className='w-100'>{circle.name}</Button>
                    </div>
                ))}
        </div>
    )

}

export default BalancingCirclesList