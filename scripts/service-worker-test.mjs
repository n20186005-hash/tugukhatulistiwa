import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const handlers={};
vm.runInNewContext(readFileSync('public/sw.js','utf8'),{self:{location:{origin:'https://tugukhatulistiwa.com'},addEventListener:(type,fn)=>handlers[type]=fn},URL,Response,fetch:async()=>{throw Error('offline');},caches:{match:async()=>undefined}});
let result;
handlers.fetch({request:{url:'https://tugukhatulistiwa.com/missing/',method:'GET',mode:'navigate'},respondWith:value=>result=value});
const response=await result;assert.equal(response.status,404);assert.match(response.headers.get('X-Robots-Tag'),/noindex/);
console.log('Offline unknown navigation: 404/noindex, no homepage substitution passed.');
