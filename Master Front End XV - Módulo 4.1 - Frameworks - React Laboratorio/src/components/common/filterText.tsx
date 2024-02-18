import React, { useEffect, useMemo, useState } from "react";
import { MembersLemoncode, UserLemonCoders } from "@/src/domain/list/list.interface";
import { MembersList } from "../MemberList";
import { useParams } from "react-router-dom";

export interface ObjectResponse<T> {
    content: MembersLemoncode[];
    status: number;
    error?: string;
}

export const FilterOrganization = ({ membersLemoncode }: { membersLemoncode: UserLemonCoders[] }) => {
    const { organization: urlOrganization } = useParams<{ organization: string }>();

    const [organization, setOrganization] = useState('lemoncode');
    const [users, setUsers] = useState<MembersLemoncode[]>([]);
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const totalPage = Math.ceil(users.length / perPage);

    const countPages = () => {
        const test = Math.ceil(users.length / perPage);
        setTotalPages(test);

    }


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
                } else {
                    localStorage.setItem("lastOrganization", organization);
                }
            })
            .catch((error) => {
                console.log(error);

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
        }
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        handleFiltered(organization, page);
    }

    useEffect(() => {
        const test = localStorage.getItem("lastOrganization");
        if (test) {
            setOrganization(test);
            handleFiltered(organization);
            countPages();
        }
        setUsers(membersLemoncode);

    }, [membersLemoncode]);



    return (
        <div className="bg-red-200">
            <input
                type="text"
                onChange={(e) => handleInput(e)}
                placeholder={organization}
            />
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous Page</button>
                <span> Page {currentPage} of {totalPage} </span>
                <button onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
            </div>
            <button onClick={() => handleFiltered(organization)}>Search</button>
            <MembersList members={users} organization={organization} />


        </div>
    );
}
