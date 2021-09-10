// This is only a sample file for how to setup a db model

const mongoose = require("mongoose");

const pluginSchema = mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
      minlength: 2,
      maxlength: 255,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      trim: true,
    },
    plugin_id: {
      type: String,
      required: true,
      default: false,
    },
    organization_id: {
      type: String,
      required: true,
      default: false,
    },
    user_id: {
      type: String,
      required: true,
      default: false,
    },
    group_name: {
      type: String,
      required: true,
      default: false,
    },
    show_group: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("plugin", pluginSchema);
