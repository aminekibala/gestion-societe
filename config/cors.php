<?php

return [
    'paths' => ['api/*'], // Autoriser les routes API uniquement
    'allowed_methods' => ['*'], // Autoriser toutes les méthodes HTTP
    'allowed_origins' => ['http://localhost:5173/'], // Origine autorisée (React)
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'], // Autoriser tous les en-têtes
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false, // Mettre à true si vous utilisez des cookies ou des sessions
];
