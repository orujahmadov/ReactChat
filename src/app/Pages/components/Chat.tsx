import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import MessageTile from './MessageTile';
import InputBox from './InputBox';
import { Message } from '../redux/reducer';
import { postMessage } from '../redux/actions';
import { myusername } from '../../config';

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
    margin: 50px 40px 70px;

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

    const handleSend = useCallback((text) => {
        dispatch(postMessage(
            { 
                id: uuidv4(), 
                username: myusername, 
                body: text, 
                timestamp: moment().toString()
            }
        ));
    }, []);

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

    const lastMessage = messages.filter(message => message.username != myusername).slice(-1)[0];

    return (
        <>
            <StyledHeader><img style={{verticalAlign: 'middle'}} width={'30px'} src={avatar} />&nbsp;<span>{username}</span></StyledHeader>
            <MessagesBox>
                {
                    messages.map(message => {
                        return (
                            <MessageTile 
                                key={message.id}
                                message={message}
                                avatar={lastMessage.id === message.id ? avatar : null}
                            />
                        )
                    })
                }
                <div ref={bottomDivRef}></div>
            </MessagesBox>
            <InputBox 
                handleSend={handleSend}
            />
        </>
    )
}

export default Chat;