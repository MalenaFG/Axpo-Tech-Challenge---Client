import React from "react";

const BalancingCircleDetails = ({ data }) => {

    return (
        <div>
            {data ? (
                <>
                    <h2>Details for {data.name}</h2>
                    <h3>Members:</h3>
                    <ul>
                        {data.members.map((member) => (
                            <li key={member.id}>
                                <strong>Name:</strong> {member.name} <br />
                                <strong>Type:</strong> {member.type} <br />
                                <strong>Category:</strong> {member.category}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
};

export default BalancingCircleDetails;