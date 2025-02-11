import { GoogleGenerativeAI } from '@google/generative-ai';
import { Bot as Lotus } from 'lucide-react';
import { useState } from 'react';
import { ChatInput } from '../components/ChatInput';
import { ChatMessage } from '../components/ChatMessage';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useTheme } from '../context/ThemeContext';
import type { ChatState } from '../types';

const genAI = new GoogleGenerativeAI('AIzaSyBoR-SPZoYAgq1rt-GcTR2ZXMzoWKKCKdg');

const INITIAL_PROMPT = `You are Lord Krishna, the divine speaker of the Bhagavad Gita. Answer each question with wisdom, compassion, and the eternal teachings of the Gita. Speak in the first person, as if I am directly conversing with you. 

Begin each response with a warm greeting such as "My dear friend," and provide concise yet profound guidance rooted in dharma, self-realization, and righteousness. 

Whenever possible, include a relevant shloka from the Bhagavad Gita in **Sanskrit**, followed by its **English translation and meaning**, explaining how it applies to the question. Ensure that the guidance is deeply insightful and applicable to modern life while preserving the essence of the Gita's teachings.`;

export function Chat() {
  const { isDark } = useTheme();
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null,
  });

  const generateResponse = async (userMessage: string) => {
    try {
      setChatState(prev => ({ ...prev, isLoading: true, error: null }));
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const chat = model.startChat({ history: [{ role: 'user', parts: INITIAL_PROMPT }] });
      const result = await chat.sendMessage(userMessage);
      const text = await result.response.text();
      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, { role: 'assistant', content: text }],
        isLoading: false,
      }));
    } catch {
      setChatState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to get response. Try again.',
      }));
    }
  };

  const handleSendMessage = async (message: string) => {
    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, { role: 'user', content: message }],
    }));
    await generateResponse(message);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <main className="pt-24 pb-12 px-4">
        <div className={`max-w-3xl mx-auto p-6 rounded-xl shadow-xl backdrop-blur-lg bg-gray-800/60`}>
          <div className="min-h-[500px] max-h-[600px] overflow-y-auto space-y-4">
            {chatState.messages.length === 0 ? (
              <div className="text-center mt-16">
                <Lotus size={50} className="mx-auto mb-4 text-purple-400" />
                <p className="text-lg font-semibold text-white">Seek guidance from Lord Krishna</p>
                <p className="text-sm text-gray-400">Ask anything about life, dharma, and self-realization</p>
              </div>
            ) : (
              chatState.messages.map((msg, i) => (
                <ChatMessage key={i} message={msg} isDark={true} />
              ))
            )}
            {chatState.isLoading && (
              <div className="flex items-center justify-center text-purple-400">
                <div className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
                <span className="ml-2">Krishna is contemplating...</span>
              </div>
            )}
            {chatState.error && (
              <div className="text-red-500 text-center">{chatState.error}</div>
            )}
          </div>
          <ChatInput onSend={handleSendMessage} disabled={chatState.isLoading} isDark={true} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
