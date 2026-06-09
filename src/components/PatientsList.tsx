import { usePatientStore } from "../store";
import PatientDetails from "./PatientDetails";

export default function PatientsList() {
  const patients = usePatientStore((state) => state.patients);

  return (
    <div className="scrollbar-thin">
      {patients.length ? (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              Listado de Pacientes
            </h2>
            <p className="mt-0.5 text-sm text-gray-500">
              Administra tus{" "}
              <span className="font-semibold text-indigo-600">
                Pacientes y Citas
              </span>
            </p>
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 ring-1 ring-indigo-100">
              <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500" />
              {patients.length} paciente{patients.length !== 1 ? "s" : ""} registrado{patients.length !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="space-y-4">
            {patients.map((patient) => (
              <PatientDetails key={patient.id} patient={patient} />
            ))}
          </div>
        </>
      ) : (
        <div className="card flex flex-col items-center py-16 text-center">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 shadow-inner shadow-indigo-100">
            <svg className="h-10 w-10 text-indigo-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-400">
            No hay pacientes
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Comienza agregando pacientes y{" "}
            <span className="font-semibold text-indigo-500">
              aparecerán en este lugar
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
