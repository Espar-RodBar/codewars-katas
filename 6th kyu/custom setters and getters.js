function Archiver() {
    var temperature = null;
    var archive = [];
    //TODO: implement "Archiver" as a self-archiving object
    //...ensure that when "temperature" property is
    //...set, that the array returned by getArchive
    //...gets a log entry in the form of {date:,val:}
    Object.defineProperty(this, "temperature", {
        set: function (value) {
            const date = new Date();
            archive.push({ date: date, val: value });
        },
        get: function () {
            return archive[archive.length - 1]["val"];
        },
    });
    this.getArchive = function () {
        return archive;
    };
}
