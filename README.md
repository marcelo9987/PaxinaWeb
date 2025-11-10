# Páxina Web Persoal - Marcelo Fort Muñoz

Páxina web persoal e profesional internacionalizada construída con Astro e Tailwind CSS.

## 🌍 Idiomas

- **Galego** (Nativo) - `/`
- **Español** (Nativo) - `/es`
- **Inglés** (Avanzado C1) - `/en`
- **Portugués** (Básico) - `/pt`

## 🚀 Tecnoloxías

- [Astro](https://astro.build/) - Framework web moderno
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- TypeScript - Tipado estático

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desenvolvemento

```bash
npm run dev
```

A páxina estará dispoñible en `http://localhost:4321`

## 🏗️ Build

```bash
npm run build
```

## 👀 Preview

```bash
npm run preview
```

## 📁 Estrutura do Proxecto

```
/
├── public/          # Arquivos estáticos
├── src/
│   ├── components/  # Compoñentes Astro
│   ├── data/       # Datos (skills, languages, projects)
│   ├── i18n/       # Traducións
│   ├── layouts/    # Layouts
│   └── pages/      # Páxinas
└── package.json
```

## ✏️ Personalización

### Engadir Proxectos

Edita `src/data/projects.ts` e engade os teus proxectos:

```typescript
{
  id: 'project-1',
  title: 'Mi Proyecto',
  description: 'Descripción en español',
  descriptionEn: 'Description in English',
  technologies: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
  featured: true
}
```

### Modificar Información de Contacto

Edita `src/components/Contact.astro` e actualiza os enlaces de email, LinkedIn e GitHub.

## 📝 Licenza

GNU GENERAL PUBLIC LICENSE

