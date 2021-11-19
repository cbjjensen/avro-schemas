// tslint:disable
import { BaseAvroRecord } from "../BaseAvroRecord";

export interface myrecord2Interface {
    f1: string;
    f2: string;
    f3: string;
}

export class myrecord2 extends BaseAvroRecord implements myrecord2Interface {

    public f1: string = "green";
    public f2: string = "yellow";
    public f3: string = "RED";

    public static readonly subject: string = "myrecord2";
    public static readonly schema: object = {
    "type": "record",
    "name": "myrecord2",
    "namespace": "core",
    "fields": [
        {
            "default": "green",
            "name": "f1",
            "type": "string"
        },
        {
            "default": "yellow",
            "name": "f2",
            "type": "string"
        },
        {
            "default": "RED",
            "name": "f3",
            "type": "string"
        }
    ]
}

    public schema(): object {
        return myrecord2.schema;
    }

    public subject(): string {
        return myrecord2.subject;
    }
}
