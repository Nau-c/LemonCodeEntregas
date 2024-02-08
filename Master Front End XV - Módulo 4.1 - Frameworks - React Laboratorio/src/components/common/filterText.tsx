import React, { useEffect, useState } from "react";
import { MembersLemoncode, UserLemonCoders } from "@/src/domain/list/list.interface";
import { MembersList } from "../MemberList";


export interface ObjectResponse<T> {
    content: MembersLemoncode[];
    status: number;
    error?: string;
}

export const FilterOrganization = ({ membersLemoncode }: { membersLemoncode: UserLemonCoders[] }) => {
    const [organization, setOrganization] = useState('lemoncode');
    const [users, setUsers] = useState<MembersLemoncode[]>([]);
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const [perPage, setPerPage] = useState(5);


    useEffect(() => { setUsers(membersLemoncode) }, [membersLemoncode]);

    const handleFiltered = (organization = 'lemoncode') => {
        fetch(`https://api.github.com/orgs/${organization}/members`
        )
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
                }
            })
            .catch((error) => {
                setUsers([]);
                alert('Organization not found or API request failed.');
                console.error(error);
            });


    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        if (value === '') {
            setOrganization('lemoncode');
        } else {
            setOrganization(value);
        }

    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        handleFiltered(organization, page);
    }


    console.log('users', users)
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
            {/* Paginación */}
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous Page</button>
                <span> Page {currentPage} </span>
                <button onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
            </div>

        </div>
    );


}

