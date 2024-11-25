"use server";
import axios from "axios";

export async function getResponse(question: string, collectionName: string) {
  try {
    const response = await axios.post(
      "http://172.20.253.133:8880/getResponse",
      {
        question,
        collectionName,
      },
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Get practice 5 quiz question for student

export async function getPracticeQuiz(
  question: string,
  collectionName: string,
) {
  try {
    const response = await axios.post(
      "http://172.20.253.133:8880/getPracQuiz",
      {
        collectionName,
        question,
      },
    );

    return response.data;
  } catch (e) {
    console.error(e);
  }
}

// Get practice 10 quiz question for teacher

export async function getQuiz(question: string, collectionName: string) {
  try {
    const response = await axios.post("http://172.20.253.133:8880/getQuiz", {
      collectionName,
      question,
    });

    return response.data;
  } catch (e) {
    console.error(e);
  }
}
