const fs = require('fs');

const ipsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem mi, viverra ut molestie sed, egestas sit amet mi. In maximus nulla a nisi scelerisque pharetra. Aenean vel diam vitae est porta malesuada vel nec lorem. In hac habitasse platea dictumst. In elit dolor, convallis sed iaculis congue, porta ut lectus. Proin ultrices orci eget pulvinar dictum. Nam sollicitudin accumsan mauris et mollis. Cras cursus porttitor lacus, non hendrerit tortor hendrerit sed.

Phasellus velit magna, mattis pharetra est vitae, lobortis viverra nisl. Pellentesque id fermentum neque, sit amet tristique lorem. Nunc id malesuada enim, non pretium ante. Suspendisse pharetra laoreet purus non dignissim. Donec laoreet vitae odio in lobortis. Morbi nulla leo, placerat sed pharetra ac, condimentum nec odio. Aenean pulvinar vestibulum mauris ut semper. Vivamus vehicula libero quis mattis scelerisque. Phasellus consectetur ultricies velit vitae viverra. Etiam accumsan quam a libero consequat sodales. Proin a lorem sem. Curabitur lobortis sodales cursus.

Nam vel felis diam. Curabitur posuere, enim ac efficitur egestas, mauris dui ultricies lectus, in aliquet velit libero id mauris. Integer at aliquam turpis, quis molestie ligula. Suspendisse potenti. Duis felis metus, ullamcorper sed semper vitae, mollis et justo. Sed sit amet porta neque. Vestibulum eu massa nec turpis elementum mollis. Aliquam tristique ligula non lorem malesuada gravida. Vivamus et ligula maximus, accumsan ex vel, scelerisque nunc. Pellentesque vitae imperdiet leo, a vulputate ipsum. Fusce dictum vulputate finibus. Vivamus eu arcu felis. Sed iaculis sed mi ut congue.

Curabitur eu nisl id dui accumsan mattis ut ac purus. Integer in nisi et erat sodales placerat. Nam vehicula eros id elit ornare, nec pharetra justo sodales. Morbi lacus nulla, pharetra vel purus at, mattis tempus erat. Nam ultricies massa nec quam elementum iaculis. Aliquam erat volutpat. Vivamus consectetur nisi eget tincidunt rhoncus. Quisque a elit arcu. Maecenas facilisis tincidunt neque eu dignissim. Ut tristique iaculis sem, nec faucibus odio scelerisque vel.

Proin sit amet risus eu enim rutrum suscipit sed at libero. Donec eros metus, pharetra ut cursus vitae, cursus a felis. Cras at faucibus ex. Proin diam nulla, tempus a molestie vel, cursus a urna. Nunc vehicula laoreet ante quis condimentum. Aliquam semper non mi ut consectetur. Proin a auctor odio, ac feugiat velit. Aenean euismod facilisis felis. Ut laoreet dapibus dui, a egestas lacus lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet posuere fringilla. Praesent vel eros lacus. Proin sit amet est quis risus iaculis bibendum id at mauris. Aliquam scelerisque elementum bibendum. Morbi viverra, metus vel dapibus dignissim, est ipsum accumsan augue, et pretium felis felis mattis metus.
`;
for (var i = 0; i < 100; i++) {
  fs.writeFileSync(`output/${i}.txt`, ipsum + i);
}

/*
tar c output/*.txt|xz --lzma2=dict=128M,mode=fast > 0.tar.xz
tar -xJ --extract --file=0.tar.xz output/0.txt
*/
