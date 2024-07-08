import styled from "styled-components";
import pshLogo from "../../public/psh_brand.png";
import { Flex } from "./elements";
import { ITheme } from "../assets/theme/ITheme";
type ReactChatBannerProps = {
  theme: ITheme;
};

const Logo = styled.img`
  max-width: 60px;
  max-heigth: 60px;
`;
const ReactTitle = styled.h2<ReactChatBannerProps>`
  color: ${({ theme }) => theme.colors.white?.[900]};
`;
const BannerWrapper = styled(Flex)<ReactChatBannerProps>`
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.red?.[400]};
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;
function ReactChatBanner() {
  return (
    <BannerWrapper>
      <Logo src={pshLogo} alt="Banner psh" />
      <ReactTitle>React Chat</ReactTitle>
    </BannerWrapper>
  );
}

export default ReactChatBanner;
