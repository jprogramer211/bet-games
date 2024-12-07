class User {
    constructor (wins) {
        this.initialCoins = 500
        this.currentCoins = this.initialCoins
        this.wins = wins
    }
    addWin(isWin) {
        if (isWin) {
            this.wins++
        }
    }
    addCoins(isWin) {
        if (isWin) {
            this.coins += 100
        }
    }
}

module.exports = {
    User
}