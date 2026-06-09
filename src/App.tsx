import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-indigo-50/40">
      <header className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-10 shadow-lg sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-indigo-100">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Sistema de Gestión Veterinaria
            </div>
            <h1 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              Seguimiento de Pacientes
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-base text-indigo-200">
              Administra tus pacientes y citas veterinarias
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <PatientForm />
          </div>
          <div className="lg:col-span-3">
            <PatientsList />
          </div>
        </div>
      </main>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
