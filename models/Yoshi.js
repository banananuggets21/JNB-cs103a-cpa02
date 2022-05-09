'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var YoshiSchema = Schema( {
  userId: ObjectId,
  name: String,
  age: Number,
  color: String,
  description:String,
  createdAt: Date,
} );

module.exports = mongoose.model( 'Yoshi', YoshiSchema );