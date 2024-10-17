import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const MemberCard = ({ member, circleId }) => {

    const { name, type, category, id } = member

    return (
        <div className="MemberCard">
            <Card>
                <Card.Body>

                    <Card.Title>{name}</Card.Title>

                    <Card.Text>
                        <strong>{type}</strong>: {category}
                    </Card.Text>

                    <Button as={Link} to={`/balancing-circles/${circleId}/member/${id}`} variant="light">Details</Button>

                </Card.Body>
            </Card>
        </div>
    )
}

export default MemberCard