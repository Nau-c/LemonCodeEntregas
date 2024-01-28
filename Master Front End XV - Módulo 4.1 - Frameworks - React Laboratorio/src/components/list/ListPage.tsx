import React, { useState } from "react";
import { useEffect } from "react";
import { getStatusMembers } from "../../domain/list/list.request";
import { mapAssetProps } from "../../domain/list/list.mapper";
import { MembersList } from "../MemberList";
import { FilterOrganization } from "../common/filterText";

export const ListPage = () => {
    const [membersLemoncode, setMembersLemoncode] = React.useState([]);
    const [error, setError] = useState('')


    const getData = async () => {
        try {
            const response: any = await getStatusMembers()
            setMembersLemoncode(response.content)
        } catch (error: any) {
            setError(error)
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
        const mappedMembers = mapAssetProps(membersLemoncode)
        setMembersLemoncode(mappedMembers)
    }, []);

    if (!membersLemoncode) {
        return <div>loading...</div>
    }
    return (
        <div>
            < FilterOrganization membersLemoncode={membersLemoncode} />
            {/* <MembersList member={membersLemoncode} /> */}
        </div>

    )

};





