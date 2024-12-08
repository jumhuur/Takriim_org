import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Hadaf: {
      type: String,
      required: true,
    },
    Macluumaad: {
      type: String,
      required: true,
    },

    Tabaruc: {
      type: Number,
      required: true,
    },

    Qayb: {
      type: String,
      required: true,
    },
    Sawir: {
      type: String,
      required: true,
    },
    Muuqaal: {
      type: String,
      required: true,
    },
    Active: {
      type: Boolean,
      require: true,
    },
  },
  { timestamps: true }
);

// samaynta mashruuc
ProjectsSchema.statics.Addpro = async function (
  Name,
  Hadaf,
  Macluumaad,
  Tabaruc,
  Qayb,
  Sawir,
  Muuqaal,
  Active
) {
  const Project = await this.create({
    Name,
    Hadaf,
    Macluumaad,
    Tabaruc,
    Qayb,
    Sawir,
    Muuqaal,
    Active,
  });
  return Project;
};

export const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectsSchema);
