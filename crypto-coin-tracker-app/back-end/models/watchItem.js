//Database schema for watch item 
const mongoose = require('mongoose');

const watchItemSchema = mongoose.Schema({
 symbol: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  marketCap: { type: Number, required: true },
  volume24h: { type: Number, required: true },
  percentChange24h: { type: Number, required: true }
});

const WatchItem = mongoose.model('WatchItem', watchItemSchema);

module.exports = WatchItem;


