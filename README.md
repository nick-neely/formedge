# FormEdge - Minimal Open-Source Drag-and-Drop Form Builder

FormEdge is an open-source, lightweight npm package providing basic drag-and-drop form-building functionality. Designed with simplicity in mind, it serves as a foundational tool for developers looking to create, customize, and extend forms in their web applications. This tier, intended for individual developers and small projects, offers essential form-building features with a minimal setup.

---

## 🌟 Key Features

- **Core Drag-and-Drop Builder**: Implements drag-and-drop functionality powered by `dnd-kit`.
- **Basic Form Components**: Includes fundamental form elements such as text inputs, checkboxes, radio buttons, and select fields.
- **Minimal Customization**: Basic styling using TailwindCSS, with limited customization capabilities to maintain simplicity.
- **Fully Open-Source**: Open-source codebase, providing freedom to modify, extend, and build upon.
- **Self-Hosted**: Users manage hosting and infrastructure, offering flexibility in deployment.

---

## 🚀 Project Structure

```plaintext
formedge/
├── src/
│   ├── lib/                     # Package code
│   │   ├── components/          # Core form components
│   │   │   ├── FormBuilder.tsx    # Custom Form Builder component
│   │   │   ├── FormViewer.tsx     # Custom Form Viewer component
│   │   │   └── ui/              # shadcn/ui components
│   │   │       ├── butotn.tsx   # Button component from shadcn/ui
│   │   │       ├── checkbox.tsx # Checkbox component from shadcn/ui
│   │   │       ├── input.tsx    # Input component from shadcn/ui
│   │   │       └── form.tsx     # Form wrapper from shadcn/ui
│   │   ├── hooks/               # Custom hooks for form handling
│   │   ├── styles/              # TailwindCSS and other styles
│   │   │   └── index.css        # Main TailwindCSS file
│   │   ├── utils/               # Utility functions
│   │   └── index.ts             # Entry point for package exports
│   ├── dev/                     # Development/demo environment
│   │   ├── App.tsx              # Demo App for viewing components
│   │   ├── main.tsx             # Main entry for dev mode
│   │   └── index.html           # HTML file for dev environment
├── components.json              # shadcn/ui configuration
├── .eslintrc                    # ESLint configuration
├── .prettierrc                  # Prettier configuration
├── tailwind.config.js           # TailwindCSS configuration
├── tsconfig.json                # TypeScript configuration with alias paths
├── vite.config.ts               # Vite configuration for dev mode
├── vite.config.prod.ts          # Production Vite configuration for npm publishing
└── README.md                    # Documentation and usage guide
```

---

## 📦 Installation

To install the FormEdge package, run:

```bash
npm install formedge
```

---

## 🛠 Usage

### FormBuilder

The `FormBuilder` component provides a drag-and-drop interface for creating and customizing forms.

```typescript
import { FormBuilder } from 'formedge';

function MyFormBuilder() {
  return (
    <FormBuilder
      config={{
        components: ['TextInput', 'Checkbox', 'DatePicker'], // Available form components in Sidebar
        styling: { theme: 'dark' }, // Custom styling options
      }}
    />
  );
}
```

- **Configuration Options**:
  - `components`: Specify which components are available in the `Sidebar`.
  - `styling`: Customize the appearance of the `FormBuilder` canvas and sidebar.

### FormViewer

The `FormViewer` component renders the form built by `FormBuilder` and allows users to fill it out and submit responses.

```typescript
import { FormViewer } from 'formedge';

const formSchema = {
  /* JSON schema generated from FormBuilder */
};

function MyFormViewer() {
  return (
    <FormViewer
      formSchema={formSchema}
      onSubmit={(data) => console.log('Form data:', data)}
      validation={{
        requiredFields: true,         // Basic validation configuration
      }}
    />
  );
}
```

- **Props**:
  - `formSchema`: JSON schema representing the form structure, generated from `FormBuilder`.
  - `onSubmit`: Callback function triggered upon form submission.
  - `validation`: Configure validation rules, such as required fields or custom validation functions.

---

## 📐 Customization

FormEdge uses TailwindCSS for styling, allowing minimal customization through Tailwind utility classes. Advanced styling capabilities are limited in this tier to keep the package lightweight and straightforward.

To apply custom styles, import the Tailwind base styles in your main CSS:

```css
/* src/styles/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🧩 Offerings and Features

| Feature             | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| **Core Builder**    | Essential drag-and-drop functionality using `dnd-kit`          |
| **Form Components** | Includes text inputs, checkboxes, radio buttons, select fields |
| **Customization**   | Basic styling with TailwindCSS                                 |
| **Open-Source**     | Fully open-source and community-driven                         |
| **Self-Hosted**     | Users manage their own hosting infrastructure                  |

---

## ⚙️ Implementation Overview

- **Frontend Only**: The package is frontend-focused, providing essential components without backend dependencies.
- **Minimal Dependencies**: Self-contained npm package designed to integrate smoothly with other projects.
- **Hosted Publicly**: Available on the npm registry as a free and open-source tool, allowing unrestricted access.

---

## 📝 License and Contributions

FormEdge is licensed under the MIT License. Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. For major changes, please open an issue to discuss what you would like to change.

---

## 🛠 Tech Stack

| Technology      | Purpose                            |
| --------------- | ---------------------------------- |
| **React**       | Core framework for UI              |
| **TypeScript**  | Type safety and improved DX        |
| **dnd-kit**     | Drag-and-drop functionality        |
| **TailwindCSS** | Utility-first CSS framework        |
| **shadcn/ui**   | Pre-built UI components for layout |
| **Vite**        | Development environment and build  |

For more details, please refer to the full tech stack documentation included in the project.

---

## 💡 Additional Notes

- **Community-Driven**: Contributions and feedback are encouraged to help improve FormEdge for a wider audience.
- **No Official Support**: This is a community-supported tool, and users are encouraged to refer to GitHub discussions or forums for assistance.

---

## 📬 Get in Touch

For questions or suggestions, please open an issue on GitHub. We’d love to hear from you!

---
