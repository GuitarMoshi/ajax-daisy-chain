<?php
sleep(4);

$people = [];

for ($i = 0; $i < 10; $i++) {
  $firstName = generateRandomName();
  $lastName = generateRandomName();
  $age = rand(18, 65);

  $person = [
    'firstName' => $firstName,
    'lastName' => $lastName,
    'age' => $age
  ];

  $people[] = $person;
}

echo json_encode($people);

function generateRandomName()
{
  $names = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'Daniel', 'Olivia', 'Matthew', 'Sophia'];
  return $names[array_rand($names)];
}