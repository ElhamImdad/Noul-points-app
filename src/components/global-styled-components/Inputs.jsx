import styled from "styled-components";
import { colors } from "../../styles/global";
import { Checkbox, DatePicker, Input, Select } from "antd";

const { RangePicker } = DatePicker;
const { Search , TextArea} = Input;

export const PrimaryInput = styled(Input)`
  border: none;
  background: white;
  padding: 0.8em 0.8em;
  margin-top: 1em;
`;
export const PrimaryInputTextArea = styled(TextArea)`
  background: white;
  padding: 0.8em 0.8em;
  margin-top: 1em;
`;

export const ProfileInput = styled(Input)`
  background: white;
  padding: 0.6em 0.6em;
  margin-top: 0.74em;
`;

export const PasswordPrimaryInput = styled(Input.Password)`
  border: none;
  background: white;
  padding: 0.8em 0.8em;
  margin-top: 1em;
  input:hover,
  input:focus {
    border: none !important;
    box-shadow: none !important;
  }
`;
export const RangePickerPrimary = styled(RangePicker)`
  input:hover,
  input:focus {
    border: none !important;
    box-shadow: none !important;
  }
  @media (max-width: 768px) {
 .ant-picker-panel-container .ant-picker-panels {
    display: grid;
    flex-wrap: inherit;
    direction: ltr;
}
`;

export const PasswordBorderedPrimaryInput = styled(Input.Password)`
  background: white;
  padding: 0.8em 0.8em;
  margin-top: 1em;
  input:hover,
  input:focus {
    border: none !important;
    box-shadow: none !important;
  }
`;
export const InputSignUp = styled(Input)`
  border: none;
  //background: #f2f2f3;
  color: black;
  border-radius: 4px;
  padding: 0.8em 0.8em;
  margin-top: 0.5em;
  :focus,
  :hover {
    background: white;
    color: black;
  }
`;

export const SelectSignUp = styled(Select)`
  .ant-select-selection {
    background-color: #f2f2f3 !important;
    color: black;
    border-radius: 4px;
    padding: 0.8em 0.8em;
    margin-top: 0.5em;
    :focus,
    :hover {
      background: white;
      color: black;
    }
  }
`;

export const SelectSignUp2 = styled.select`
  .ant-select-selection {
    border: none;
    background: #f2f2f3;
    color: black;
    border-radius: 4px;
    padding: 0.8em 0.8em;
    margin-top: 0.5em;
    :focus,
    :hover {
      background: white;
      color: black;
      display: block;
      width: inherit;
    }
  }
`;

export const StyledSearch = styled(Search)`
  .ant-input {
    &:hover,
    :active,
    :focus {
      border: none !important ;
      outline: 0;
      box-shadow: none;
    }
  }
  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const MyCheckBox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${colors.color_primary};
    border-color: ${colors.color_primary};
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
  }
`;
