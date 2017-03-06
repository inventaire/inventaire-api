#!/usr/bin/env node
var json = ''
process.stdin
.on('data', (buf)=> json += buf.toString())
.on('close', () => { process.stdout.write(JSON.stringify(JSON.parse(json))) })
