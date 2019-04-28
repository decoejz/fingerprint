const mongoose = require('mongoose');

const Computer = new mongoose.Schema(
  {
    body: {
      type: mongoose.Schema.Types.Mixed
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Computer', Computer);
