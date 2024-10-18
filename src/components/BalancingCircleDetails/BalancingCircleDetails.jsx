import React from "react";
import MemberCard from "../MemberCard/MemberCard";
import { Col, Row } from "react-bootstrap";

const BalancingCircleDetails = ({ data }) => {
    const { id, name, members = [] } = data || {};

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
                                <MemberCard member={member} key={member.id} circleId={id} />
                            ))}
                        </Col>
                        <Col>
                            <h3>Consumers:</h3>
                            {consumers.map((member) => (
                                <MemberCard member={member} key={member.id} circleId={id} />
                            ))}
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