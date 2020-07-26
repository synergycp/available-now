<?php

$config = [
  'api' => 'api.cp.example.org',
  'key' => '',
];

$url = sprintf(
  'https://%s/server?available=true&key=%s&per_page=500',
  $config['api'],
  $config['key']
);
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$output = json_decode(curl_exec($ch));
$output->data->data = array_map(function ($result) {
  return [
    'cpu' => $result->cpu,
    'mem' => $result->mem,
    'hdd_counts' => $result->hdd_counts,
    'group' => $result->group,
  ];
}, $output->data->data);

curl_close($ch);

echo json_encode($output);
