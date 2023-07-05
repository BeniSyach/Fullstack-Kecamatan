<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_potensi extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_list_potensi')->insert([
            [
                'kode_kecamatan' =>'000000',
                'judul_potensi' =>'Letak Geografis Web Kecamatan',
                'slug_potensi' => 'letak-potensi-daerah',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' =>'120709',
                'judul_potensi' =>'Letak Geografis Web Kecamatan Bangun Purba',
                'slug_potensi' => 'potensi_daerah_bagus',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
