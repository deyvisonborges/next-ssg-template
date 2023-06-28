/**
 * @param value
 * @description
 * ```md
 * pass for example: 10 or "10px"
 * ```
 * @returns
 * this function return a number
 */

export function pxTo(type: 'rem' | 'em', value: number | string): string {
  // this is equal to 1px
  const BASE_VALUE = 0.0625
  let sumValue: number | string = '' || 0

  // reusable render
  function render(value: number) {
    return `${value * BASE_VALUE}${type}`
  }

  // if is a number
  if (typeof value === 'number') sumValue = value

  // if is a string
  if (typeof value === 'string') {
    const hydratedValue = Number(String(value).replace('px', ''))
    sumValue = hydratedValue
  }
  return render(sumValue)
}
