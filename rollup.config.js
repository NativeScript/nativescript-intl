import * as path from "path";
import * as fs from "fs";

class NsPathResolve {
    constructor(options){
        this.options = options;
    }
    resolveId(id, from){
        //console.log(`id: ${id}, from: ${from}`);
        if (from) {
            var filePath = path.join(path.dirname(from), `${id}.js`);
            //console.log(`filePath: ${filePath}`);
            if (!fs.existsSync(filePath)) {
                return path.join(path.dirname(from), `${id}.${process.env.PLATFORM}.js`);
            }
        }
    }
}

const nsPathResolve = (config) => new NsPathResolve(config);

export default {
    entry: "dist/package/index.js",
    dest: `dist/package/bundle.${process.env.PLATFORM}.js`,
    format: "cjs",
    sourceMap: "inline",
    treeshake: false,
    plugins: [
        nsPathResolve()
    ]
}
