import styled from '@emotion/styled'
import { Form, Field } from 'formik';

export const FormAdd = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  padding-bottom: 60px;
  box-shadow: 2px 3px 5px #3d3d3d;
  border-radius: 7px;
  background-color: #c9bfb9;
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  color: #010101;
  text-align: center;
  font-size: 36px;
`;

export const ContactInput = styled(Field)`
  margin-bottom: 16px;  
  width: 320px;
  padding: 4px 8px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px #4d4d4d;
  outline: transparent;
  border: none;
  font-size: 22px;
`;

export const AddButton = styled.button`
  margin-top: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 18px;
  color: #ffffff;
  width: 200px;
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
  }
`;

export const ErrorNote = styled.div`
  margin-bottom: 20px;  
  font-size: 22px;
  color: red;
`;