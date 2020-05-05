<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Profile;
use Faker\Generator as Faker;

$factory->define(Profile::class, function (Faker $faker) {
    $imgs = ['img/profile1.png', 'img/profile2.jpg', 'img/profile3.jpg', 'img/profile4.jpg'];

    $name = $faker->name;
    $img = $imgs[array_rand($imgs)];
    $date = $faker->dateTimeBetween('-30 day', '-1 day');

    return [
        'name' => $name,
        'img' => $img,
        'created_at' => $date,
        'updated_at' => $date,
    ];
});
