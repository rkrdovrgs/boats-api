import * as fs from "fs";

export function configureRoutes(app) {
    let env = process.env.NODE_ENV || 'dev',
        ext = env === 'dev' ? '.ts' : '.js';

    fs.readdirSync("./api")
        .filter(f => f.endsWith(ext) && !f.startsWith("index."))
        .map(f => f.replace(".ts", ""))
        .forEach(file => {
            var route = require("./" + file);
            app.use(`/api/${file}`, route);
        });
};
