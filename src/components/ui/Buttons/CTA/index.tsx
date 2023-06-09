import { styled } from "styled-components";

export default function CtaButton({ children }: { children: string }) {
  return <CtaButtonStyle>{children}</CtaButtonStyle>;
}

const CtaButtonStyle = styled.button`
  background-color: var(--primary);
  box-shadow: 10px 7px 0px #00ebff;
  color: white;
  padding: 0.5rem 2.5rem;
  font-size: 1.25rem;
  font-weight: bold;

  border-radius: 0;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 15px 10px 0px #00ebff;
    translate: -2px -1px;
  }
  &:active {
    transition-duration: 30ms;
    box-shadow: 7px 5px 0px #00ebff;
    translate: 1px 1px;
  }

  @keyframes hoverEffect {
    100% {
    }
  }
`;
