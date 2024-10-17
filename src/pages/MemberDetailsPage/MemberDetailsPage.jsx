import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { useParams } from "react-router-dom"

const API_URL = "http://localhost:5295/api"

const MemberDetailsPage = () => {

    const [memberDetails, setMemberDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { memberId } = useParams()

    useEffect(() => {
        fetchMemberDetails()
    }, [])

    const fetchMemberDetails = () => {
        axios
            .get(`${API_URL}/v1/balancing/member/${memberId}/forecast`)
            .then(({ data }) => {
                setMemberDetails(data)
                setIsLoading(false)
            })
            .catch(
                err => console.log(err),
                setIsLoading(false)
            )
    }



    return (
        <div className="MemberDetailsPage">
            {isLoading ? (
                "Loading..."
            ) : (
                <div>
                    <h2>Forecast for Member ID: {memberDetails.memberId}</h2>
                    <Table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {memberDetails.forecast?.map((forecast, index) => (
                                <tr key={index}>
                                    <td>{new Date(forecast.date).toLocaleString()}</td>
                                    <td>{forecast.value.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    )
}

export default MemberDetailsPage