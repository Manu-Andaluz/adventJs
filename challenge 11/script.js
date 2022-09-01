function shouldBuyFidelity(times) {
  let normalTicket = 12 * times
  let fidelityTicket = 250
  const discount = 0.75

  for (let i = 1; i <= times; i++) {
    fidelityTicket += 12 * Math.pow(0.75, i)
  }

  console.log(`fidely: ${fidelityTicket} -- normal: ${normalTicket}`)

  const shouldBuyIt = fidelityTicket < normalTicket

  return shouldBuyIt
}
