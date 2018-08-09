class TwoFer {
  static twoFer( you: string = 'you' ) {
    you = you
    const MESSAGE: string = `One for ${you}, one for me.` // Another solution with concatenation: "One for " + you + ", one for me."
    return MESSAGE
  }
}

export default TwoFer
