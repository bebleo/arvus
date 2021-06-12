import { readCSV, readJSON, unZipFromFile, writeJSON } from 'https://deno.land/x/flat@0.0.10/mod.ts';
import { download, Destination } from "https://deno.land/x/download/mod.ts";

const DATA_DIR = "./data"
const filename = Deno.args[0];

interface IndexItem {
    geography: string;
    refDate: string;
    value: number;
}

function indexItemsFromCSV(csv: Record<string, unknown>[]): IndexItem[] {
    const items: IndexItem[] = []
    csv.forEach(entry => {
        items.push({
            geography: String(entry["GEO"]),
            refDate: String(entry["REF_DATE"]),
            value: +String(entry["VALUE"])
        });
    });
    return items;
}

const json = await readJSON(filename);
if (json.status == "SUCCESS") {
    /* Continue with the processing */
    const destination: Destination = {
        file: "table.zip",
        dir: DATA_DIR
    };
    const zip = await download(json.object, destination);
    const unzip = await unZipFromFile("./" + zip.fullPath, DATA_DIR);
    const output = unzip ? "Table downloaded and unzipped!" : "Something went wrong!";
    console.log(output);

    /* Write the CSV to a json file for use */
    const csv = await readCSV(DATA_DIR + "/18100061.csv")
    const data = { 
        productID: "18100061",
        title: "Commercial Software Price Index",
        values: indexItemsFromCSV(csv) 
    };
    await writeJSON(DATA_DIR + "/18100061.json", data)

} else {
    throw new Error("Something wrong with download");
}
