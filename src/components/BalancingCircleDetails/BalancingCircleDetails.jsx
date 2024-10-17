import React from "react";
import MemberCard from "../MemberCard/MemberCard";

const BalancingCircleDetails = ({ data }) => {

    const { id, name, members } = data

    return (
        <div>
            {data ? (
                <>
                    <h2>Details for {name}</h2>
                    <h3>Members:</h3>
                    <ul>
                        {members.map((member) => (
                            <MemberCard member={member} key={member.id} circleId={id} />
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