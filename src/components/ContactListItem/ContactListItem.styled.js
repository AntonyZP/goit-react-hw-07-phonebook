import styled from '@emotion/styled'

export const ContactWrapper = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom:20px;
`;

export const ContactName = styled.p`
margin: 0;
margin-right: 20px;
font-size: 28px;
text-shadow: 1px 1px 0px lightgrey;
`;

export const ContactNumber = styled.span`
margin: 0;
margin-left: 150px;
font-size: 20px;
text-shadow: 1px 1px 0px lightgrey;
`;


export const DeleteButton = styled.button`
margin-top: 20px;
padding-top: 6px;
padding-bottom: 6px;
font-size: 14px;
color: #ffffff;
width: 100px;
background: #553E3E;
border: none;
border-radius: 7px;
box-shadow: 2px 3px 5px #3d3d3d;
cursor: pointer;
transition: all 100ms ease 0s;
&:hover,
&:focus {
  background: #7D5F49;
  box-shadow: 2px 7px 7px #7D5F49;;
`;