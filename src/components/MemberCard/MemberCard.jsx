const MemberCard = ({ member }) => {
    return (
        <div className="MemberCard">
            <li key={member.id}>
                <strong>Name:</strong> {member.name} <br />
                <strong>Type:</strong> {member.type} <br />
                <strong>Category:</strong> {member.category}
            </li>

        </div>
    )
}

export default MemberCard