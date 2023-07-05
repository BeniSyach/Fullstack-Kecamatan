<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_list_pelayanan extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_pelayanan')->insert([
            [
                'kode_kecamatan' =>'000000',
                'judul_pelayanan' =>'Letak pelayanan Web Kecamatan',
                'slug_pelayanan' => 'letak-pelayanan-daerah',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'kode_kecamatan' =>'120709',
                'judul_pelayanan' =>'Letak pelayanan Web Kecamatan Bangun Purba',
                'slug_pelayanan' => 'pelayanan_daerah_bagus',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
