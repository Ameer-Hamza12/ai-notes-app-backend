import mongoose from "mongoose";
import env from "../config/env.js";

const seedDatabase = async () => {
  try {
    await mongoose.connect(env.mongoUri);

    const TestCollection = mongoose.connection.collection("testCollection");

    const existing = await TestCollection.findOne({ name: "seed-test" });

    if (!existing) {
      await TestCollection.insertOne({
        name: "seed-test",
        createdAt: new Date(),
      });
      console.log("✅ Seed document inserted");
    } else {
      console.log("ℹ️ Seed document already exists");
    }
  } catch (error) {
    console.error("❌ Seed failed:", error.message);
  } finally {
    await mongoose.disconnect();
  }
};

seedDatabase();
