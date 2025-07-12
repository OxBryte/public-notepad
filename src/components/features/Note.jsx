import React, { useState } from "react";

export default function Note() {
  const [noteText, setNoteText] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      console.log("Note submitted:", noteText);
      // Here you can add logic to save the note
      setNoteText("");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
  };

  return (
    <div className="w-full min-h-[80vh] py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Share Your Ideas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create and share your thoughts with the world. Every idea matters
            and deserves to be preserved on the blockchain.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Note Input Field */}
            <div className="space-y-3">
              <label
                htmlFor="note"
                className="block text-lg font-semibold text-gray-800"
              >
                What's on your mind?
              </label>
              <textarea
                id="note"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Share your brilliant idea, thought, or inspiration with the world..."
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 resize-none transition-all duration-300 text-lg"
                rows="8"
              />
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Your ideas are forever preserved on the blockchain</span>
                <span>{noteText.length}/1000</span>
              </div>
            </div>

            {/* Image Upload Section */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-800">
                Add Visual Context (Optional)
              </label>
              <div className="flex flex-wrap items-center gap-4">
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label
                  htmlFor="image-upload"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl cursor-pointer hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Choose Image
                </label>
                {uploadedImage && (
                  <button
                    type="button"
                    onClick={removeImage}
                    className="flex items-center gap-2 px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-300 font-medium"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Remove
                  </button>
                )}
              </div>
            </div>

            {/* Display Uploaded Image */}
            {uploadedImage && (
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-700">Preview:</p>
                <div className="relative inline-block group">
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="max-w-full h-auto max-h-80 rounded-xl border-2 border-gray-200 shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-xl transition-all duration-300"></div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={!noteText.trim()}
                className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-xl hover:from-green-600 hover:to-emerald-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
              >
                <span className="flex items-center justify-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Publish to Blockchain
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Immutable
            </h3>
            <p className="text-gray-600">
              Once published, your ideas are forever preserved on the blockchain
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Decentralized
            </h3>
            <p className="text-gray-600">
              No central authority controls your content - it's truly yours
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Public</h3>
            <p className="text-gray-600">
              Share your ideas with the world and inspire others
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
