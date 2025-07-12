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
    <div className="w-full min-h-[60dvh] rounded-t-3xl py-20 flex items-center justify-center bg-gradient-to-t from-gray-200 to-transparent">
      {/* <p className="font-semibold text-2xl">Submit your Idea to the public</p> */}
      <div className="w-full max-w-2xl mx-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Note Input Field */}
          <div>
            <label
              htmlFor="note"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Write your note
            </label>
            <textarea
              id="note"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Enter your note here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows="6"
            />
          </div>

          {/* Display Uploaded Image */}
          {uploadedImage && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">
                Uploaded Image:
              </p>
              <div className="relative inline-block">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="max-w-full h-auto max-h-64 rounded-lg border border-gray-300"
                />
              </div>
            </div>
          )}
          {/* Image Upload Section */}
          <div className="space-y-4">
            <label
              htmlFor="image-upload"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Image (Optional)
            </label>
            <div className="flex items-center space-x-4">
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label
                htmlFor="image-upload"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
              >
                Choose Image
              </label>
              {uploadedImage && (
                <button
                  type="button"
                  onClick={removeImage}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Remove Image
                </button>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!noteText.trim()}
            className="w-full px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
}
