import demoImage1 from "../assets/images/ai-image-1.jpeg";
import demoImage2 from "../assets/images/ai-image-2.jpeg";
import demoImage3 from "../assets/images/ai-image-3.jpeg";
import demoImage4 from "../assets/images/ai-image-4.jpeg";
import demoImage5 from "../assets/images/ai-image-5.jpeg";
import demoImage6 from "../assets/images/ai-image-6.jpeg";
import ImageCard from "./ImageCard";

export default function CreateImage() {
  return (
    <>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Welcome Message */}
        <h2 className="text-4xl font-bold mb-8">
          Let's create a masterpiece, Alvian! <span className="text-2xl">👋</span>
        </h2>

        {/* Search Input */}
        <div className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
          <div className="flex items-center">
            <div className="pl-5 pr-2">
              <svg
                className="w-5 h-5 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Create with Prompts"
              className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg"
            />
            <button className="hover:cursor-pointer bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full">
              <svg
                className="w-6 h-6 text-white transform rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Suggestions Section */}
        {/* Settings Panel */}
        <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium">Advanced Settings</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Model Selection */}
            <div>
              <label for="model" className="block text-sm font-medium text-zinc-700 mb-1">
                Model
              </label>
              <select
                id="model"
                className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option className="bg-zinc-900" value="flux" selected>
                  Flux
                </option>
                <option className="bg-zinc-900" value="turbo">
                  Turbo
                </option>
              </select>
            </div>

            {/* Seed Input : Auto Generated, readonly for user */}
            <div>
              <label for="seed" className="block text-sm font-medium text-zinc-700 mb-1">
                Seed (for reproducible results)
              </label>
              <input
                type="number"
                id="seed"
                disabled="true"
                className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Random"
              />
            </div>

            {/* Width Input */}
            <div>
              <label for="width" className="block text-sm font-medium text-zinc-700 mb-1">
                Width
              </label>
              <input
                type="number"
                id="width"
                value="1024"
                className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Height Input */}
            <div>
              <label for="height" className="block text-sm font-medium text-zinc-700 mb-1">
                Height
              </label>
              <input
                type="number"
                id="height"
                value="1024"
                className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Aspect Ratio Presets */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Aspect Ratio Presets
              </label>
              <div className="flex flex-wrap gap-2">
                <button className="hover:cursor-pointer bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">
                  1:1
                </button>
                <button className="hover:cursor-pointer bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">
                  16:9
                </button>
                <button className="hover:cursor-pointer bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">
                  4:3
                </button>
                <button className="hover:cursor-pointer bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">
                  3:2
                </button>
              </div>
            </div>

            {/* No Logo Toggle */}
          </div>
        </div>

        {/* Image Presets Section */}
        <div>
          <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* Image Card 1 */}
            <ImageCard image={demoImage1} />

            {/* Image Card 2 */}
            <ImageCard image={demoImage2} />

            {/* Image Card 3 */}
            <ImageCard image={demoImage3} />

            {/* Image Card 4 */}
            <ImageCard image={demoImage4} />

            {/* Image Card 5 */}
            <ImageCard image={demoImage5} />

            {/* Image Card 6 */}
            <ImageCard image={demoImage6} />
          </div>
        </div>
      </main>
    </>
  );
}
