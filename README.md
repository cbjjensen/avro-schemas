# avro-schemas
This is a test repository for AVRO schemas

The idea behind this project is to set up a CICD/GITOPS pipeline for managing avro schemas. 

## GOALS:
1. Validate/PLAN AVRO Schema Changes on non-main branch push against configured schema registry
2. Publish/APPLY AVRO Schema Changes on main branch push to configured schema registry.
3. Publish Typescript/Java artifacts of the avro schemas as importable libraries.

## Development

### Validating avro schemas against Confluent Registry

```
docker run -v  "$(pwd)":/data domnikl/schema-registry-gitops plan --properties /data/gitops/configuration.properties /data/gitops/schema-registry.yml
```

### Publishing avro schemas to Confluent Registry

Run below command:
```
docker run -v  "$(pwd)":/data domnikl/schema-registry-gitops apply --properties /data/gitops/configuration.properties /data/gitops/schema-registry.yml
```

### Building Java Schema Entities Artifact

```
cd build-events-java
gradle build
```


### Building Typescript Entities Package

```
cd build-events-ts
yarn install
yarn build
```
