import React, { useState } from 'react';
import { MoreHorizontal, ArrowUp, Plus, Sparkles, Send } from 'lucide-react';

export default function EmuraAIAssistantCard() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'user',
      text: 'Give me recommendation for Area 1',
    },
    {
      id: 2,
      sender: 'ai',
      intro: 'Sure, here are my recommendation for your Area 1 (Rice Field):',
      points: [
        'Monitor soil moisture over next 48 hours',
        'Maintain current fertilization level',
        'Prepare for mid-season pest inspection',
        'Keep the water auto watering on.',
        'Please check again after 2 days',
      ],
    },
  ]);

  const [inputVal, setInputVal] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal.trim();
    const newMsgId = Date.now();

    setMessages((prev) => [
      ...prev,
      { id: newMsgId, sender: 'user', text: userText },
    ]);
    setInputVal('');

    // Generate dynamic farm AI reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: newMsgId + 1,
          sender: 'ai',
          intro: `Analysis for "${userText}":`,
          points: [
            'Telemetry calibrated with central gateway.',
            'Soil nutrient nitrogen ratio at 88% stability.',
            'Optimal spray weather conditions detected for 08:00 AM tomorrow.',
          ],
        },
      ]);
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-xs flex flex-col justify-between space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-2">
        <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
          <span>AI Assistant</span>
        </h4>
        <button
          onClick={() => alert('AI Agronomy Model: GPT-Agri v4.2')}
          className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
        {messages.map((m) => (
          <div key={m.id}>
            {m.sender === 'user' ? (
              <div className="flex justify-end">
                <div className="bg-[#0b4829] text-white text-xs font-medium px-4 py-2 rounded-2xl rounded-tr-xs shadow-xs max-w-[85%]">
                  {m.text}
                </div>
              </div>
            ) : (
              <div className="bg-[#fcf8f2] border border-amber-100/80 rounded-2xl p-3.5 text-xs text-slate-700 space-y-1.5 shadow-2xs">
                <p className="font-semibold text-slate-800">{m.intro}</p>
                <ul className="space-y-1 text-slate-600 text-[11px] pl-1">
                  {m.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-slate-400">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div>
        <form
          onSubmit={handleSend}
          className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-2xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition-all"
        >
          <Plus className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Ask anything"
            className="flex-1 bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-7 h-7 rounded-xl bg-[#0b4829] hover:bg-[#166534] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </form>
        <p className="text-[10px] text-slate-400 text-center mt-2">
          AI Assistant can make mistakes. Please double check
        </p>
      </div>
    </div>
  );
}
