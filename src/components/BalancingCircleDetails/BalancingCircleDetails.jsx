import { useEffect, useRef, useState } from "react";
import MemberCard from "../MemberCard/MemberCard";
import { Col, Row } from "react-bootstrap";

const BalancingCircleDetails = ({ data }) => {

    const [totalIncomes, setTotalIncomes] = useState(0)
    const [totalOutcomes, setTotalOutcomes] = useState(0)

    const initialized = useRef(false)

    useEffect(() => {
        setTotalIncomes(0)
        setTotalOutcomes(0)
        initialized.current = true
    }, [data])

    const updateTotals = (forecast, type) => {
        type === "Producer" ? setTotalIncomes(prev => prev + forecast)
            : setTotalOutcomes(prev => prev + forecast)
    }

    const { id, name, members = [] } = data || {}
    const imbalance = totalIncomes + totalOutcomes

    const producers = members.filter(member => member.type === "Producer")
    const consumers = members.filter(member => member.type === "Consumer")

    return (
        <div>
            {data ? (
                <>
                    <h2>{name} Members</h2>
                    <Row>
                        <Col>
                            <h3>Producers:</h3>
                            {producers.map((member) => (
                                <MemberCard member={member} key={member.id} circleId={id} updateTotals={updateTotals} />
                            ))}
                        </Col>
                        <Col>
                            <h3>Consumers:</h3>
                            {consumers.map((member) => (
                                <MemberCard member={member} key={member.id} circleId={id} updateTotals={updateTotals} />
                            ))}
                        </Col>
                        <Col>
                            <div>
                                <h3>Imbalance: {imbalance.toFixed(2)} MW</h3>
                            </div>
                        </Col>
                    </Row>

                </>

            ) : (
                <div>No data available</div>
            )}
        </div>
    );
};

export default BalancingCircleDetails;