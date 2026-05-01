import { Bell } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

      {/* Left Section */}
      <div>

        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-zinc-400 mt-2">
          Here's what's happening with your store today.
        </p>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notification */}
        <div className="w-12 h-12 rounded-2xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 flex items-center justify-center cursor-pointer hover:border-zinc-600 transition">

          <Bell size={20} />

        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-2xl px-4 py-2">

          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />

          {/* User Info */}
          <div className="hidden md:block">

            <p className="font-medium">
              Khushboo
            </p>

            <p className="text-zinc-400 text-sm">
              SQL Developer
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}