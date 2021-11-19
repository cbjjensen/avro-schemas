// tslint:disable
import { BaseAvroRecord } from "../BaseAvroRecord";
import { CrudOperation } from "./CrudOperationEnum";

export interface servicesInterface {
    op: CrudOperation;
    id: string;
    version: number;
    departmentName: string;
    isVisible: boolean;
    maxAllowedPaymentAmount: number;
    organizationFiscalCode: string;
    organizationName: string;
    requireSecureChannels: boolean;
    serviceId: string;
    serviceName: string;
    metadata_scope: string;
    metadata_address: string;
    metadata_appAndroid: string;
    metadata_appIos: string;
    metadata_cta: string;
    metadata_description: string;
    metadata_email: string;
    metadata_pec: string;
    metadata_phone: string;
    metadata_privacyUrl: string;
    metadata_supportUrl: string;
    metadata_tokenName: string;
    metadata_tosUrl: string;
    metadata_webUrl: string;
}

export class services extends BaseAvroRecord implements servicesInterface {

    public op!: CrudOperation;
    public id: string = "undefined";
    public version: number = 0;
    public departmentName: string = "undefined";
    public isVisible: boolean = false;
    public maxAllowedPaymentAmount: number = 0;
    public organizationFiscalCode: string = "undefined";
    public organizationName: string = "undefined";
    public requireSecureChannels: boolean = false;
    public serviceId: string = "undefined";
    public serviceName: string = "undefined";
    public metadata_scope: string = "undefined";
    public metadata_address: string = "undefined";
    public metadata_appAndroid: string = "undefined";
    public metadata_appIos: string = "undefined";
    public metadata_cta: string = "undefined";
    public metadata_description: string = "undefined";
    public metadata_email: string = "undefined";
    public metadata_pec: string = "undefined";
    public metadata_phone: string = "undefined";
    public metadata_privacyUrl: string = "undefined";
    public metadata_supportUrl: string = "undefined";
    public metadata_tokenName: string = "undefined";
    public metadata_tosUrl: string = "undefined";
    public metadata_webUrl: string = "undefined";

    public static readonly subject: string = "services";
    public static readonly schema: object = {
    "name": "services",
    "type": "record",
    "namespace": "dto",
    "doc": "Kafka JS schema for cosmos api container 'services'",
    "fields": [
        {
            "name": "op",
            "type": {
                "type": "enum",
                "name": "CrudOperation",
                "symbols": [
                    "CREATE",
                    "UPDATE",
                    "REMOVE"
                ]
            }
        },
        {
            "name": "id",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "version",
            "type": "int",
            "default": 0
        },
        {
            "name": "departmentName",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "isVisible",
            "type": "boolean",
            "default": false
        },
        {
            "name": "maxAllowedPaymentAmount",
            "type": "int",
            "default": 0
        },
        {
            "name": "organizationFiscalCode",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "organizationName",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "requireSecureChannels",
            "type": "boolean",
            "default": false
        },
        {
            "name": "serviceId",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "serviceName",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_scope",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_address",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_appAndroid",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_appIos",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_cta",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_description",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_email",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_pec",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_phone",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_privacyUrl",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_supportUrl",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_tokenName",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_tosUrl",
            "type": "string",
            "default": "undefined"
        },
        {
            "name": "metadata_webUrl",
            "type": "string",
            "default": "undefined"
        }
    ]
}

    public schema(): object {
        return services.schema;
    }

    public subject(): string {
        return services.subject;
    }
}
