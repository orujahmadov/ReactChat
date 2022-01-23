import MessageTile from './MessageTile';
import InputBox from './InputBox';

import { Message } from '../redux/reducer';
import styled from 'styled-components';
import moment from 'moment';
import { postMessage } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

interface Props {
    username: string;
    avatar: string;
    messages: Message[];
}

const StyledHeader = styled.div`
    background-color: white;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border: 1px solid lightgrey;
    font-size: 20px;
    box-shadow: 0 2px 6px 0 rgb(60 64 67 / 15%);
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 2;
`;

const MessagesBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px;
    min-height: calc(100vh - 140px);
    overflow: auto;
    margin-top: 50px;
    margin-bottom: 70px;

    .messages-on-right {
        margin-left: auto;
        background-color: rgb(220,248,198);
    }
`;

const Chat = (props: Props) => {
    const { username, avatar, messages } = props;

    const dispatch = useDispatch();
    const bottomDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bottomDivRef.current) {
            bottomDivRef.current.scrollIntoView();
        }
    }, [messages]);

    messages.sort((m1, m2) => {
        const time1 = moment(m1.timestamp).format("x");
        const time2 = moment(m2.timestamp).format("x");
        if (time1 > time2) {
            return 1;
        } else if ( time1 < time2) {
            return -1;
        } else {
            return 0;
        };
    });

    return (
        <>
            <StyledHeader><img src={avatar} />{username}</StyledHeader>
            <MessagesBox>
                {
                    messages.map(message => {
                        return (
                            <MessageTile 
                                key={message.id}
                                id={message.id}
                                body={message.body}
                                timestamp={message.timestamp}
                                username={message.username}
                            />
                        )
                    })
                }
                <div ref={bottomDivRef}></div>
            </MessagesBox>
            <InputBox handleSend={(text) => dispatch(postMessage({ username: '1', id: 999, body: text, timestamp: '2022-10-02'}))} />
        </>
    )
}

export default Chat;