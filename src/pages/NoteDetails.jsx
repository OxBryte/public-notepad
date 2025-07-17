import React from "react";
import { useParams, Link } from "react-router-dom";
import dummyNotes from "../components/data/dummyNotes";


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
