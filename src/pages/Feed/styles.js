import styled from 'styled-components/native';

export const Post = styled.View`
  margin-top: 10px;
  background-color: #fff;
  border-radius: 25px;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 23px;
  margin-right: 9px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const PostImage = styled.Image`
  width: 90%;
  margin-left: 23px;
  border-radius: 20px;
  aspect-ratio: ${props => props.ratio};
  box-shadow: 25px 5px 5px #121212;
  border-color: #121212;
  background-color: #121212;
`;

export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
  margin-left: 10px;
`;
