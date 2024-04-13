import styled from 'styled-components';

const UploadStat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  width: 100%;

  padding: 10px 0px 10px 0px;
`;

export default UploadStat;
