import React from "react";
import MemberCard from "../MemberCard/MemberCard";

const BalancingCircleDetails = ({ data }) => {

    return (
        <div>
            {data ? (
                <>
                    <h2>Details for {data.name}</h2>
                    <h3>Members:</h3>
                    <ul>
                        {data.members.map((member) => (
                            <MemberCard member={member} />
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