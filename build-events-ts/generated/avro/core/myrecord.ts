// tslint:disable
import { BaseAvroRecord } from "../BaseAvroRecord";

export interface myrecordInterface {
    f1: string;
    f2: string;
}

export class myrecord extends BaseAvroRecord implements myrecordInterface {

    public f1: string = "green";
    public f2: string = "red";

    public static readonly subject: string = "myrecord";
    public static readonly schema: object = {
    "type": "record",
    "name": "myrecord",
    "namespace": "core",
    "fields": [
        {
            "default": "green",
            "name": "f1",
            "type": "string"
        },
        {
            "default": "red",
            "name": "f2",
            "type": "string"
        }
    ]
}

    public schema(): object {
        return myrecord.schema;
    }

    public subject(): string {
        return myrecord.subject;
    }
}
