/**
* Assignment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: { type: 'string', unique: true},
  	url: { type: 'string', unique: true},
  	dueAt: { type: 'datetime', unique: false}, //can have two assignments due at the same time = false //
  }
};

