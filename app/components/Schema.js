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

export const realm = new Realm({schema: [itemDatabase]});
