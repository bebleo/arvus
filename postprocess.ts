import { readJSON, unZipFromFile } from 'https://deno.land/x/flat@0.0.10/mod.ts'
import { download, Destination } from "https://deno.land/x/download/mod.ts";

const filename = Deno.args[0];
const json = await readJSON(filename);

if (json.status == "SUCCESS") {
    /* Continue with the processing */
    const destination: Destination = {
        file: "table.zip",
        dir: "./data"
    };
    const zip = await download(json.object, destination);
    // const unzip = await unZipFromFile(zip.fullPath, "./data");

} else {
    Error("Something wrong with download");
}
