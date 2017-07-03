import * as fs from "fs";

export function configureRoutes(app) {
    fs.readdirSync("./api")
        .filter(f => f !== "index.ts")
        .map(f => f.replace(".ts", ""))
        .forEach(file => {
            var route = require("./" + file);
            app.use(`/api/${file}`, route);
        });
};
