import { FC } from "react";
import styled from "styled-components";

import { Section, LiquidDistortion } from "~/components/common";
import { useWindowDimensions } from "~/hooks/windowDimensions";

const HeroDivider = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 0;
`;

const StyledHeroSection = styled(Section)``;

export interface HeroSectionProps {}

export const HeroSection: FC<HeroSectionProps> = ({ ...props }) => {
  const { isMobile } = useWindowDimensions();
  return (
    <StyledHeroSection full backgroundImage="/img/hero/hero-bg.jpg" {...props}>
      <LiquidDistortion
        text="TO HELP THE WEB3 ECOSYSTEM THRIVE"
        fontSize={isMobile ? 50 : 100}
      />
      <HeroDivider src="/img/hero/hero-bg-divider.png" />
    </StyledHeroSection>
  );
};
