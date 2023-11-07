import React from "react";

function Navbar(onSearch) {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <form className="note-search">
                <input onChange={(event) => onSearch(event)} type="text" placeholder="Cari catatan ..." name="search" />
            </form>
        </div>
    );
}

export default Navbar;
