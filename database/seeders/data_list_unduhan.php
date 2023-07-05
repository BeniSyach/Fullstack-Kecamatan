<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_list_unduhan extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_list_unduhan')->insert([
            [
                'kode_kecamatan' =>'000000',
                'judul_unduhan' =>'Letak unduhan Web Kecamatan',
                'slug_unduhan' => 'letak-unduhan-daerah',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' =>'120709',
                'judul_unduhan' =>'Letak unduhan Web Kecamatan Bangun Purba',
                'slug_unduhan' => 'unduhan_daerah_bagus',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
