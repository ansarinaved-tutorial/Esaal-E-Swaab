<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$email = isset($input['email']) ? trim($input['email']) : '';
$name = isset($input['name']) ? trim($input['name']) : '';
$interest = isset($input['interest']) ? trim($input['interest']) : 'General Launch Notification';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please enter a valid email address']);
    exit;
}

$file = __DIR__ . '/subscribers.json';
$subscribers = [];
if (file_exists($file)) {
    $content = file_get_contents($file);
    $subscribers = json_decode($content, true) ?: [];
}

// Check existing
foreach ($subscribers as $sub) {
    if (isset($sub['email']) && strtolower($sub['email']) === strtolower($email)) {
        echo json_encode([
            'success' => true,
            'alreadySubscribed' => true,
            'message' => 'You are already registered on our launch notification list. We will notify you as soon as Esaal-E-Swaab launches!',
            'totalSubscribers' => count($subscribers)
        ]);
        exit;
    }
}

$newSub = [
    'id' => 'sub_' . time() . '_' . substr(md5(uniqid()), 0, 5),
    'email' => strtolower($email),
    'name' => $name,
    'interest' => $interest,
    'createdAt' => date('c'),
    'notified' => false
];

$subscribers[] = $newSub;
file_put_contents($file, json_encode($subscribers, JSON_PRETTY_PRINT));

echo json_encode([
    'success' => true,
    'alreadySubscribed' => false,
    'message' => 'Thank you for joining. You will be among the very first to be notified when Esaal-E-Swaab opens.',
    'totalSubscribers' => count($subscribers)
]);
