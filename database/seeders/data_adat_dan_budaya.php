<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_adat_dan_budaya extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_adat_dan_budaya')->insert([
            [
                'kode_kecamatan' => '000000',
                'judul_adatDanBudaya' => 'Adat & Budaya Web Kecamatan',
                'deskripsi_adatDanBudaya' => 'ini adalah data Adat & Budaya di web Kecamatan',
                'isi_adatDanBudaya' => '<p>Web Kecamatan Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' => '120709',
                'judul_adatDanBudaya' => 'Adat & Budaya Web Kecamatan',
                'deskripsi_adatDanBudaya' => 'ini adalah data Adat & Budaya di web Kecamatan',
                'isi_adatDanBudaya' => '<p>Web Kecamatan Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
