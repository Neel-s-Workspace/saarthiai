import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
            <h1 className="text-2xl font-bold text-red-400 mb-3">Something went wrong</h1>
            <p className="text-slate-400 text-sm mb-6">
              An unexpected client error occurred while rendering the interface.
            </p>
            {this.state.error?.message && (
              <pre className="bg-slate-950 p-3 rounded-lg text-xs text-red-300 text-left overflow-x-auto mb-6">
                {this.state.error.message}
              </pre>
            )}
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.href = '/login';
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-semibold transition-colors"
              >
                Reset & Go to Login
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-semibold transition-colors"
              >
                Reload
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
