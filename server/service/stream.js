/**
 * 
 *
  *
 * 
 * @version {1.0.0} - 2017/09/07 18:15
 * 
 * 
 */

 const Stream = require('stream');

const input = process.stdin;
const output = new Stream.Writable({
    write( chunk, encoding, cb){
        console.log(`${ chunk.length }`);
        cb();
    }
});

input.on('end', ()=> console.log('run is finished, sample!!') );

input.pipe(output);