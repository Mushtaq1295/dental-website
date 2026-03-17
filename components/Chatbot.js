'use client';
import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle, Minimize2 } from 'lucide-react';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content:
    "👋 Hi there! I'm the SmileCare AI Assistant.\n\nI can help you with:\n• Our services & pricing\n• Doctor information\n• Booking appointments\n• Clinic hours & location\n\nHow can I help you today?",
};

const QUICK_REPLIES = [
  'What are your services?',
  'How much does whitening cost?',
  'Book an appointment',
  'Clinic timings',
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [minimised, setMinimised] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showDot, setShowDot] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShowDot(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const content = (text || input).trim();
    if (!content || loading) return;

    const userMsg = { role: 'user', content };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.filter((m) => m.role !== 'system'),
        }),
      });
      const data = await res.json();
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: data.reply },
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: 'assistant',
          content: '⚠️ Sorry, I ran into a connection issue. Please try again or call us at +91 98765 43210.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (text) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => { setIsOpen(true); setMinimised(false); }}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
        style={{ background: 'linear-gradient(135deg, #0B1F3A, #1A3A5C)' }}
        aria-label="Open chat"
      >
        <MessageCircle size={26} className="text-white" />
        {showDot && (
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[var(--gold)] rounded-full border-2 border-white animate-pulse" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ width: '360px' }}
      >
        <div
          className={`bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 transition-all duration-300 ${
            minimised ? 'h-14' : 'h-[520px]'
          }`}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-3.5 flex-shrink-0 cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #0B1F3A, #1A3A5C)' }}
            onClick={() => setMinimised(!minimised)}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--gold)]/20 flex items-center justify-center text-lg">
                🦷
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-none">
                  SmileCare Assistant
                </p>
                <p className="text-white/50 text-xs mt-0.5">Powered by AI</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              <button
                onClick={(e) => { e.stopPropagation(); setMinimised(!minimised); }}
                className="text-white/60 hover:text-white transition-colors p-1"
              >
                <Minimize2 size={14} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                className="text-white/60 hover:text-white transition-colors p-1"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!minimised && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {m.role === 'assistant' && (
                      <div className="w-7 h-7 rounded-full bg-[var(--navy)] flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-1">
                        🦷
                      </div>
                    )}
                    <div
                      className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        m.role === 'user'
                          ? 'text-white rounded-br-sm'
                          : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm'
                      }`}
                      style={
                        m.role === 'user'
                          ? { background: 'linear-gradient(135deg, #0B1F3A, #1A3A5C)' }
                          : {}
                      }
                    >
                      {formatMessage(m.content)}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {loading && (
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[var(--navy)] flex items-center justify-center text-xs">
                      🦷
                    </div>
                    <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-gray-100 flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 150}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick replies — show only after first message */}
                {messages.length === 1 && !loading && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {QUICK_REPLIES.map((r) => (
                      <button
                        key={r}
                        onClick={() => sendMessage(r)}
                        className="text-xs bg-white border border-[var(--gold)]/30 text-[var(--navy)] px-3 py-1.5 rounded-full hover:bg-[var(--gold)]/10 transition-colors font-medium"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div className="px-4 py-3 border-t border-gray-100 bg-white flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask about services, pricing..."
                  className="flex-1 text-sm outline-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/10 transition-all"
                  disabled={loading}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={loading || !input.trim()}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all disabled:opacity-40"
                  style={{ background: 'linear-gradient(135deg, #C9A84C, #b8922f)' }}
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}