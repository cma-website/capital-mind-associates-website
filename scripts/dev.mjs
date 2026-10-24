import {spawn} from 'node:child_process';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const incoming=process.argv.slice(2),args=[];
for(let i=0;i<incoming.length;i++){if(incoming[i]==='--strictPort')continue;args.push(incoming[i]==='--host'?'--hostname':incoming[i]);}
if(!args.includes('--hostname'))args.push('--hostname','0.0.0.0');
if(!args.includes('--port'))args.push('--port','4173');
const child=spawn(process.execPath,[require.resolve('next/dist/bin/next'),'dev','--webpack',...args],{stdio:'inherit'});
for(const signal of ['SIGTERM','SIGINT'])process.on(signal,()=>child.kill(signal));
child.on('exit',code=>process.exit(code??1));
