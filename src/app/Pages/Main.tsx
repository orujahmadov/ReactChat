import styled from 'styled-components';

import Chat from "./components/Chat";
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from './redux/store';

const MainContentWrapper = styled.div`
    display: flex;
`;

const Main = () => {
    const selectMessages = (state: RootState) => state.messages;
    const messagesReducer = useSelector(selectMessages, shallowEqual);

    return (
        <MainContentWrapper>
            <Chat
                    avatar={"../app/user.png"}
                    username={'test2'}
                    messages={messagesReducer.messages}
                />
        </MainContentWrapper>
    )
}

export default Main;