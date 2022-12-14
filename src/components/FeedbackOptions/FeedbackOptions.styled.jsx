import styled from 'styled-components'

export const FeedBackList = styled.ul`
  width: 100%;
  display: flex;

`;

export const FeedBackItem = styled.li`
margin-left: 20px`;

export const FeedBackButton = styled.button`
  font-size: 20px;
  border-radius: 5px;
  border: none;
  padding: 5px 15px;
  cursor: pointer;

  background-color: ${props => {
    switch (props.name) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'yellow';
      case 'bad':
        return 'red';
      default:
        return 'blue';
    }
  }};
`;