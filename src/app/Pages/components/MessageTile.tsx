import styled from "styled-components";
import moment from 'moment';
import { Message } from "../redux/reducer";

const MessageWrapper = styled.div`
    background-color: rgb(237,237,237);
    color: black;
    margin: 5px;
    border-radius: 10px;
    padding: 10px;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    width: fit-content;
    width: 40%;
    min-width: 250px;
    overflow-wrap: break-word;

    & {
        .messaget-timestamp {
            font-weight: 700;
            margin-top: 10px;
            color: rgb(0,0,0,0.45);
        }
    }
`;

const MessageTile = (props: Message) => {
    const { body, timestamp, username } = props;
    const myusername = "1";

    return (
        <MessageWrapper className={myusername === username ? 'messages-on-right' : ''}>
            {body}
            <div className="messaget-timestamp">{moment(timestamp).format('MMMM Do')}</div>
        </MessageWrapper>
    )
}

export default MessageTile;