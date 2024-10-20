import { useState, useEffect } from "react"
import axios from "axios"
import { Button, Card, Modal, Table } from "react-bootstrap"

const API_URL = "http://localhost:5295/api"

const MemberCard = ({ member, updateTotals, updateHourlyData }) => {

    const [memberDetails, setMemberDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [totalForecast, setTotalForecast] = useState(0)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(() => {
        fetchMemberDetails()
    }, [])

    const { name, type, category, id } = member

    const calculateTotalForecast = (forecast = [], memberType) => {
        const totalValue = forecast.reduce((sum, { value }) => sum + value, 0)
        return (
            memberType === "Producer" ? totalValue : -totalValue
        )
    }

    const fetchMemberDetails = () => {
        axios
            .get(`${API_URL}/v1/balancing/member/${id}/forecast`)
            .then(({ data }) => {
                setMemberDetails(data)
                const total = calculateTotalForecast(data.forecast, type)
                setTotalForecast(total)
                updateTotals(total, type)
                updateHourlyData(data.forecast, type)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }

    return (
        <div className="MemberCard">
            {isLoading ?
                "Loading..."
                :
                <Card>
                    <Card.Body>

                        <Card.Title>{name}</Card.Title>

                        <Card.Text>
                            <strong>{type}</strong>: {category}
                        </Card.Text>
                        <Card.Text>
                            <strong>Total Forecast:</strong> {totalForecast.toFixed(2)} MW
                        </Card.Text>
                        <Button onClick={handleShow} variant="light" >View Insights</Button>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            scrollable
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>{name}</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
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
                            </Modal.Body>

                            <Modal.Footer>
                                <Modal.Title>{type}: {category}</Modal.Title>
                            </Modal.Footer>
                        </Modal>

                    </Card.Body>
                </Card>
            }
        </div>
    )
}

export default MemberCard