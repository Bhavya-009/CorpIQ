import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! Ask me questions about your dataset.",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: input,
      },
      {
        role: "assistant",
        content:
          "AI integration coming next. This is a placeholder response.",
      },
    ]);

    setInput("");
  };

  return (
    <main className="min-h-screen px-6 py-10">

      <div className="mx-auto max-w-4xl">

        <h1 className="mb-6 text-3xl font-bold">
          Ask CorpIQ
        </h1>

        <div className="h-125 overflow-y-auto rounded-xl border p-4">

          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.role === "user"
                  ? "text-right"
                  : "text-left"
              }`}
            >
              <div className="inline-block rounded-xl bg-muted px-4 py-2">
                {message.content}
              </div>
            </div>
          ))}

        </div>

        <div className="mt-4 flex gap-3">

          <input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="Ask about your dataset..."
            className="flex-1 rounded-xl border px-4 py-3"
          />

          <button
            onClick={handleSend}
            className="rounded-xl bg-primary px-5 py-3 text-primary-foreground"
          >
            Send
          </button>

        </div>

      </div>

    </main>
  );
}