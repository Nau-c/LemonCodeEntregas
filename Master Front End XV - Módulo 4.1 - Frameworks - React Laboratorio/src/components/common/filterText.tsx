import React, { useEffect, useState } from "react";
import { MembersLemoncode, UserLemonCoders } from "@/src/domain/list/list.interface";
import { MembersList } from "../MemberList";


export interface ObjectResponse<t> {
    content: MembersLemoncode[];
    status: number;
    error?: string;
}

export const FilterOrganization = ({ membersLemoncode }: { membersLemoncode: UserLemonCoders[] }) => {
    const [organization, setOrganization] = useState('lemoncode');
    const [users, setUsers] = useState<MembersLemoncode[]>([]);
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const handleFiltered = (organization = 'lemoncode', page = 1) => {
        fetch(`https://api.github.com/orgs/${organization}/members?page=${page}&per_page=${perPage}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                return response.json();
            })
            .then((result) => {
                console.log('result', result.content);
                setUsers(result);
                let totalPages = 0;
                if (users.length > 0) {
                    totalPages = Math.ceil(users.length / perPage);
                }
                console.log('totalPages', totalPages);

                if (result.length === 0) {
                    alert('No members found for the organization.');
                } else {
                    localStorage.setItem("lastOrganization", organization);
                }
            })
            .catch((error) => {
                console.log(error);
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
        }
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        handleFiltered(organization, page);
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleFiltered(organization);
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [organization]);

    useEffect(() => {
        const changeOrganization = localStorage.getItem("lastOrganization");
        if (changeOrganization) {
            setOrganization(changeOrganization);
            handleFiltered(organization);
        }
        setUsers(membersLemoncode);
    }, [membersLemoncode]);

    return (
        <div className="bg-gray-100 p8">
            <div className="flex mb-4 mt-4">
                <input
                    type="text"
                    onChange={(e) => handleInput(e)}
                    placeholder={organization}
                    className="w-full p-2 mb-4 border rounded mr-2 ml-2"
                />
                <button onClick={() => handleFiltered(organization)} className="bg-green-500 text-white px-4 py-2 rounded mb-4 mr-2">Search</button>
            </div>
            <div className="flex items-center justify-between mb-4">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="bg-blue-500 text-white px-4 py-2 rounded mr-2 ml-2">Previous Page</button>
                <span className="text-lg font-bold"> Page {currentPage} </span>
                <button onClick={() => handlePageChange(currentPage + 1)} className="bg-blue-500 text-white px-4 py-2 rounded ml-2 mr-2">Next Page</button>
            </div>
            <MembersList members={users} organization={organization} />
        </div >
    );
}
