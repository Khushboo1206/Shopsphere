import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

export default function Layout({ children }) {

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="flex flex-col lg:flex-row relative z-10">

        <Sidebar />

        <section className="flex-1 p-4 md:p-6 lg:p-10 backdrop-blur-sm">

          <Navbar />

          {children}

        </section>

      </div>

    </main>
  )
}