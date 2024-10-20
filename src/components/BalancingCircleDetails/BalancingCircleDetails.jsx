import { useEffect, useRef, useState } from "react"
import MemberCard from "../MemberCard/MemberCard"
import { Col, Row } from "react-bootstrap"

const BalancingCircleDetails = ({ data }) => {

    const [totalIncomes, setTotalIncomes] = useState(0)
    const [totalOutcomes, setTotalOutcomes] = useState(0)
    const [hourlyData, setHourlyData] = useState({})

    useEffect(() => {

        setTotalIncomes(0)
        setTotalOutcomes(0)
        setHourlyData({})

    }, [data])

    const updateTotals = (forecastSum, type) => {
        const actualForecast = parseFloat(forecastSum.toFixed(2))
        if (type === "Producer") {
            setTotalIncomes(prev => {
                const newTotal = prev + actualForecast
                return newTotal
            })
        } else {
            setTotalOutcomes(prev => {
                const newTotal = prev + actualForecast
                return newTotal
            })
        }
    }

    const updateHourlyData = (forecast, type) => {
        const updatedHourlyData = { ...hourlyData }

        forecast.forEach(({ date, value }) => {
            const hour = new Date(date).getHours()

            if (!updatedHourlyData[hour]) {
                updatedHourlyData[hour] = { incomes: 0, outcomes: 0 }
            }
            if (type === "Producer") {
                updatedHourlyData[hour].incomes += value
            } else {
                updatedHourlyData[hour].outcomes += value
            }
        })

        setHourlyData(updatedHourlyData)
    }

    const calculateHourlyImbalance = () => {
        const hourlyImbalance = {}
        for (const hour in hourlyData) {
            if (hourlyData.hasOwnProperty(hour)) {
                const { incomes, outcomes } = hourlyData[hour]
                hourlyImbalance[hour] = incomes - outcomes
            }
        }
        return hourlyImbalance
    }


    const { id, name, members = [] } = data || {}
    const imbalance = totalIncomes + totalOutcomes
    const hourlyImbalance = calculateHourlyImbalance()
    const producers = members.filter(member => member.type === "Producer")
    const consumers = members.filter(member => member.type === "Consumer")

    return (
        <div>
            {data ? (
                <>
                    <h2 className="title">{name} Members</h2>
                    <Row>
                        <Col md={6}>
                            <h3>Producers:</h3>
                            {producers.map((member) => (
                                <MemberCard member={member} key={member.id} circleId={id} updateTotals={updateTotals} updateHourlyData={updateHourlyData} />
                            ))}
                        </Col>
                        <Col md={6}>
                            <h3>Consumers:</h3>
                            {consumers.map((member) => (
                                <MemberCard member={member} key={member.id} circleId={id} updateTotals={updateTotals} updateHourlyData={updateHourlyData} />
                            ))}
                        </Col>
                        <Col className="imbalance-info">

                            <h3>Total Imbalance: {imbalance.toFixed(2)} MW</h3>
                        </Col>
                        <Col className="imbalance-info">
                            <h3>Hourly Imbalance:</h3>
                            <ul>
                                {Object.entries(hourlyImbalance).map(([hour, imbalance]) => (
                                    <li key={hour}>
                                        Hour {hour}: {imbalance.toFixed(2)} MW
                                    </li>
                                ))}
                            </ul>
                        </Col>

                    </Row>

                </>

            ) : (
                <div>No data available</div>
            )
            }
        </div >
    )
}

export default BalancingCircleDetails