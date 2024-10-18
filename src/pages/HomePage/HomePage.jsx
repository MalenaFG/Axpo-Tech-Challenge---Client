import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="HomePage">
            <h1>Home Page</h1>
            <Button as={Link} to="/balancing-circles" variant="light">Show balancing circles</Button>
        </div>
    )
}

export default HomePage