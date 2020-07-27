import styled from "styled-components";
import { colors } from "../../styles/global";
import patternImage from "../../assets/orders/bottom-cover.svg";
import { device } from "../../styles/device";
const ProfileWrapper = styled.div`
  .layout-element {
    background: white;
    padding: 2em 2em;
    height: 100%;
    margin: 0;
    border-radius: 12px;
    @media (${device.tablet}) {
      padding: 2.5em 1.4em;
    }
  }
  .dark-card {
    border-radius: 12px;
    background-color: #4c4182;
    background-image: url(${patternImage});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }
`;

export default ProfileWrapper;
