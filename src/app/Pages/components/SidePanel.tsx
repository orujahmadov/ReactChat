import styled from 'styled-components';
import ContactTile from './ContactTile';
import { Contact } from './ContactTile'; 

interface Props {
    contacts: Contact[];
}

const StyledWrapper = styled.div`
    overflow: auto;
    position: fixed;
    width: 20%;
    height: 100%;
    box-shadow: 0 2px 6px 0 rgba(60,64,67,0.15);
`;

const UserInfoWrapper = styled.div`
    display: flex;
`;

const SidePanel = (props: Props) => {
    const { contacts } = props;

    return (
        <StyledWrapper>
            <h2>Messages</h2>
            {contacts.map(contact => {
                return (
                    <ContactTile 
                        username={contact.username} 
                        phone={contact.phone}
                    />
                )
            })}
        </StyledWrapper>
    )
}

export default SidePanel;