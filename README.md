# jsonata-cli

Command Line Interface (CLI) for [JSONata](http://docs.jsonata.org).

JSONata is JSON query and transformation language. It's inspired by the location
'path' semantics of XPath. JSONata allows sophisticated queries to be expressed in
a compact and intuitive notation.

More about JSONata and it's capabilities can be find at it's [Getting started](http://docs.jsonata.org/overview)
or [Github](https://github.com/jsonata-js/jsonata) project page.

## Getting Started

### Installation

```sh
npm install -g jsonata-cli
```

### Usage

To get basic usage information run the following command:

```sh
jsonata-cli -h [--help]
```

Display the current version of the application:

```sh
jsonata-cli -v [--version]
```

#### Query JSON file

The command to query data from the JSON type file the command should be in the
following format.

```sh
jsonata-cli <query-expression> -f [--file] <JSON-file>
```

Where:
- `query-expression` - represent the JSONata location path syntax similar to XPath
- `JSON-file` - a file in JSON format

For the syntax of a query expression consult the [JSONata Documentation](http://docs.jsonata.org/overview).

**Examples:**

```sh
# list the scripts from package.json
jsonata-cli 'scripts' -f package.json

# count the number of dependencies
jsonata-cli '$sum($keys(dependencies))' -f package.json
```

#### Query JSON string

In the similar fashion to querying the file in JSON format the querying the
JSON string can be performed:

```sh
jsonata-cli <query-expression> <JSON-string>
```

- `query-expression` - represent the JSONata location path syntax similar to XPath
- `JSON-string` - a string in JSON format

**Examples:**

```sh
# this query will return Address element
jsonata-cli 'Address' '{"FirstName": "Fred", "Surname": "Smith", "Age": 28, "Address": { "Street": "Hursley Park", "City": "Winchester", "Postcode": "SO21 2JN"} }'

# this query will return: Fred from Winchester
jsonata-cli 'FirstName & " from " & Address.City ' '{"FirstName": "Fred", "Surname": "Smith", "Age": 28, "Address": { "Street": "Hursley Park", "City": "Winchester", "Postcode": "SO21 2JN"} }'

# returns the list of emails of type "work": [ 'fred.smith@my-work.com', 'fsmith@my-work.com' ]
jsonata-cli 'Email[type="work"].address' '{ "Email": [{"type": "work","address": ["fred.smith@my-work.com", "fsmith@my-work.com"]},{"type": "home","address": ["freddy@my-social.com", "frederic.smith@very-serious.com"]}] }'
````

The real power derive from using the pipe (|).

The following example will print the date of The Sant Joan holiday in Spain for
the year 2022 from a result of a public _Public Holiday API_ call.

```sh
curl https://date.nager.at/api/v3/publicholidays/2022/ES | xargs -0 -I %% jsonata-cli '$[localName="Sant Joan"].date' %%
```

## Development

### Clone the repository

```sh
git clone https://github.com/rubystream/jsonata-cli
```

If you plan to contribute to this project please read the [CONTRIBUTING](CONTRIBUTING.md) file first.

### Run tests

```sh
npm test
```
