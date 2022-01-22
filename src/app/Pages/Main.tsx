import moment from 'moment';
import styled from 'styled-components';

import Chat from "./components/Chat";
import { Messages } from './data/messages';

const MainContentWrapper = styled.div`
    display: flex;
`;

const Main = () => {
    return (
        <MainContentWrapper>
            <Chat
                    avatar={"../app/user.png"}
                    username={'Namig'}
                    messages={Messages}
                />
        </MainContentWrapper>
    )
}

export default Main;