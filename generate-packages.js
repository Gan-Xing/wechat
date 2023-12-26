const fs = require("fs");

// 读取当前的 package.json
const packageJson = require("./package.json");

const packageDev = { ...packageJson };

const packageTurbodev = { ...packageJson };
delete packageTurbodev.devDependencies;

// 写入到文件
fs.writeFileSync(
  "packageturbodev.json",
  JSON.stringify(packageTurbodev, null, 2),
);
fs.writeFileSync("packagedev.json", JSON.stringify(packageDev, null, 2));
