import React from "react";

// Dummy notes data
const dummyNotes = [
  {
    id: 1,
    text: "Blockchain is the future of secure data storage!",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    text: "Decentralization empowers individuals and communities.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    text: "Ideas are best when shared with the world.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    text: "Public notepads make collaboration easy and transparent.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    text: "Blockchain is the future of secure data storage!",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    text: "Decentralization empowers individuals and communities.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    text: "Ideas are best when shared with the world.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    text: "Public notepads make collaboration easy and transparent.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Notes() {
  return (
    <div className="w-full min-h-[80vh] py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-10 text-center">
          All Notes
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dummyNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col gap-4 hover-lift transition-all duration-300"
            >
              {note.image && (
                <img
                  src={note.image}
                  alt="Note visual"
                  className="w-full h-40 object-cover rounded-xl mb-2 border border-gray-200 shadow-sm"
                />
              )}
              <p className="text-lg text-gray-800 font-medium flex-1">
                {note.text}
              </p>
              <div className="flex justify-end mt-2">
                <span className="text-xs text-gray-400">
                  Note ID: {note.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
