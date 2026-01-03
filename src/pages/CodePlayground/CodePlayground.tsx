import { useState, useEffect, useRef, useCallback } from "react";
import {
  Play,
  RotateCcw,
  Monitor,
  Smartphone,
  Tablet,
  Settings,
  Maximize2,
  Download,
  Share2,
  Code2,
  Copy,
  Check,
  Save,
  Eye,
  EyeOff,
} from "lucide-react";

export function CodePlayground() {
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [html, setHtml] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Playground</title>
</head>
<body>
  <div class="container">
    <h1>Hello, World! 👋</h1>
    <p>Start coding to see your changes live!</p>
    <button id="myButton">Click Me</button>
    <div id="output"></div>
  </div>
</body>
</html>`);

  const [css, setCss] = useState(`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
}

h1 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
}

p {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
}

button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

#output {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
  border-left: 4px solid #667eea;
}`);

  const [js, setJs] =
    useState(`const button = document.getElementById('myButton');
const output = document.getElementById('output');

let clickCount = 0;

button.addEventListener('click', () => {
  clickCount++;
  output.innerHTML = \`<p>Button clicked \${clickCount} times! 🎉</p>\`;
  output.innerHTML += '<p>Try editing the code to see live changes!</p>';
  
  // Visual feedback
  button.style.transform = 'scale(0.95)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 100);
});

// Console logging for debugging
console.log('Code Playground initialized');
console.log('Button element:', button);
console.log('Output element:', output);`);

  const [deviceSize, setDeviceSize] = useState<
    "mobile" | "tablet" | "desktop" | "custom"
  >("desktop");
  const [customWidth, setCustomWidth] = useState(1200);
  const [customHeight, setCustomHeight] = useState(700);
  const [showSettings, setShowSettings] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(true);
  const [autoRun, setAutoRun] = useState(true);
  const [showConsole, setShowConsole] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const codeEditorRef = useRef<HTMLTextAreaElement>(null);

  // Device presets
  const devicePresets = {
    mobile: { width: 375, height: 667, label: "Mobile", icon: Smartphone },
    tablet: { width: 768, height: 1024, label: "Tablet", icon: Tablet },
    desktop: { width: 1200, height: 700, label: "Desktop", icon: Monitor },
    custom: {
      width: customWidth,
      height: customHeight,
      label: "Custom",
      icon: Maximize2,
    },
  };

  const currentDevice = devicePresets[deviceSize];

  // Handle console logs from iframe
  const handleIframeConsole = useCallback((message: string) => {
    setConsoleLogs((prev) => [...prev, message]);
  }, []);

  // Enhanced iframe content update
  const updateIframeContent = useCallback(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const document = iframe.contentDocument;

      if (!document) return;

      // Clear previous content
      document.open();

      // Create full HTML document with error handling
      const content = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              ${css}
              /* Error styling */
              .error-container {
                display: none;
                background: #fee;
                border: 1px solid #f99;
                border-radius: 4px;
                padding: 1rem;
                margin: 1rem 0;
                font-family: monospace;
                font-size: 14px;
                color: #c00;
              }
              .error-title {
                font-weight: bold;
                margin-bottom: 0.5rem;
              }
            </style>
          </head>
          <body>
            <div id="error-container" class="error-container"></div>
            ${html
              .replace("<!DOCTYPE html>", "")
              .replace(/<html[^>]*>/, "")
              .replace("</html>", "")
              .replace(/<head>[\s\S]*?<\/head>/, "")
              .replace(/<body[^>]*>/, "")
              .replace("</body>", "")
              .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")}
            <script>
              // Override console methods to capture logs
              const originalConsole = {
                log: console.log,
                error: console.error,
                warn: console.warn,
                info: console.info
              };
              
              const sendToParent = (method, args) => {
                window.parent.postMessage({
                  type: 'CONSOLE_LOG',
                  method: method,
                  args: args.map(arg => 
                    typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
                  ),
                  timestamp: new Date().toISOString()
                }, '*');
              };
              
              console.log = (...args) => {
                originalConsole.log(...args);
                sendToParent('log', args);
              };
              
              console.error = (...args) => {
                originalConsole.error(...args);
                sendToParent('error', args);
              };
              
              console.warn = (...args) => {
                originalConsole.warn(...args);
                sendToParent('warn', args);
              };
              
              console.info = (...args) => {
                originalConsole.info(...args);
                sendToParent('info', args);
              };
              
              // Error handling
              window.addEventListener('error', (e) => {
                const errorContainer = document.getElementById('error-container');
                if (errorContainer) {
                  errorContainer.innerHTML = \`
                    <div class="error-title">JavaScript Error:</div>
                    <div>\${e.message}</div>
                    <div>at \${e.filename}:\${e.lineno}:\${e.colno}</div>
                  \`;
                  errorContainer.style.display = 'block';
                }
                sendToParent('error', [e.message]);
              });
              
              // Execute user JavaScript with try-catch
              try {
                ${js}
              } catch (error) {
                const errorContainer = document.getElementById('error-container');
                if (errorContainer) {
                  errorContainer.innerHTML = \`
                    <div class="error-title">Execution Error:</div>
                    <div>\${error.message}</div>
                    <div>\${error.stack}</div>
                  \`;
                  errorContainer.style.display = 'block';
                }
                sendToParent('error', [error.message]);
              }
            </script>
          </body>
        </html>
      `;

      document.write(content);
      document.close();
    }
  }, [html, css, js]);

  // Handle iframe messages
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "CONSOLE_LOG") {
        const logMessage = `[${event.data.method.toUpperCase()}] ${event.data.args.join(
          " "
        )}`;
        handleIframeConsole(logMessage);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleIframeConsole]);

  // Auto-run on code change
  useEffect(() => {
    if (autoRun) {
      const timeoutId = setTimeout(updateIframeContent, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [html, css, js, autoRun, updateIframeContent]);

  // Handle custom size changes
  useEffect(() => {
    if (deviceSize === "custom") {
      devicePresets.custom.width = customWidth;
      devicePresets.custom.height = customHeight;
    }
  }, [customWidth, customHeight, deviceSize]);

  const handleRun = () => {
    setIsRunning(true);
    updateIframeContent();

    // Reset running state after animation
    setTimeout(() => setIsRunning(false), 300);
  };

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all code? This cannot be undone."
      )
    ) {
      setHtml(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Playground</title>
</head>
<body>
  <div class="container">
    <h1>Hello, World! 👋</h1>
    <p>Start coding to see your changes live!</p>
    <button id="myButton">Click Me</button>
    <div id="output"></div>
  </div>
</body>
</html>`);

      setCss(`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
}

h1 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
}

p {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
}

button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

#output {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
  border-left: 4px solid #667eea;
}`);

      setJs(`const button = document.getElementById('myButton');
const output = document.getElementById('output');

let clickCount = 0;

button.addEventListener('click', () => {
  clickCount++;
  output.innerHTML = \`<p>Button clicked \${clickCount} times! 🎉</p>\`;
  output.innerHTML += '<p>Try editing the code to see live changes!</p>';
  
  // Visual feedback
  button.style.transform = 'scale(0.95)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 100);
});

// Console logging for debugging
console.log('Code Playground initialized');
console.log('Button element:', button);
console.log('Output element:', output);`);

      setConsoleLogs([]);
      updateIframeContent();
    }
  };

  const handleExport = () => {
    const codeContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported from Code Playground</title>
    <style>
${css}
    </style>
</head>
<body>
${html.replace(
  /<!DOCTYPE[^>]*>|<\/?html[^>]*>|<\/?head[^>]*>|<\/?body[^>]*>/gi,
  ""
)}
    <script>
${js}
    </script>
</body>
</html>`.trim();

    const blob = new Blob([codeContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "code-playground-export.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const codeData = {
      html,
      css,
      js,
      timestamp: new Date().toISOString(),
    };

    const encodedData = btoa(JSON.stringify(codeData));
    const shareUrl = `${window.location.origin}${window.location.pathname}?code=${encodedData}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out my code!",
          text: "I created this in the Code Playground",
          url: shareUrl,
        });
      } catch (err) {
        // Fallback to clipboard
        await navigator.clipboard.writeText(shareUrl);
        alert("Share link copied to clipboard!");
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      alert("Share link copied to clipboard!");
    }
  };

  const handleCopyCode = () => {
    const codeToCopy =
      activeTab === "html" ? html : activeTab === "css" ? css : js;
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const tabs = [
    { id: "html" as const, label: "HTML", color: "from-orange-500 to-red-500" },
    { id: "css" as const, label: "CSS", color: "from-blue-500 to-cyan-500" },
    {
      id: "js" as const,
      label: "JavaScript",
      color: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl text-gray-900 font-bold">
                Code Playground
              </h1>
              <p className="text-xs text-gray-600">
                Live HTML, CSS & JavaScript editor with real-time preview
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoRun(!autoRun)}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                autoRun
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-gray-100 text-gray-700 border border-gray-300"
              }`}
              title={autoRun ? "Auto-run enabled" : "Auto-run disabled"}
            >
              {autoRun ? (
                <Eye className="w-4 h-4" />
              ) : (
                <EyeOff className="w-4 h-4" />
              )}
              <span className="text-sm">Auto-run</span>
            </button>
            <button
              onClick={handleRun}
              className={`px-4 py-2 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-xl ${
                isRunning
                  ? "opacity-80 cursor-not-allowed"
                  : "hover:from-green-700 hover:to-emerald-700"
              }`}
              disabled={isRunning}
            >
              <Play className={`w-4 h-4 ${isRunning ? "animate-pulse" : ""}`} />
              {isRunning ? "Running..." : "Run Code"}
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2 border border-gray-300"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2 border border-gray-300"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
            <button
              onClick={handleShare}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2 border border-gray-300"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Code Editor Panel - Left */}
        <div
          className={`${
            showCode ? "w-1/2" : "w-0"
          } flex flex-col border-r border-gray-200 bg-white transition-all duration-300`}
        >
          {/* Tabs */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg transition-all relative group ${
                    activeTab === tab.id
                      ? `bg-linear-to-r ${tab.color} text-white shadow-lg`
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <span className="text-sm font-medium">{tab.label}</span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-2 ${
                  copied
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
                }`}
                title={copied ? "Copied!" : "Copy code"}
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span className="text-xs">{copied ? "Copied!" : "Copy"}</span>
              </button>
              <button
                onClick={() => setShowConsole(!showConsole)}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-2 ${
                  showConsole
                    ? "bg-indigo-100 text-indigo-700 border border-indigo-300"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
                }`}
              >
                <span className="text-xs">Console</span>
              </button>
              <div className="text-xs text-gray-500">
                {autoRun ? "● Auto-saving" : "Manual mode"}
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-hidden relative">
            <textarea
              ref={codeEditorRef}
              value={
                activeTab === "html" ? html : activeTab === "css" ? css : js
              }
              onChange={(e) => {
                if (activeTab === "html") setHtml(e.target.value);
                else if (activeTab === "css") setCss(e.target.value);
                else setJs(e.target.value);
              }}
              className="w-full h-full p-6 font-mono text-sm text-gray-800 bg-gray-50 resize-none outline-none leading-relaxed"
              spellCheck={false}
              placeholder={`Write your ${activeTab.toUpperCase()} code here...`}
              style={{
                tabSize: 2,
                lineHeight: "1.5",
                fontFamily: '"Fira Code", "Courier New", monospace',
              }}
            />

            {/* Code Stats */}
            <div className="absolute bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-200 px-4 py-2 flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-4">
                <span className="font-medium">{activeTab.toUpperCase()}</span>
                <span>
                  Lines:{" "}
                  {
                    (activeTab === "html"
                      ? html
                      : activeTab === "css"
                      ? css
                      : js
                    ).split("\n").length
                  }
                </span>
                <span>
                  Characters:{" "}
                  {
                    (activeTab === "html"
                      ? html
                      : activeTab === "css"
                      ? css
                      : js
                    ).length
                  }
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowCode(!showCode)}
                  className="p-1.5 hover:bg-gray-200 rounded-md transition-colors"
                  title={showCode ? "Hide editor" : "Show editor"}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    localStorage.setItem("code-playground-html", html);
                    localStorage.setItem("code-playground-css", css);
                    localStorage.setItem("code-playground-js", js);
                    alert("Code saved locally!");
                  }}
                  className="p-1.5 hover:bg-gray-200 rounded-md transition-colors"
                  title="Save code"
                >
                  <Save className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Console Panel */}
          {showConsole && (
            <div className="h-48 border-t border-gray-200 bg-black text-white">
              <div className="px-4 py-2 bg-gray-900 border-b border-gray-800 flex items-center justify-between">
                <div className="text-sm font-medium">Console Output</div>
                <button
                  onClick={() => setConsoleLogs([])}
                  className="text-xs px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded"
                >
                  Clear
                </button>
              </div>
              <div className="p-4 h-full overflow-auto font-mono text-xs">
                {consoleLogs.length === 0 ? (
                  <div className="text-gray-500 italic">
                    No console output yet...
                  </div>
                ) : (
                  consoleLogs.map((log, index) => (
                    <div key={index} className="mb-1">
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Preview Panel - Right */}
        <div
          className={`${
            showCode ? "w-1/2" : "w-full"
          } flex flex-col bg-gray-100 transition-all duration-300`}
        >
          {/* Settings Bar */}
          <div className="bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">
                    Preview:
                  </span>
                  <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 border border-gray-300">
                    {Object.entries(devicePresets).map(([key, preset]) => (
                      <button
                        key={key}
                        onClick={() => setDeviceSize(key as any)}
                        className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-2 ${
                          deviceSize === key
                            ? "bg-white text-indigo-600 shadow-sm border border-gray-300"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                        }`}
                        title={`${preset.label}: ${preset.width}x${preset.height}px`}
                      >
                        <preset.icon className="w-4 h-4" />
                        <span className="text-xs font-medium">
                          {preset.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="font-medium">
                    {currentDevice.width} × {currentDevice.height}px
                  </span>
                  <span className="text-gray-400">|</span>
                  <span>{currentDevice.label} View</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className={`p-2 rounded-lg transition-all ${
                    showSettings
                      ? "bg-indigo-100 text-indigo-600 border border-indigo-300"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300"
                  }`}
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowCode(!showCode)}
                  className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300 transition-all"
                  title={showCode ? "Fullscreen preview" : "Show editor"}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Custom Size Settings */}
            {showSettings && deviceSize === "custom" && (
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label className="text-xs font-medium text-gray-700">
                      Width:
                    </label>
                    <input
                      type="range"
                      min="320"
                      max="1920"
                      value={customWidth}
                      onChange={(e) => setCustomWidth(Number(e.target.value))}
                      className="w-32"
                    />
                    <input
                      type="number"
                      value={customWidth}
                      onChange={(e) => setCustomWidth(Number(e.target.value))}
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-sm outline-none focus:border-indigo-500"
                      min="320"
                      max="1920"
                    />
                    <span className="text-xs text-gray-500">px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-xs font-medium text-gray-700">
                      Height:
                    </label>
                    <input
                      type="range"
                      min="200"
                      max="1080"
                      value={customHeight}
                      onChange={(e) => setCustomHeight(Number(e.target.value))}
                      className="w-32"
                    />
                    <input
                      type="number"
                      value={customHeight}
                      onChange={(e) => setCustomHeight(Number(e.target.value))}
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-sm outline-none focus:border-indigo-500"
                      min="200"
                      max="1080"
                    />
                    <span className="text-xs text-gray-500">px</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Preview Frame */}
          <div className="flex-1 flex items-center justify-center p-6 overflow-auto bg-gray-900">
            <div
              className="bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 border border-gray-300"
              style={{
                width: `${currentDevice.width}px`,
                height: `${currentDevice.height}px`,
                maxWidth: "100%",
                maxHeight: "100%",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Browser Chrome */}
              <div className="bg-gray-100 border-b border-gray-300 px-3 py-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 bg-white rounded text-xs text-gray-500 border border-gray-300">
                      localhost:3000
                    </div>
                    <span className="text-xs text-green-600 font-medium">
                      ● Live
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-green-500 transition-all duration-300 ${
                        autoRun ? "animate-pulse" : ""
                      }`}
                      style={{ width: autoRun ? "100%" : "0%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Preview Iframe */}
              <iframe
                ref={iframeRef}
                className="w-full bg-white"
                style={{
                  height: "calc(100% - 36px)",
                  border: "none",
                  outline: "none",
                }}
                title="Live Preview"
                sandbox="allow-scripts allow-modals allow-same-origin"
              />
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-white border-t border-gray-200 px-4 py-2">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="font-medium">Status:</span>
                  <span className="text-green-600 font-medium">● Live</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>Last updated: {new Date().toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    iframeRef.current?.contentWindow?.location.reload();
                  }}
                  className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded border border-gray-300"
                >
                  Refresh Preview
                </button>
                <span className="text-gray-500">|</span>
                <span className="font-medium">
                  {deviceSize === "custom" ? "Custom" : currentDevice.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
