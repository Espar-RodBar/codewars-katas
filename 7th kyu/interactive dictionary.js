class Dictionary {
    constructor() {
        this.data = {};
    }

    newEntry(key, value) {
        // your code
        this.data[key] = value;
    }

    look(key) {
        // your code
        if (this.data[key]) return this.data[key];
        return `Can\'t find entry for ${key}`;
    }
}
