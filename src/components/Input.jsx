import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);

        //inisialisasi state
        this.state = {
            title: "",
            body: "",
            titleChar: 50,
        };

        this.onInputJudulHandler = this.onInputJudulHandler.bind(this);
        this.onInputBodyHandler = this.onInputBodyHandler.bind(this);
        this.onInputCatatanHandler = this.onInputCatatanHandler.bind(this);
    }

    onInputJudulHandler(event) {
        if (this.state.titleChar > 0) {
            this.setState((s) => {
                return {
                    title: event.target.value,
                    titleChar: s.titleChar - 1,
                };
            });
        }
    }

    onInputBodyHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onInputCatatanHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
        this.setState(() => {
            return {
                title: "",
                body: "",
                titleChar: 50,
            };
        });
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onInputCatatanHandler}>
                <h2>Buat Catatan</h2>
                <p className="note-input__title__char-limit">
                    Sisa karakter: {this.state.titleChar}
                </p>
                <input
                    type="text"
                    placeholder="Input Judul Catatan"
                    value={this.state.title}
                    onChange={this.onInputJudulHandler}
                />
                <input
                    className="note-input__body"
                    type="text"
                    placeholder="Input Deskripsi Catatan"
                    value={this.state.body}
                    onChange={this.onInputBodyHandler}
                />
                <button type="submit">Upload</button>
            </form>
        );
    }
}

export default Input;
