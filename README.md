# VetCare - Seguimiento de Pacientes Veterinarios

Aplicación web moderna para la gestión y seguimiento de pacientes veterinarios. Construida con **React**, **TypeScript**, **Zustand**, **React Hook Form** y **Tailwind CSS**.

## Características

- **Registro de pacientes** con nombre, propietario, email, fecha de alta y síntomas
- **Listado en tiempo real** de todos los pacientes registrados
- **Edición** de datos de pacientes existentes
- **Eliminación** de pacientes
- **Persistencia de datos** en localStorage a través de Zustand
- **Validación de formularios** con React Hook Form
- **Notificaciones** toast para todas las operaciones
- **Diseño responsive** con Tailwind CSS

## Stack Tecnológico

| Tecnología | Propósito |
|---|---|
| **React 18** | Biblioteca de UI |
| **TypeScript** | Tipado estático |
| **Zustand** | Gestión de estado global |
| **React Hook Form** | Manejo y validación de formularios |
| **Tailwind CSS** | Estilos utilitarios |
| **React Toastify** | Notificaciones |
| **Vite** | Bundler y dev server |
| **uuid** | Generación de IDs únicos |

## Estructura del Proyecto

```
src/
├── components/
│   ├── PatientForm.tsx       # Formulario de registro/edición
│   ├── PatientsList.tsx      # Listado de pacientes
│   ├── PatientDetails.tsx    # Detalle individual de paciente
│   ├── PatientDetailItem.tsx # Item de detalle reutilizable
│   └── ErrorMessage.tsx      # Mensaje de error del formulario
├── types/
│   └── index.ts              # Definiciones de tipos
├── store.ts                  # Store global con Zustand
├── App.tsx                   # Componente principal
├── main.tsx                  # Punto de entrada
└── index.css                 # Estilos globales y componentes
```

## Tipos de Datos

```typescript
type Patient = {
  id: string;
  name: string;        // Nombre del paciente
  caretaker: string;    // Nombre del propietario
  email: string;        // Email de contacto
  date: string;         // Fecha de alta
  symptoms: string;     // Síntomas
};

type DraftPatient = Omit<Patient, 'id'>;
```

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Producción

```bash
pnpm build
pnpm preview
```

## Scripts Disponibles

| Script | Descripción |
|---|---|
| `pnpm dev` | Inicia servidor de desarrollo Vite |
| `pnpm build` | Compila TypeScript y construye assets |
| `pnpm preview` | Previsualiza la build de producción |
| `pnpm lint` | Ejecuta ESLint en el proyecto |

## Gestión de Estado con Zustand

El estado global se maneja a través de un store de Zustand con las siguientes acciones:

- `addPatient(data)` — Agrega un nuevo paciente
- `deletePatient(id)` — Elimina un paciente por ID
- `getPatientById(id)` — Establece el paciente activo para edición
- `updatePatient(data)` — Actualiza los datos del paciente activo

El store incluye los middlewares `devtools` (para depuración) y `persist` (para guardar datos en localStorage).
