import React from "react";
import ItemBody from "./ItemBody";
import Actions from "./Actions";
import { showFormattedDate } from "../utils/index";

function Item({title,body,id,onDelete,createdAt,archived,onArchive,}) {
    return (
        <div className="note-item">
            <ItemBody
                title={title}
                body={body}
                createdAt={showFormattedDate(createdAt)}
            />
            <Actions
                id={id}
                onDelete={onDelete}
                onArchive={onArchive}
                archived={archived}
            />
        </div>
    );
}

export default Item;
