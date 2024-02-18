import React, { useEffect, useMemo, useState } from "react";
import { MembersLemoncode, UserLemonCoders } from "@/src/domain/list/list.interface";
import { MembersList } from "../MemberList";
<<<<<<< HEAD

export interface ObjectResponse<T> {
    content: MembersLemoncode[];
    status: number;
    error?: string;
}
=======
import { useParams } from "react-router-dom";
>>>>>>> dd30b44f6c95df1976b9df39e65dc88643f63e39

export const FilterOrganization = ({ membersLemoncode }: { membersLemoncode: UserLemonCoders[] }) => {
    const { organization: urlOrganization } = useParams<{ organization: string }>();

    const [organization, setOrganization] = useState('lemoncode');
<<<<<<< HEAD
    const [users, setUsers] = useState<MembersLemoncode[]>([]);
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(users.length / perPage);
    const totalPage = useMemo(() => Math.ceil(users.length / perPage), [users, perPage]);
=======
    const [users, setUsers] = useState<UserLemonCoders[]>(membersLemoncode);
>>>>>>> dd30b44f6c95df1976b9df39e65dc88643f63e39


<<<<<<< HEAD
    const handleFiltered = (organization = 'lemoncode', page = 1) => {
        fetch(`https://api.github.com/orgs/${organization}/members?page=${page}&per_page=${perPage}`)
=======
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
>>>>>>> dd30b44f6c95df1976b9df39e65dc88643f63e39
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
                } else {
                    localStorage.setItem("lastOrganization", organization);
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
        const value = e.target.value;
        if (value === '') {
            setOrganization('lemoncode');
        } else {
            setOrganization(value);
            localStorage.setItem("lastOrganization", value);
        }
<<<<<<< HEAD
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        handleFiltered(organization, page);
=======
>>>>>>> dd30b44f6c95df1976b9df39e65dc88643f63e39
    }

    console.log(users);

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
