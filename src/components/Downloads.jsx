import demoImage1 from "../assets/images/ai-image-1.jpeg";
import demoImage2 from "../assets/images/ai-image-2.jpeg";
import demoImage3 from "../assets/images/ai-image-3.jpeg";
import demoImage4 from "../assets/images/ai-image-4.jpeg";
import demoImage5 from "../assets/images/ai-image-5.jpeg";
import demoImage6 from "../assets/images/ai-image-6.jpeg";
import ImageCard from "./ImageCard";

export default function Downloads() {
  return (
    <main class="relative z-10">
      {/* Welcome Message */}
      <h2 class="text-4xl font-bold mb-8">
        Downloaded <span class="text-2xl">👋</span>
      </h2>

      {/* Image Presets Section */}
      <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
  );
}
