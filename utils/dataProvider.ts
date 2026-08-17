///<reference types="node" />
import fs from "fs";
import { parse } from "csv-parse/sync";

export class DataProvider {


    /** Reads data from a JSON file and returns it.
     * @param filePath The path to the JSON file.
     * @returns The parsed JSON data.   
     */

    static getTestDataFromJSON(filePath: string) {
        let data:any = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    }

    
    //////////////////***********************///////////////////////

    /**
     * Reads data from a CSV file and returns it as an array of objects.
     * @param filePath The path to the CSV file.
     * @returns An array of objects representing the CSV data.
     */
    static getTestDataFromCSV(filePath: string) {
        let data:any = parse(fs.readFileSync(filePath), {columns: true,skip_empty_lines: true});
        return data;
    }
}