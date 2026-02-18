export default function Navbar({ setActiveTab, activeTab }) {
  return (
    <header class="flex items-center mb-12 justify-between">
      <div class="flex items-center">
        <h1 className="text-2xl font-bold">AI Studio</h1>
      </div>
      <ul class="ml-4 text-sm text-zinc-400 flex gap-8">
        <a
          onClick={() => setActiveTab("create")}
          className={`hover:text-zinc-200 font-medium cursor-pointer transition-all ${activeTab === "create" ? "text-zinc-200" : "text-zinc-400"}`}
        >
          Create Image
        </a>
        <a
          onClick={() => setActiveTab("downloaded")}
          className={`hover:text-zinc-200 font-medium cursor-pointer transition-all ${activeTab === "downloaded" ? "text-zinc-200" : "text-zinc-400"}`}
        >
          Downloaded
        </a>
      </ul>
    </header>
  );
}
