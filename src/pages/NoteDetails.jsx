import React from "react";
import { useParams, Link } from "react-router-dom";

// Dummy notes data (should match Notes.jsx)
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

export default function NoteDetails() {
  const { id } = useParams();
  const note = dummyNotes.find((n) => n.id === Number(id));

  if (!note) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Note Not Found
        </h2>
        <Link to="/notes" className="text-blue-600 hover:underline">
          Back to Notes
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[80vh] py-16 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col gap-6">
        <Link
          to="/notes"
          className="text-blue-600 hover:underline text-sm mb-2"
        >
          ← Back to Notes
        </Link>
        {note.image && (
          <img
            src={note.image}
            alt="Note visual"
            className="w-full h-64 object-cover rounded-xl border border-gray-200 shadow-sm mb-4"
          />
        )}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Note #{note.id}
          </h1>
          <p className="text-lg text-gray-800">{note.text}</p>
        </div>
      </div>
    </div>
  );
}
