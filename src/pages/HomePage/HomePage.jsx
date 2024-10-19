import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../HomePage/HomePage.css"

const HomePage = () => {
    return (
        <div className="HomePage">
            <h1 className="title">Axpo Group tech challenge</h1>
            <h2 className="developer">By: Malena Fernández</h2>
            <Button as={Link} to="/balancing-circles" variant="light">Show balancing circles</Button>
        </div>
    )
}

export default HomePage