<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## **Navbar Preview**

![alt text](<Group 1000002049 (1).png>)

- Dynamic page title
- Active Link
- Responsive for desktop, laptop, tablet, and smartphone
- Ready to use


## **Install Tailwind CSS with Laravel**  
Step-by-step guide to setting up Tailwind CSS in a Laravel project.

---

### 1. Create Your Laravel Project  
If you don’t already have a Laravel project set up, create a new one using Composer.

**Terminal**:
```bash
composer create-project laravel/laravel my-project
cd my-project
```

---

### 2. Install Tailwind CSS
Install Tailwind CSS along with its peer dependencies via `npm`. Then run the `init` command to generate the configuration files for Tailwind and PostCSS.

**Terminal**:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This will generate the following files:  
- **tailwind.config.js**  
- **postcss.config.js**

---

### 3. Configure Template Paths  
Add the paths to all of your template files in the `tailwind.config.js` file. This ensures Tailwind only processes the necessary files.

**tailwind.config.js**:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./public/**/*.*",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### 4. Add Tailwind to Your CSS  
Add the Tailwind directives to your main CSS file, typically located at **`./resources/css/app.css`**.

**app.css**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 5. Build Process

### **Using Vite**  
For Laravel 9 and above, Vite is the default build tool. Run the following command to start the build process:

**Terminal**:
```bash
npm run dev
```

Include the compiled CSS file in your **Blade** view using Vite.

**app.blade.php**:
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

---

<a href="https://tailwindcss.com/docs/guides/laravel">Learn more</a>
