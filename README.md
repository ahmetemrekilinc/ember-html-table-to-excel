ember-html-table-to-excel
==============================================================================

[![npm version](https://badge.fury.io/js/ember-html-table-to-excel.svg)](https://badge.fury.io/js/ember-html-table-to-excel.svg)
[![downloads](https://img.shields.io/npm/dm/ember-html-table-to-excel.svg?style=flat-square)](https://img.shields.io/npm/dm/ember-html-table-to-excel.svg?style=flat-square)
[![Build Status](https://travis-ci.org/ahmetemrekilinc/ember-html-table-to-excel.svg?branch=master)](https://travis-ci.org/ahmetemrekilinc/ember-html-table-to-excel.svg?branch=master)
[![Ember Observer Score](https://emberobserver.com/badges/ember-html-table-to-excel.svg)](https://emberobserver.com/badges/ember-html-table-to-excel.svg)
[![Dependency Status](https://david-dm.org/ahmetemrekilinc/ember-html-table-to-excel.svg)](https://david-dm.org/ahmetemrekilinc/ember-html-table-to-excel.svg)
[![devDependency Status](https://david-dm.org/ahmetemrekilinc/ember-html-table-to-excel/dev-status.svg)](https://david-dm.org/ahmetemrekilinc/ember-html-table-to-excel/dev-status.svg)
[![Code Climate](https://codeclimate.com/github/ahmetemrekilinc/ember-html-table-to-excel/badges/gpa.svg)](https://codeclimate.com/github/ahmetemrekilinc/ember-html-table-to-excel/badges/gpa.svg)

ember-html-table-to-excel is an addon that converts html tables to Excel documents in your Ember.js application.
[ember-cli-data-export-with-style](https://github.com/ahmetemrekilinc/ember-cli-data-export) is used in background.

Installation
------------------------------------------------------------------------------

```
cd your-project-directory
ember install ember-html-table-to-excel
```

Usage
------------------------------------------------------------------------------

You can use as `ember-html-table-to-excel-button` component with `tableId` (and optional `fileName`, `sheetName` and `headerRows` (array)) parameters.
```hbs
{{#ember-html-table-to-excel-button
  tableId="my-custom-html-table-id"
  fileName=fileName
  sheetName=sheetName
  headerRows=headerRows
}}
  Export to Excel
{{/ember-html-table-to-excel-button}}
```

Checkout live examples at [ember-html-table-to-excel demo page](https://ahmetemrekilinc.github.io/ember-html-table-to-excel-demo/)

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
