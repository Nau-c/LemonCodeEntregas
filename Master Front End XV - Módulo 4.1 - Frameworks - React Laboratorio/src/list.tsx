import React from "react";


interface membersLemoncode {
    id: number;
    login: string;
    avatar_url: string;
}

export const ListPage = () => {
    const [membersLemoncode, setMembersLemoncode] = React.useState<membersLemoncode[]>([]);

    React.useEffect(() => {
        fetch("https://api.github.com/orgs/lemoncode/members")
            .then((response) => response.json())
            .then((json) => setMembersLemoncode(json));
    }, []);

    return (
        <>
            <div className="list-user-list-container">
                <span className="list-header">Avatar</span>
                <span className="list-header">Id</span>
                <span className="list-header">Name</span>
                {membersLemoncode.map((member) => (
                    <>
                        <img alt='Imagenes miembros de Lemoncode' src={member.avatar_url} />
                        <span>{member.id}</span>
                        <span>{member.login}</span>
                    </>
                ))}
            </div>
        </>
    );
}


