import styled from 'styled-components';

export interface Contact {
    username: string;
    phone: string;
}

const UserInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 20px;
    font-size: 20px;
    margin: 10px 0px;
`;

const ContactTile = (props: Contact) => {
    const { username, phone } = props;

    return (
        <UserInfoWrapper>{username}</UserInfoWrapper>
    );
}

export default ContactTile;