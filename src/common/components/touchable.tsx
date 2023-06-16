import { ReactElement, ReactNode } from 'react'

type TouchableProps = {
  children: string | ReactElement | ReactNode
}

export function Touchable({ children }: TouchableProps) {
  return (
    <div className="cursor-pointer h-fit w-fit hover:brightness-90">
      {children}
    </div>
  )
}
