<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel + React</title>
    @vite('resources/js/app.jsx')

</head>
<body>
    <div id="app"></div>

    <!-- Inclure le script compilé par Laravel Mix -->
    <script src="{{ mix('js/app.jsx') }}"></script>
</body>
</html>
