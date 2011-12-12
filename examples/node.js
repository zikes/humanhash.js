var HumanHash = require('../humanhash').HumanHash;

console.log(HumanHash.humanize("098f6bcd4621d373cade4e832627b4f6",2));
console.log(HumanHash.humanize("ad0234829205b9033196ba818f7a872b",3));
console.log(HumanHash.humanize("8ad8757baa8564dc136c1e07507f4a98",4));
console.log(HumanHash.humanize("86985e105f79b95d6bc918fb45ec7727",5));
console.log(HumanHash.humanize("e3d704f3542b44a621ebed70dc0efe13",6," "));