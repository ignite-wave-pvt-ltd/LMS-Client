import {
  ChevronRight,
  Copy,
  Download,
  FileText,
  Lightbulb,
  Lock,
  Printer,
  Search,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheatSheets = () => {
  const [cheatSheetDay, setCheatSheetDay] = useState("dec-23");
  const navigate = useNavigate();
  // Cheat Sheet Data
  const cheatSheets: Record<string, any> = {
    "dec-21": {
      title: "JavaScript ES6+ & Async Programming",
      dayLabel: "Saturday, Dec 21",
      sections: [
        {
          title: "Arrow Functions",
          code: `// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Multiple lines
const multiply = (a, b) => {
  const result = a * b;
  return result;
};`,
          notes: "Arrow functions have implicit return for single expressions",
        },
        {
          title: "Destructuring",
          code: `// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age, ...others} = user;

// Function parameters
const greet = ({ name, age }) => {
  console.log(\`\${name} is \${age} years old\`);
};`,
          notes: "Extract values from arrays/objects into variables",
        },
        {
          title: "Promises & Async/Await",
          code: `// Promise
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await
async function getData() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}`,
          notes: "Async/await makes asynchronous code look synchronous",
        },
        {
          title: "Array Methods",
          code: `const numbers = [1, 2, 3, 4, 5];

// map - transform each element
numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter - select elements
numbers.filter(n => n > 2); // [3, 4, 5]

// reduce - combine to single value
numbers.reduce((sum, n) => sum + n, 0); // 15`,
          notes: "These methods return new arrays (except reduce)",
        },
      ],
    },
    "dec-22": {
      title: "React Fundamentals & Hooks",
      dayLabel: "Sunday, Dec 22",
      sections: [
        {
          title: "useState Hook",
          code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
          notes:
            "useState returns [value, setter]. Always use setter to update",
        },
        {
          title: "useEffect Hook",
          code: `import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchData().then(setData);
    
    return () => cleanup();
  }, []);
  
  return <div>{data}</div>;
}`,
          notes:
            "useEffect for side effects. Dependencies control when it runs",
        },
        {
          title: "Props & Components",
          code: `// Parent Component
function App() {
  return <Greeting name="Priya" age={25} />;
}

// Child Component
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>You are {age} years old</p>
    </div>
  );
}`,
          notes: "Props pass data from parent to child. They are read-only",
        },
      ],
    },
    "dec-23": {
      title: "Advanced React & Redux",
      dayLabel: "Monday, Dec 23 (Today)",
      sections: [
        {
          title: "Custom Hooks",
          code: `function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading };
}`,
          notes: 'Custom hooks must start with "use". Extract reusable logic',
        },
        {
          title: "useReducer Pattern",
          code: `const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'increment' });`,
          notes:
            "useReducer for complex state logic. Returns [state, dispatch]",
        },
        {
          title: "Context API",
          code: `const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Header</div>;
}`,
          notes: "Context provides global state without prop drilling",
        },
      ],
    },
  };

  const days = [
    { id: "dec-21", label: "Sat 21", fullDate: "Dec 21", hasCheatSheet: true },
    { id: "dec-22", label: "Sun 22", fullDate: "Dec 22", hasCheatSheet: true },
    {
      id: "dec-23",
      label: "Mon 23",
      fullDate: "Dec 23",
      isToday: true,
      hasCheatSheet: true,
    },
    { id: "dec-24", label: "Tue 24", fullDate: "Dec 24", hasCheatSheet: false },
  ];
  const currentCheatSheet = cheatSheets[cheatSheetDay];

  return (
    <div>
      {/* Cheat Sheet Modal */}

      <div className="fixed inset-0 z-50 flex">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Modal Content */}
        <div className="relative w-full h-full flex">
          {/* Enhanced Sidebar */}
          <div className="w-80 bg-linear-to-b from-gray-50 to-white border-r border-gray-200 flex flex-col overflow-y-auto shadow-xl">
            <div className="p-6 border-b border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900">Cheat Sheets</h3>
                  <p className="text-xs text-gray-500">
                    Quick reference library
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search topics..."
                  className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            <div className="flex-1 p-4">
              <div className="mb-4">
                <div className="text-xs text-gray-500 uppercase tracking-wide px-2 mb-2">
                  Available Sheets
                </div>
              </div>
              {days.map((day) => (
                <button
                  key={day.id}
                  onClick={() => day.hasCheatSheet && setCheatSheetDay(day.id)}
                  disabled={!day.hasCheatSheet}
                  className={`w-full text-left px-4 py-3 rounded-xl mb-2 transition-all ${
                    cheatSheetDay === day.id
                      ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-[1.02]"
                      : day.hasCheatSheet
                      ? "bg-white border border-gray-200 text-gray-900 hover:border-indigo-300 hover:shadow-md"
                      : "bg-gray-50 border border-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className={`text-sm ${
                            cheatSheetDay === day.id ? "font-medium" : ""
                          }`}
                        >
                          {day.label}
                        </div>
                        {day.isToday && (
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full ${
                              cheatSheetDay === day.id
                                ? "bg-white/20"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            Today
                          </span>
                        )}
                      </div>
                      {day.hasCheatSheet && (
                        <div
                          className={`text-xs ${
                            cheatSheetDay === day.id
                              ? "text-indigo-100"
                              : "text-gray-500"
                          }`}
                        >
                          {cheatSheets[day.id]?.sections?.length || 0} topics
                        </div>
                      )}
                    </div>
                    {!day.hasCheatSheet ? (
                      <Lock className="w-4 h-4" />
                    ) : (
                      <ChevronRight
                        className={`w-4 h-4 ${
                          cheatSheetDay === day.id ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>
                    {days.filter((d) => d.hasCheatSheet).length} Available
                  </span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span>
                    {days.filter((d) => !d.hasCheatSheet).length} Locked
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Enhanced */}
          <div className="flex-1 bg-gray-50 overflow-y-auto">
            {/* Header with Actions */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between z-10 shadow-sm">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl text-gray-900">
                    {currentCheatSheet.title}
                  </h2>
                  <div className="px-3 py-1 bg-linear-to-r from-indigo-100 to-purple-100 border border-indigo-200 rounded-full">
                    <span className="text-xs text-indigo-700">
                      {currentCheatSheet.sections.length} Topics
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {currentCheatSheet.dayLabel}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2 text-sm">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2 text-sm">
                  <Printer className="w-4 h-4" />
                  Print
                </button>
                <button
                  onClick={() => navigate("/home")}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all ml-2"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Content Sections */}
            <div className="px-8 py-6 space-y-6 max-w-5xl">
              {currentCheatSheet.sections.map((section: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  {/* Section Header */}
                  <div className="bg-linear-to-r from-gray-900 to-gray-800 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-linear-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-sm text-white">
                        {index + 1}
                      </div>
                      <h3 className="text-lg text-white">{section.title}</h3>
                    </div>
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all group">
                      <Copy className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  {/* Code Block */}
                  <div className="relative">
                    <div className="absolute top-3 right-3 z-10">
                      <button className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-all flex items-center gap-2 text-xs">
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </button>
                    </div>
                    <div className="bg-linear-to-br from-gray-900 to-gray-800 p-6 overflow-x-auto">
                      <pre className="text-sm text-gray-100 leading-relaxed font-mono">
                        <code>{section.code}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Notes Section */}
                  <div className="p-6 bg-linear-to-br from-blue-50 to-indigo-50">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Lightbulb className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-blue-700 uppercase tracking-wide mb-1">
                          Key Point
                        </div>
                        <p className="text-sm text-blue-900 leading-relaxed">
                          {section.notes}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Footer Tips */}
              <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-2">Pro Tips</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        • Practice these concepts in the coding playground
                      </li>
                      <li>• Review this cheat sheet before assignments</li>
                      <li>• Bookmark frequently used code snippets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheatSheets;
