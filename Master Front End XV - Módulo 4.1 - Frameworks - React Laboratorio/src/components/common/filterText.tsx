import React, { ChangeEvent, useState } from 'react';

interface FilterByNameImputProps {
    filterText: string;
}

const FilterByNameImput: React.FC<FilterByNameImputProps> = ({ defaultFilterText = 'Lemoncode' }) => {
    const [filterText, setFilterText] = useState(defaultFilterText);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilterText(event.currentTarget.value);
    };

    return (
        <>
            <div className="filter">
                <input value={filterText} onChange={onChange} />
            </div>
        </>
    );
}