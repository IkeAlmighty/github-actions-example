import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";

import pythonQuestions from "./pythonQuestions.json" with { type: "json" };

db.once("open", async () => {
  try {
    await cleanDB("Question", "questions");
    console.log(pythonQuestions);
    const resp = await Question.insertMany(pythonQuestions);

    console.log(resp)

    console.log("Questions seeded!");
  } catch (err) {
    console.log(err);
  }
  process.exit(0);
});
