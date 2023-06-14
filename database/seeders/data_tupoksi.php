<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_tupoksi extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_tupoksi')->insert([
            [
                'kode_kecamatan' => '000000',
                'judul_tupoksi' => 'Tupoksi Web Kecamatan',
                'deskripsi_tupoksi' => 'ini adalah data Tupoksi di web Kecamatan',
                'isi_tupoksi' => '<p>Web Kecamatan Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' => '120709',
                'judul_tupoksi' => 'Tupoksi Web Kecamatan Bangun Purba',
                'deskripsi_tupoksi' => 'ini adalah data Tupoksi di web Kecamatan Bangun Purba',
                'isi_tupoksi' => '<p>Web Kecamatan Bangun Purba Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
