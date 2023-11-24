import React from 'react';
import SearchPanel from "./SearchPanel"

const Filter = () => {
    return (
         <section className="">
            <h1 className="filter--title">Podcast</h1>
            <div>
                <SearchPanel />
             </div>
        </section>
    );
}

export default Filter;