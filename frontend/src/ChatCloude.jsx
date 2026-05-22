import { useEffect, useState } from "react";
import style from "./ChatCloude.module.css";

function ChatCloude() {

    const [input, setInput] = useState("");
    const [msg, setMsg] = useState("scrivi qualcosa...");
    const [loading, setLoading] = useState(false);

    function sendMessage(text) {

        if (!text || loading) return;

        setLoading(true);

        fetch(`http://localhost:3000/claudio?msg=${encodeURIComponent(text)}`)
            .then(response => response.json())
            .then(data => {
                setMsg(data.messaggio);
                setLoading(false);
            });
    }

    const changeHandler = event => {
        setInput(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault();
        sendMessage(input);
    };

    useEffect(() => {
        sendMessage("Ciao");
    }, []);

    return (
        <div className={style.page}>
            <div className={style.card}>
                <div className={style.header}> Claudio AI</div>
                <div className={style.screen}>
                    {loading ?
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        :
                        msg}
                </div>
                <div className={style.inputRow}>
                    <form onSubmit={submitHandler}>
                        <input
                            value={input}
                            onChange={changeHandler}
                            placeholder="scrivi un messaggio..."
                            disabled={loading}
                        />
                        <button
                            disabled={loading}
                        >
                            {loading ? "..." : "Invia"}
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default ChatCloude;