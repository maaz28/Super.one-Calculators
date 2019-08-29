export function token_rewards(U, A, T) {
  return (U * A * 0.4 * T) / 2000000000
}

export function token_sale(U, A, T, PS) {
  return ((U * A * PS) / 2000000000) * T
}