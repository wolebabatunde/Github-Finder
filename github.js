class Github {
    constructor() {
        this.client_id = 'f69da5b8afdd3ea4026f';
        this.client_secret = '3bafc4be1f55ec422a18cff58c6e1c7175545583';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/
        ${user}?client_id =${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}