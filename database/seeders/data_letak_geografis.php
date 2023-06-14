<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_letak_geografis extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_letak_geografis')->insert([
            [
                'kode_kecamatan' =>'000000',
                'judul_letak_geografis' =>'Letak Geografis Web Kecamatan',
                'Deskripsi_letak_geografis' => 'Ini adalah Letak Geografis Web kecamatan Dibangun',
                'isi_letak_geografis' => '<p>Web Kecamatan Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' =>'120709',
                'judul_letak_geografis' =>'Letak Geografis Web Kecamatan Bangun Purba',
                'Deskripsi_letak_geografis' => 'Ini adalah Letak Geografis Web kecamatan Bangun Purba Dibangun',
                'isi_letak_geografis' => '<p>Web Kecamatan Ini Menggunakan Teknologi</p> <br> <h2> PHP,JS,React js,TypeScript, dan dibungkus Menggunakan framework Laravel versi 10 </h2>',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
