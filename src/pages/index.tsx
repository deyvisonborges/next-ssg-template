import { css, styled } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: none;
    padding: 1.5rem 1rem;
  `}
`

export default function Home() {
  return (
    <>
      <main>
        <p>Home page</p>
        <Button>teste</Button>
      </main>
    </>
  )
}
