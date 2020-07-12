"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zora_1 = require("zora");
zora_1.test('Basic variables', (t) => {
    t.ok(java.lang.System, 'java.lang.System exists');
    t.ok(__ctx, '__ctx exists');
    t.ok(__plugin, '__plugin exists');
    t.eq(server, org.bukkit.Bukkit, 'server is org.bukkit.Bukkit');
    t.eq(global, globalThis, 'global is globalThis');
    t.ok(typeof require === 'function', 'require is a function');
    t.ok(typeof setTimeout === 'function', 'setTimeout is a function');
    t.ok(typeof setInterval === 'function', 'setInterval is a function');
});