import React, { useEffect, useMemo, useState } from "react";
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
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(users.length / perPage);
    const totalPage = useMemo(() => Math.ceil(users.length / perPage), [users, perPage]);

    useEffect(() => { setUsers(membersLemoncode) }, [membersLemoncode]);

    const handleFiltered = (organization = 'lemoncode', page = 1) => {
        fetch(`https://api.github.com/orgs/${organization}/members?page=${page}&per_page=${perPage}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                return response.json();
            })
            .then((result) => {
                setUsers(result);
                setTotalPages(totalPage);
                if (result.length === 0) {
                    alert('No members found for the organization.');
                }
            })
            .catch((error) => {
                setUsers([]);
                setTotalPages(0);
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


    return (
        <div className="focus:border-blue-300">
            <h1>Organization Members</h1>
            <input
                type="text"
                onChange={(e) => handleInput(e)}
                placeholder={organization}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            {/* Paginación */}
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous Page</button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
            </div>
            <button onClick={() => handleFiltered(organization)}>Search</button>

            <MembersList members={users} organization={organization} />


        </div>
    );


}

