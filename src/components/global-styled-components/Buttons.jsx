import styled from "styled-components";
import { colors } from "../../styles/global";
import { Button } from "antd";
import { device } from "../../styles/device";

export const PrimaryMenuButton = styled(Button)`
  color: white;
  width: -webkit-fill-available;
  margin: 1em 1.5em 3em 1.5em;
  background-color: ${colors.color_primary};
  font-weight: 600;
  border-radius: 4px;
  font-size: 8pt;
  width: available;
  border: none;
  :hover {
    color: white;
    background-color: ${colors.lightPurple};
    outline: none;
    border: none;
  }

  :focus,
  :active {
    color: white;
    background-color: ${colors.lightPurple};
    outline: ${colors.blue_light};
  }

  @media (${device.tablet}) {
    width: fit-content;
    margin: 1em 0;
    padding: 0 4em;
  }
`;

export const PrimaryButton = styled(Button)`
  color: white;
  background-color: ${colors.color_primary};
  font-weight: 600;
  color: white;
  padding: 0 2em;
  margin: 0 0.3em 0 0;
  border: none;
  height: 40px;
  border-radius: 4px;
  font-size: 0.9rem;
  vertical-align: middle;

  :hover {
    color: white;
    background-color: ${colors.lightPurple};
    outline: ${colors.blue_light};
    border-color: ${colors.lightPurple} !important;
  }

  :focus {
    color: white;
    background-color: ${colors.lightPurple};
    outline: ${colors.blue_light};
  }
`;

export const GhostButton = styled(Button)`
  color: white;
  background-color: transparent;
  font-weight: 600;
  color: ${colors.color_primary};
  padding: 0 2em;
  margin: 0 0.3em 0 0;
  border: solid 1px ${colors.color_primary};
  height: 40px;
  border-radius: 4px;
  font-size: 0.9rem;
  vertical-align: middle;

  :hover {
    color: ${colors.lightPurple};
    background: transparent !important;
    outline: ${colors.blue_light};
    border: solid 1px ${colors.lightPurple} !important;
  }

  :focus {
    color: white;
    outline: ${colors.blue_light};
  }
`;

export const GhostRadiusButton = styled(Button)`
  color: white;
  background-color: transparent;
  font-weight: 600;
  color: ${colors.color_primary};
  padding: 0 2em;
  margin: 0 0 1em 0;
  border: solid 1px ${colors.color_primary};
  height: 35px;
  :hover {
    color: ${colors.lightPurple};
    background: transparent !important;
    outline: ${colors.blue_light};
    border: solid 1px ${colors.lightPurple} !important;
  }

  :focus {
    color: ${colors.lightPurple};
    outline: ${colors.blue_light};
  }
`;

export const MenuTrigger = styled(Button)`
  color: white;
  background-color: ${colors.color_primary};
  font-weight: 600;
  color: white;
  padding: 0 0.8em;
  margin: 0.6em 0.3em 0 0;
  border: none;
  height: 40px;
  border-radius: 30px;
  font-size: 1rem;
  vertical-align: middle;
  :hover {
    color: white;
    background-color: ${colors.lightPurple};
    outline: ${colors.blue_light};
    border-color: ${colors.lightPurple} !important;
  }

  :focus {
    color: white;
    background-color: ${colors.lightPurple};
    outline: ${colors.blue_light};
  }
`;
