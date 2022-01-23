import styled from 'styled-components';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from './redux/store';

import Chat from "./components/Chat";
import userlogo from './user.png';

const MainContentWrapper = styled.div`
    display: flex;
`;

const Main = () => {
    const selectMessages = (state: RootState) => state.messages;
    const messagesReducer = useSelector(selectMessages, shallowEqual);

    return (
        <MainContentWrapper>
            <Chat
                avatar={userlogo}
                username={'test2'}
                messages={messagesReducer.messages}
            />
        </MainContentWrapper>
    )
}

export default Main;