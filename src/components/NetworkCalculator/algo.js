export function binary_reward_func_level2(R, V, level, SE, E25) {
  return (((R + Math.pow(R, 2))) * SE * E25)
}

export function binary_reward_func(R, V, level, SE, E25) {
  return (((R + Math.pow(R, 2)) + (Math.pow(R, 2) * Math.pow(V, level - 2))) * SE * E25)
}

export function unilevel_reward(R, V, level, SE, E25) {
  return (((R + Math.pow(R, 2)) * E25 * 25 * 0.1) + (((Math.pow(V, level - 2) * Math.pow(R, 2)) - Math.pow(R, 2)) * E25 * 25 * 0.02))
}   