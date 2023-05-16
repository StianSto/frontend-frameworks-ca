import { styled } from "styled-components";

export default function Footer() {
  const date = new Date();

  return (
    <FooterStyled>
      <p>&copy; Stian Stordal {date.getFullYear()}</p>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  background-color: var(--bg-primary);
  min-height: 40px;
  padding: 1rem;
  margin-top: auto;
`;
