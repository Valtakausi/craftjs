"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zora_1 = require("zora");
zora_1.test('require', (t) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const module = require('./mock/a');
        t.ok(module, 'Require works');
        t.ok(module.local, 'Requiring local files works');
        t.ok(module.node1, 'Requiring node_modules with custom main-script works');
        t.ok(module.node2, `Requiring node_modules and defaulting to index.js works`);
        t.ok(module.java, 'Requiring java-packages works');
    }
    catch (e) {
        t.fail(e);
    }
});