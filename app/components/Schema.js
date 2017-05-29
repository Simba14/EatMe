import React, { Component } from 'react';
import Realm from 'realm';

export class Database {
  static get () { return realm.objects(Database.schema.name) }
  static schema = {
    name: 'ItemDB',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      itemName: {type: 'string'},
      expirationDate: {type: 'date'},
      createdTimestamp: {type: 'date'}
    }
  }
}

export const realm = new Realm({schema: [Database]});
