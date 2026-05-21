import { useEffect, useState } from "react"

function ChatCloude() {

    const msg = 'Ciao come va?'

    const urlMioServer = `http://localhost:3000/claudio?msg=${msg}`

    const [messaggioClaude, setMessaggioClaude] = useState('')
    useEffect(() => {
        fetch(urlMioServer)
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json);
                setMessaggioClaude(json.messaggio)
            })
    }, [])

    return (
        <h1>{messaggioClaude}</h1>
    )
}
export default ChatCloude