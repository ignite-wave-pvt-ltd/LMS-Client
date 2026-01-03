import { useState } from "react";
import {
  ArrowLeft,
  Play,
  RotateCcw,
  CheckCircle,
  XCircle,
  Code,
  Lightbulb,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CodePractice() {
  const [code, setCode] =
    useState(`function customReduce(arr, callback, initialValue) {
  // Write your code here
  
}`);
  const [activeTab, setActiveTab] = useState<
    "description" | "hints" | "solution"
  >("description");
  const [testResults, setTestResults] = useState<any>(null);
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();

  const problem = {
    title: "Implement Array.reduce() from Scratch",
    difficulty: "Medium",
    points: 100,
    topics: ["Arrays", "Higher-Order Functions", "JavaScript"],
    description: `Implement your own version of JavaScript's Array.reduce() method. Your function should take an array, a callback function, and an initial value, then return the accumulated result.

The callback function receives:
- accumulator (the accumulated value)
- currentValue (the current element)
- currentIndex (the current index)
- array (the original array)

Example:
\`\`\`javascript
const numbers = [1, 2, 3, 4];
const sum = customReduce(numbers, (acc, val) => acc + val, 0);
console.log(sum); // Output: 10
\`\`\``,
    examples: [
      {
        input: "customReduce([1, 2, 3, 4], (acc, val) => acc + val, 0)",
        output: "10",
        explanation: "Sum all numbers: 0 + 1 + 2 + 3 + 4 = 10",
      },
      {
        input: "customReduce([1, 2, 3], (acc, val) => acc * val, 1)",
        output: "6",
        explanation: "Multiply all numbers: 1 * 1 * 2 * 3 = 6",
      },
    ],
    constraints: [
      "The array can contain any type of values",
      "The callback function should receive all four parameters",
      "Handle edge cases like empty arrays",
    ],
  };

  const hints = [
    "Start with the initial value as your accumulator",
    "Loop through each element in the array",
    "Call the callback function with accumulator, current value, index, and array",
    "Update the accumulator with the result of each callback",
    "Return the final accumulator value",
  ];

  const handleRunCode = () => {
    setIsRunning(true);
    // Simulate running tests
    setTimeout(() => {
      setTestResults({
        passed: 3,
        total: 5,
        cases: [
          { name: "Test 1: Sum of numbers", passed: true, time: "12ms" },
          { name: "Test 2: Product of numbers", passed: true, time: "8ms" },
          { name: "Test 3: Array of objects", passed: true, time: "15ms" },
          {
            name: "Test 4: Empty array",
            passed: false,
            time: "5ms",
            error: "Expected undefined, got null",
          },
          {
            name: "Test 5: Single element",
            passed: false,
            time: "6ms",
            error: "Index parameter not passed correctly",
          },
        ],
      });
      setIsRunning(false);
    }, 1500);
  };

  const handleReset = () => {
    setCode(`function customReduce(arr, callback, initialValue) {
  // Write your code here
  
}`);
    setTestResults(null);
  };

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
                <h1 className="text-xl text-gray-900">{problem.title}</h1>
                <div className="flex items-center gap-3 mt-1">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      problem.difficulty === "Easy"
                        ? "bg-green-100 text-green-700"
                        : problem.difficulty === "Medium"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                  <span className="text-sm text-gray-600">
                    {problem.points} points
                  </span>
                  {problem.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2 disabled:opacity-50"
              >
                <Play className="w-4 h-4" />
                {isRunning ? "Running..." : "Run Code"}
              </button>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6 h-[calc(100vh-89px)]">
        <div className="grid grid-cols-2 gap-6 h-full">
          {/* Left Panel - Problem Description */}
          <div className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              {[
                { id: "description", label: "Description", icon: BookOpen },
                { id: "hints", label: "Hints", icon: Lightbulb },
                { id: "solution", label: "Solution", icon: Code },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 px-4 py-3 flex items-center justify-center gap-2 ${
                    activeTab === tab.id
                      ? "bg-gray-50 text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === "description" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg text-gray-900 mb-3">
                      Problem Description
                    </h3>
                    <p className="text-gray-700 whitespace-pre-line">
                      {problem.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-gray-900 mb-3">Examples</h3>
                    <div className="space-y-4">
                      {problem.examples.map((example, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                        >
                          <div className="mb-2">
                            <span className="text-sm text-gray-600">
                              Input:
                            </span>
                            <code className="block mt-1 text-sm text-gray-900 bg-white px-3 py-2 rounded border border-gray-200">
                              {example.input}
                            </code>
                          </div>
                          <div className="mb-2">
                            <span className="text-sm text-gray-600">
                              Output:
                            </span>
                            <code className="block mt-1 text-sm text-gray-900 bg-white px-3 py-2 rounded border border-gray-200">
                              {example.output}
                            </code>
                          </div>
                          <p className="text-sm text-gray-600">
                            {example.explanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg text-gray-900 mb-3">Constraints</h3>
                    <ul className="space-y-2">
                      {problem.constraints.map((constraint, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <ChevronRight className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                          <span>{constraint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "hints" && (
                <div className="space-y-4">
                  <h3 className="text-lg text-gray-900 mb-3">
                    Hints to Help You
                  </h3>
                  {hints.map((hint, i) => (
                    <div
                      key={i}
                      className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3"
                    >
                      <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-sm text-yellow-700">{i + 1}</span>
                      </div>
                      <p className="text-sm text-gray-700">{hint}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "solution" && (
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      💡 Try solving the problem yourself first before viewing
                      the solution. Learning happens through struggle!
                    </p>
                  </div>
                  <h3 className="text-lg text-gray-900">Solution</h3>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-sm text-gray-100 overflow-x-auto">
                      {`function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(
      accumulator,
      arr[i],
      i,
      arr
    );
  }
  
  return accumulator;
}`}
                    </pre>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-2">Explanation</h4>
                    <p className="text-sm text-gray-700">
                      This solution iterates through the array, calling the
                      callback function for each element with the accumulator,
                      current value, index, and original array. The accumulator
                      is updated with each iteration and returned at the end.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Code Editor */}
          <div className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="border-b border-gray-200 px-4 py-3 bg-gray-50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Code Editor</span>
                <span className="text-xs text-gray-500">JavaScript</span>
              </div>
            </div>

            {/* Code Editor */}
            <div className="flex-1 flex flex-col">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="flex-1 p-4 font-mono text-sm bg-gray-900 text-gray-100 resize-none focus:outline-none"
                style={{ tabSize: 2 }}
                spellCheck={false}
              />
            </div>

            {/* Test Results */}
            {testResults && (
              <div className="border-t border-gray-200 bg-gray-50 p-4 max-h-64 overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm text-gray-900">Test Results</h3>
                  <span
                    className={`text-sm ${
                      testResults.passed === testResults.total
                        ? "text-green-600"
                        : "text-orange-600"
                    }`}
                  >
                    {testResults.passed}/{testResults.total} Passed
                  </span>
                </div>
                <div className="space-y-2">
                  {testResults.cases.map((test: any, i: number) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border ${
                        test.passed
                          ? "bg-green-50 border-green-200"
                          : "bg-red-50 border-red-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          {test.passed ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-600" />
                          )}
                          <span
                            className={`text-sm ${
                              test.passed ? "text-green-900" : "text-red-900"
                            }`}
                          >
                            {test.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-600">
                          {test.time}
                        </span>
                      </div>
                      {!test.passed && test.error && (
                        <p className="text-xs text-red-700 mt-1 ml-6">
                          {test.error}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
