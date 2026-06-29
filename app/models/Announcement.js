import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default
  mongoose.models.Announcement ||
  mongoose.model("Announcement", AnnouncementSchema);