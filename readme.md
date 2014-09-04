# get-safely [![NPM version](https://badge.fury.io/js/get-safely.svg)](http://badge.fury.io/js/get-safely)

Run a block of code safely and quietly.

    $ npm install get-safely

-------------
Module is originally created for converted SOAP apis that include many
optional attributes that are accessed by indexing.

    var get = require('get-safely');
    var result = get(function () {
        return some[0].data[0].thatMight.throw('errors');
    });

In the example above, if the data exists, then `result` will equal
the expected value. However, if an error occurs while accessing the
data, `result` will equal `undefined`.

---------
* See: https://www.npmjs.org/package/get-safely
* See: http://github.com/cobbdb/get-safely
* License: MIT
