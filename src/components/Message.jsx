import './Message.scss'

const Message = ({ msg, type }) => {
    return (
        <div className={`message ${type}`}>
            <p>{msg}</p>
        </div>
    )
}

export default Message