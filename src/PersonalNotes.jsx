import React from "react";
import { getInitialData } from "./utils/index";
import Input from "./components/Input";
import List from "./components/List";
import Navbar from "./components/Navbar";

class PersonalNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        };

        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);

    }

    onAddNotesHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        createdAt: new Date().toISOString(),
                        body,
                        archived: false,
                    },
                ],
            };
        });
    }

    onArchiveNoteHandler(id) {
        const Arsipkancatatan = this.state.notes.map((notes) =>
            notes.id === id ? { ...notes, archived: !notes.archived } : notes
        );
        this.setState({ notes: Arsipkancatatan });
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter((notes) => notes.id !== id);
        this.setState({ notes });
    }

    onSearchHandler(event) {
        const PencarianCatatan = event.target.value.toLowerCase();
        this.setState({ search: PencarianCatatan })
        event.preventDefault();
    }

    render() {
        const CatatanAktif = this.state.notes.filter((notes) => {
            return notes.archived === false;
        });
        const CatatanArsip = this.state.notes.filter((notes) => {
            return notes.archived === true;
        });
        const CariCatatan = !this.state.search ? this.state.notes : this.state.notes.filter(notes => notes.title.toLowerCase().match(this.state.search));

        return (
            <>
                <Navbar />
                <div className="note-app__body">
                    <Input addNotes={this.onAddNotesHandler} />
                    <h2>Catatan Aktif</h2>
                    <List
                        notes={CatatanAktif}
                        onDelete={this.onDeleteNoteHandler}
                        onArchive={this.onArchiveNoteHandler}
                    />
                    <h2>Catatan Arsip</h2>
                    <List
                        notes={CatatanArsip}
                        onDelete={this.onDeleteNoteHandler}
                        onArchive={this.onArchiveNoteHandler}
                    />
                </div>
            </>
        );
    }
}

export default PersonalNotes;
