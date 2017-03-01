const fs = require('fs');

const data = fs.readFileSync('test.jpg');

for (var i = 0; i < 100; i++) {
  const buf = Buffer.alloc(40, i);
  fs.writeFileSync(
    `output/${i}.dat`,
    Buffer.concat([data, buf], data.length + buf.length)
  );
}

/*
tar c output/*.dat|xz --lzma2=dict=128M,mode=fast > 1.tar.xz
tar -xJ --extract --file=1.tar.xz output/1.dat
*/
