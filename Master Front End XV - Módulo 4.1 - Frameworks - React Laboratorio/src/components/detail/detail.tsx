import React from "react";
import { Link, useParams } from "react-router-dom";

interface MemberDetailEntity {
    id: string;
    login: string;
    name: string;
    company: string;
    bio: string;
}

const createDefaultMemberDetail = () => ({
    id: "",
    login: "",
    name: "",
    company: "",
    bio: "",
});

export const DetailPage: React.FC = () => {
    const [member, setMember] = React.useState<MemberDetailEntity>(
        createDefaultMemberDetail()
    );
    const { id } = useParams();

    React.useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
            .then((response) => response.json())
            .then((json) => setMember(json));
    }, [id]);
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md max-w-2xl w-full">
                <h2 className="text-3xl font-semibold mb-4">Hello from Detail page</h2>
                <h3 className="text-lg font-medium mb-2">User Id: {id}</h3>
                <p className="mb-2"><span className="font-bold">Id:</span> {member.id}</p>
                <p className="mb-2"><span className="font-bold">Login:</span> {member.login}</p>
                <p className="mb-2"><span className="font-bold">Name:</span> {member.name}</p>
                <p className="mb-2"><span className="font-bold">Company:</span> {member.company}</p>
                <p className="mb-4"><span className="font-bold">Bio:</span> {member.bio}</p>
                <Link to="/list" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Back to list page</Link>
            </div>
        </div>
    );
};