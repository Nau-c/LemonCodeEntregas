import React, { useEffect, useState } from "react";
import { MembersLemoncode, UserLemonCoders } from "@/src/domain/list/list.interface";
import { MembersList } from "../MemberList";
import { useParams } from "react-router-dom";

export const FilterOrganization = ({ membersLemoncode }: { membersLemoncode: UserLemonCoders[] }) => {
    const { organization: urlOrganization } = useParams<{ organization: string }>();

    const [organization, setOrganization] = useState('lemoncode');
    const [users, setUsers] = useState<UserLemonCoders[]>(membersLemoncode);


    useEffect(() => {
        const test = localStorage.getItem("lastOrganization");
        if (test) {
            setOrganization(test);
            handleFiltered(organization);
        }
        setUsers(membersLemoncode);

    }, [membersLemoncode]);




    const handleFiltered = (organization: string) => {
        fetch(`https://api.github.com/orgs/${organization}/members`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                return response.json();
            })
            .then((result) => {
                setUsers(result);
                if (result.length === 0) {
                    alert('No members found for the organization.');
                } else {
                    localStorage.setItem("lastOrganization", organization);
                }
            })
            .catch((error) => {
                setUsers([]);
                alert('Organization not found or API request failed.');
                console.error(error);
            });
    }


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '') {
            setOrganization('lemoncode');
        } else {
            setOrganization(value);
            localStorage.setItem("lastOrganization", value);
        }
    }

    console.log(users);

    return (
        <div>
            <h1>Organization Members</h1>
            <input
                type="text"
                onChange={(e) => handleInput(e)}
                placeholder={organization}
            />
            <button onClick={() => handleFiltered(organization)}>Search</button>
            <MembersList members={users} organization={organization} />
        </div>
    );
}
