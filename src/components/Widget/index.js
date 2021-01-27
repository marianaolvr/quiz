import styled from "styled-components";

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    color: white;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: white;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  height: 36px;
  width: 283px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
`;

Widget.Input = styled.input`
  height: 38px;
  width: 281px;
  left: 1px;
  top: 1px;
  border-radius: 3.5px;
  bottom: 1px;

  background: ${({ theme }) => theme.colors.mainBg};
  border-radius: 3.5px;
`;

export default Widget;
