<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
    @vite('resources/css/app.css') <!-- Inclure le CSS généré -->
</head>
<body class="bg-gray-100 text-gray-800">

    <div class="flex items-center justify-center min-h-screen">
        <div class="bg-white shadow-lg rounded-lg p-8">
            <h1 class="text-4xl font-bold text-blue-500 mb-4">Bienvenue sur Laravel</h1>
            <p class="text-lg text-gray-600">Ceci est un test pour vérifier TailwindCSS.</p>
            <button class="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
                Découvrir
            </button>
        </div>
    </div>

</body>
</html>
