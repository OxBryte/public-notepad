import React from "react";
import { Link } from "react-router-dom";
import dummyNotes from "../data/dummyNotes";

export default function Notes() {
  return (
    <div className="w-full min-h-[80vh] py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-10 text-center">
          All Notes
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dummyNotes.map((note) => (
            <Link
              key={note.id}
              to={`/notes/${note.id}`}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col gap-4 hover-lift transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {note.image && (
                <img
                  src={note.image}
                  alt="Note visual"
                  className="w-full h-40 object-cover rounded-xl mb-2 border border-gray-200 shadow-sm group-hover:opacity-90 transition-opacity"
                />
              )}
              <p className="text-lg text-gray-800 font-medium flex-1 group-hover:text-blue-700 transition-colors">
                {note.text}
              </p>
              <div className="flex justify-end mt-2">
                <span className="text-xs text-gray-400">
                  Note ID: {note.id}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
