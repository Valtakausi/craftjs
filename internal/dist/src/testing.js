"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const java_io_1 = require("java.io");
function walk(file, callback) {
    if (!file.isDirectory()) {
        callback(file);
        return;
    }
    for (const f of file.listFiles()) {
        walk(f, callback);
    }
}
function runTests() {
    const baseDir = new java_io_1.File(__jsdir);
    const testFiles = [];
    walk(baseDir, (f) => {
        if (!f.getName().match(/\.test\.js$/g) ||
            f.getPath().match('node_modules') // Exclude tests of node_modules
        ) {
            return;
        }
        testFiles.push(f);
    });
    const ownPath = new java_io_1.File(__filename).toPath().getParent();
    testFiles.forEach((f) => {
        const relative = ownPath.relativize(f.toPath());
        require(`./${f.getPath()}`, '.');
    });
}
global.runTests = runTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQStCO0FBTS9CLFNBQVMsSUFBSSxDQUFDLElBQVUsRUFBRSxRQUE4QjtJQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1FBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNmLE9BQU87S0FDUjtJQUNELEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1FBQ2hDLElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDbkI7QUFDSCxDQUFDO0FBRUQsU0FBUyxRQUFRO0lBQ2YsTUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsTUFBTSxTQUFTLEdBQVcsRUFBRSxDQUFDO0lBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNsQixJQUNFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDbEMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxnQ0FBZ0M7VUFDbEU7WUFDQSxPQUFPO1NBQ1I7UUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFMUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3RCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMifQ==