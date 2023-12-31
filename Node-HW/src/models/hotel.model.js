const mongoose = require("mongoose");

/** hotel Schema */
const hotelSchema = new mongoose.Schema(
  {
    hotel_name: {
      type: String,
      trim: true,
    },
    hotel_address: {
      type: String,
      trim: true,
    },
    hotel_location: {
      type: String,
      trim: true,
    },
    hotel_service: {
      type: String,
      trim: true,
    },
    hotel_rating: {
        type: Number,
        default : 0
      },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

hotelSchema.pre("save", async function (next) {
  const hotel = this;

  //if (user.isModified("password")) {
    //user.password = bcrypt.hash(user.password, 8);
  //}
  next();
});

const Hotel = mongoose.model("hotels", hotelSchema);

module.exports = Hotel;