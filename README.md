# URL Store [![Travis CI Status](https://travis-ci.org/mymattcarroll/url-store.svg?branch=master)](https://travis-ci.org/mymattcarroll/url-store)

Qantas Challenge

## Internal Documentation

-   [Development](./docs/development.md)
-   [Deployment](./docs/deployment.md)

## Test

Assume the following helper objects are already defined in your environment, `request` and `db` with the following functions:

```
/*
* Performs a get request and returns a RequestReturnObject
*/
request.get(url: String): RequestReturnObject
```

```
/*
* Saves an arbitrary object in a NoSQL database
*/
db.save(obj: Object)
```

```
/*
* Find all objects whose attibute @attr matches the regular
* expression @what
*/
db.find(attr: String, what: RegExp)
```

1.  Define a minimal set of properties available in the `RequestReturnObject`. Eg: if we had to define the minimal properties in a `carObject` they could look like this:

    ```
    carObject:
      brand: String,
      color: String,
      engineSize: Int,
      drive: '2wd' | '4wd' | 'awd'
    ```

2.  Write a script/class that given 4 urls, it will send a request to each one of them and store the result in the database.

3.  Now, if a given url is in the `test.com` domain, also print the results to `stdout`. Eg:

    *   `http://site1.com/path` - save to db only
    *   `http://site2.com/path` - save to db only
    *   `http://test.com/path` - save to db and print

4.  Write a function that will find all urls in the database that tried to set a cookie when requested. Eg: back to the `carsObject` example, if we had to find all cars that are not `awd` we could do:

    ```
    function findAllNonAWDCars = {
      return db.find('drive',/(2|4)wd/);
    }
    ```

5.  using Create React App build a react application and update the UI using bootstrap

6.  create some json data either in a .json file, mongodb or firestore and use the apis you developed above to pull data from the database/file

7.  create a view in react that now displays data

8.  now write a search component that allows a user to search for records in the db/file.

9.  write a higher order component that does some validation on the search page before loading the data.
