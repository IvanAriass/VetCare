import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { usePatientStore } from "../store";
import { DraftPatient } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function PatientForm() {
  const addPatient = usePatientStore((state) => state.addPatient);
  const activeId = usePatientStore((state) => state.activeId);
  const patients = usePatientStore((state) => state.patients);
  const updatePatient = usePatientStore((state) => state.updatePatient);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<DraftPatient>({
    defaultValues: {
      date: new Date().toISOString().slice(0, 10),
    },
  });

  useEffect(() => {
    if (activeId) {
      const activePatient = patients.filter(
        (patient) => patient.id === activeId
      )[0];
      setValue("name", activePatient.name);
      setValue("caretaker", activePatient.caretaker);
      setValue("email", activePatient.email);
      setValue("date", activePatient.date);
      setValue("symptoms", activePatient.symptoms);
    }
  }, [activeId]);

  const registerPatient = (data: DraftPatient) => {
    if (activeId) {
      updatePatient(data);
      toast.success("Paciente actualizado correctamente");
    } else {
      addPatient(data);
      toast.success("Paciente agregado correctamente");
    }
    reset();
  };

  return (
    <div className="card-accent p-6">
      <div className="mb-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md shadow-indigo-200">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-800">
          {activeId ? "Editar Paciente" : "Nuevo Paciente"}
        </h2>
        <p className="mt-0.5 text-sm text-gray-500">
          {activeId
            ? "Modifica los datos del paciente"
            : "Ingresa los datos del paciente"}
        </p>
      </div>

      <form
        className="space-y-4"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div>
          <label htmlFor="name" className="label-field">
            Paciente
          </label>
          <input
            id="name"
            className="input-field"
            type="text"
            placeholder="Nombre del paciente"
            {...register("name", {
              required: "El nombre del paciente es obligatorio",
            })}
          />
          {errors.name && (
            <ErrorMessage>{errors.name?.message?.toString()}</ErrorMessage>
          )}
        </div>

        <div>
          <label htmlFor="caretaker" className="label-field">
            Propietario
          </label>
          <input
            id="caretaker"
            className="input-field"
            type="text"
            placeholder="Nombre del propietario"
            {...register("caretaker", {
              required: "El nombre del propietario es obligatorio",
            })}
          />
          {errors.caretaker && (
            <ErrorMessage>{errors.caretaker?.message}</ErrorMessage>
          )}
        </div>

        <div>
          <label htmlFor="email" className="label-field">
            Email
          </label>
          <input
            id="email"
            className="input-field"
            type="email"
            placeholder="email@ejemplo.com"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Ingrese un email válido",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
        </div>

        <div>
          <label htmlFor="date" className="label-field">
            Fecha de Alta
          </label>
          <input
            id="date"
            className="input-field"
            type="date"
            {...register("date", {
              required: "La fecha de alta es obligatoria",
            })}
          />
          {errors.date && <ErrorMessage>{errors.date?.message}</ErrorMessage>}
        </div>

        <div>
          <label htmlFor="symptoms" className="label-field">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="input-field resize-none"
            rows={3}
            placeholder="Describe los síntomas del paciente"
            {...register("symptoms", {
              required: "Los síntomas son obligatorios",
            })}
          />
          {errors.symptoms && (
            <ErrorMessage>{errors.symptoms?.message}</ErrorMessage>
          )}
        </div>

        <div className="pt-1">
          <input
            type="submit"
            className="btn-solid cursor-pointer"
            value={activeId ? "Guardar Cambios" : "Guardar Paciente"}
          />
        </div>
      </form>
    </div>
  );
}
