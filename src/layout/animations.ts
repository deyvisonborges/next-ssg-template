import { keyframes } from 'styled-components'

export const appearFromRight = keyframes`
from {
  opacity: 0;
  transform: translateX(400px);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`

export const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-300px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`
