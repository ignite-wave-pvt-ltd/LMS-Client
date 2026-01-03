import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Clock,
  ChevronLeft,
  ChevronRight,
  Flag,
  CheckCircle,
  Circle,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type Page =
  | "landing"
  | "student-dashboard"
  | "live-class"
  | "mcq-test"
  | "code-practice"
  | "weekly-assignment"
  | "progress"
  | "instructor-dashboard";

interface MCQTestProps {
  onNavigate: (page: Page) => void;
}

const questions = [
  {
    id: 1,
    question: "What is the primary purpose of MongoDB aggregation pipelines?",
    options: [
      "To create database indexes automatically",
      "To process and transform data through multiple stages",
      "To handle user authentication",
      "To manage database connections",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "Which aggregation stage should typically be used first for performance optimization?",
    options: ["$project", "$sort", "$match", "$group"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question:
      "In React, what hook is used to manage complex state logic with reducers?",
    options: ["useState", "useEffect", "useReducer", "useContext"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "What does the $group stage in MongoDB aggregation do?",
    options: [
      "Filters documents based on criteria",
      "Sorts documents in a collection",
      "Groups documents by a specified field and performs operations",
      "Limits the number of documents returned",
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "Which MongoDB operator is used to match values in an array?",
    options: ["$in", "$match", "$find", "$search"],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "What is the purpose of indexing in MongoDB?",
    options: [
      "To make the database larger",
      "To improve query performance",
      "To encrypt data",
      "To create backups",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: 'In the MERN stack, what does the "E" stand for?',
    options: ["Electron", "Express", "Ember", "Elastic"],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "What is the default port for MongoDB?",
    options: ["3000", "8080", "27017", "5432"],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "Which method is used to find a single document in MongoDB?",
    options: ["findOne()", "find()", "search()", "get()"],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "What does BSON stand for in MongoDB?",
    options: ["BasicSON", "Binary JSON", "Better SON", "Backend JSON"],
    correctAnswer: 1,
  },
  {
    id: 11,
    question:
      "Which aggregation stage reshapes documents by adding, removing, or renaming fields?",
    options: ["$match", "$group", "$project", "$sort"],
    correctAnswer: 2,
  },
  {
    id: 12,
    question: "What is Mongoose in the context of MongoDB?",
    options: [
      "A database management tool",
      "An ODM (Object Data Modeling) library for MongoDB",
      "A MongoDB GUI client",
      "A backup utility",
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    question: "Which React hook is used for side effects?",
    options: ["useState", "useEffect", "useContext", "useMemo"],
    correctAnswer: 1,
  },
  {
    id: 14,
    question: "What is the purpose of the $lookup stage in aggregation?",
    options: [
      "To filter documents",
      "To perform joins between collections",
      "To create indexes",
      "To sort results",
    ],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: "In MongoDB, what is a collection equivalent to in SQL?",
    options: ["Database", "Table", "Row", "Column"],
    correctAnswer: 1,
  },
];

export default function MCQTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [flagged, setFlagged] = useState<boolean[]>(
    Array(questions.length).fill(false)
  );
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleFlag = () => {
    const newFlagged = [...flagged];
    newFlagged[currentQuestion] = !newFlagged[currentQuestion];
    setFlagged(newFlagged);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const answeredCount = answers.filter((a) => a !== null).length;
  const flaggedCount = flagged.filter((f) => f).length;

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
            <div
              className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
                percentage >= 70 ? "bg-green-100" : "bg-orange-100"
              }`}
            >
              <CheckCircle
                className={`w-10 h-10 ${
                  percentage >= 70 ? "text-green-600" : "text-orange-600"
                }`}
              />
            </div>
            <h1 className="text-3xl text-gray-900 mb-2">Quiz Completed!</h1>
            <p className="text-gray-600 mb-8">
              MongoDB & Mongoose Deep Dive Quiz
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl text-gray-900 mb-1">
                  {score}/{questions.length}
                </div>
                <div className="text-sm text-gray-600">Correct Answers</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6">
                <div className="text-3xl text-indigo-600 mb-1">
                  {percentage}%
                </div>
                <div className="text-sm text-gray-600">Score</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl text-gray-900 mb-1">
                  {formatTime(20 * 60 - timeLeft)}
                </div>
                <div className="text-sm text-gray-600">Time Taken</div>
              </div>
            </div>

            <div className="mb-8">
              {percentage >= 90 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800">
                    🎉 Excellent work! You've mastered this topic.
                  </p>
                </div>
              )}
              {percentage >= 70 && percentage < 90 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800">
                    👍 Good job! You're on the right track.
                  </p>
                </div>
              )}
              {percentage < 70 && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-orange-800">
                    📚 Review the material and try again. You'll do better next
                    time!
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => navigate("/home")}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Back to Dashboard
              </button>
              <button
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setAnswers(Array(questions.length).fill(null));
                  setTimeLeft(20 * 60);
                }}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/home")}
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-xl text-gray-900">
                  MongoDB & Mongoose Deep Dive Quiz
                </h1>
                <p className="text-sm text-gray-600">
                  15 questions • 20 minutes
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  timeLeft < 300
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <Clock className="w-5 h-5" />
                <span className="text-lg">{formatTime(timeLeft)}</span>
              </div>
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-4 gap-8">
          {/* Question Navigation */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-sm text-gray-900 mb-4">Question Navigator</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm relative ${
                      index === currentQuestion
                        ? "bg-indigo-600 text-white"
                        : answers[index] !== null
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {index + 1}
                    {flagged[index] && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-sm text-gray-900 mb-4">Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Answered</span>
                    <span className="text-gray-900">
                      {answeredCount}/{questions.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 rounded-full h-2 transition-all"
                      style={{
                        width: `${(answeredCount / questions.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-200">
                  <span className="text-gray-600">Flagged</span>
                  <span className="text-orange-600">{flaggedCount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Question Area */}
          <div className="col-span-3">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              {/* Question Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600">
                      {currentQuestion + 1}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-sm text-gray-600">
                      Question {currentQuestion + 1} of {questions.length}
                    </h2>
                    <p className="text-xs text-gray-500">Single Choice</p>
                  </div>
                </div>
                <button
                  onClick={handleFlag}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                    flagged[currentQuestion]
                      ? "bg-orange-100 text-orange-600"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Flag className="w-4 h-4" />
                  {flagged[currentQuestion] ? "Flagged" : "Flag"}
                </button>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-xl text-gray-900 mb-6">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        answers[currentQuestion] === index
                          ? "border-indigo-600 bg-indigo-50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            answers[currentQuestion] === index
                              ? "border-indigo-600 bg-indigo-600"
                              : "border-gray-300"
                          }`}
                        >
                          {answers[currentQuestion] === index && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span
                          className={`text-sm ${
                            answers[currentQuestion] === index
                              ? "text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          {option}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <button
                  onClick={() =>
                    setCurrentQuestion(Math.max(0, currentQuestion - 1))
                  }
                  disabled={currentQuestion === 0}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                    currentQuestion === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                {answers[currentQuestion] === null && (
                  <div className="flex items-center gap-2 text-sm text-orange-600">
                    <AlertCircle className="w-4 h-4" />
                    Please select an answer
                  </div>
                )}

                <button
                  onClick={() =>
                    setCurrentQuestion(
                      Math.min(questions.length - 1, currentQuestion + 1)
                    )
                  }
                  disabled={currentQuestion === questions.length - 1}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                    currentQuestion === questions.length - 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
