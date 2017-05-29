import React, { Component } from 'react';
import Realm from 'realm';

class itemDatabase {}
itemDatabase.schema = {
  name: 'ItemDB',
  primaryKey: 'id',
  properties: {
    id: {type: 'string'},
    itemName: {type: 'string'},
    expirationDate: {type: 'date'},
    createdTimestamp: {type: 'date'}
  }
};

class usageDatabase {}
usageDatabase.schema = {
  name: 'UsageDB',
  primaryKey: 'id',
  properties: {
    id: {type: 'int', default: 1},
    binned: {type: 'int', default: 0},
    eaten: {type: 'int', default: 0}
  }
}

export const realm = new Realm({schema: [itemDatabase, usageDatabase]});
