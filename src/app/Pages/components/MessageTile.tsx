import styled from "styled-components";
import moment from 'moment';
import { Message } from "../redux/reducer";
import { myusername } from '../../config';

const MessageWrapper = styled.div`
    background-color: rgb(237,237,237);
    color: black;
    margin: 5px;
    border-radius: 10px;
    padding: 10px;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
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

const StyledAvatar = styled.img`
    position: absolute;
    left: 20px;
`;

interface MessageTileProp {
    message: Message;
    avatar?: any;
}

const MessageTile = (props: MessageTileProp) => {
    const { message, avatar } = props;

    return (
        <MessageWrapper className={myusername === message.username ? 'messages-on-right' : ''}>
            {avatar && <StyledAvatar width={'25px'} src={avatar} />}
            {message.body}
            <div className="messaget-timestamp">{moment(message.timestamp).format('MMMM Do')}</div>
        </MessageWrapper>
    )
}

export default MessageTile;