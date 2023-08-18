const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
    {
        first_name: {
             type: String,
             trim: true,
             required: true,
        },
        last_name: {
             type: String,
             trim: true,
             required: true,
        },
        age: {
             type: Number,
             required: true,
        },
        email: {
             type: String,
             trim: true,
        },
        password: {
             type: String
        },
        is_active: {
             type: Boolean,
             default: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

// userSchema.pre("save", async function (next) {
//      const user = this;

//      if (user.isModified("password")) {
//        user.password = bcrypt.hash(user.password, 8);
//      }
//      next();
//    });

const user = mongoose.model("Users", UserSchema);
module.exports = user;
