import * as React from 'react';
import styled from "styled-components";

export interface MessageProp {
    placeholder?: string;
    handleSend: (message: string) => void;
}

const InputBoxWrapper = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    border: 1px solid lightgrey;
    position: fixed;
    bottom: 0px;
`;

const StyledInput = styled.input`
    width: 100%;
    font-size: 16px;
`;

const StyledButton = styled.button`
    background-color: #0099cc;
    color: white;
    width: 85px;
    border: 0px;
    border-radius: 5px;
    font-size: 15px;
    height: 40px;
    margin: 15px;
    cursor: pointer;

    &:disabled {
        background-color: grey;
    }
`;

const InputBox = (props: MessageProp) => {
    const [text, setText] = React.useState('');

    const { placeholder } = props;
    const { handleSend } = props;

    const onSendClick = React.useCallback((e) => {
        setText('');
        handleSend(text.trim());
    }, [text]);

    return (
        <InputBoxWrapper>
            <StyledInput 
                value={text} 
                type="text" 
                placeholder={placeholder || "Type a message..."} 
                onChange={(e) => setText(e.target.value)}
            />
            <StyledButton
                onClick={onSendClick} 
                disabled={!text.trim()} 
                className="messaget-timestamp">Send
            </StyledButton>
        </InputBoxWrapper>
    )
}

export default InputBox;