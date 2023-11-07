import React from "react";
import Item from "./Item";

function List({ notes, onDelete, archived, onArchive }) {
    return (
        <div className="notes-list">
            {notes.length > 0
                ? notes.map((notes) => (
                    <Item
                        key={notes.id}
                        id={notes.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        archived={archived}
                        {...notes}
                    />
                ))
                : "Tidak ada Catatan"}
        </div>
    );
}

export default List;
