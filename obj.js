class Path {
    constructor(name, old) {
            [
                this.data = new Date(),
                this.http = true,
                this.description = "API Jackson-Room",
                this.listUsers = [this.user1 = [name, old]],
                this.userQuant = this.listUsers.length
        ]
    }
}

module.exports = Path