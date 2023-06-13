<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_domain_kecamatan extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tb_domain_kecamatan')->insert([
            [
                'domain_kecamatan' => 'hamparanperak.deliserdangkab.go.id',
                'kode_kecamatan' =>'120715',
                'judul_website' => 'Hamparan Perak',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'labuhandeli.deliserdangkab.go.id',
                'kode_kecamatan' =>'120716',
                'judul_website' => 'Labuhan Deli',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'stmhilir.deliserdangkab.go.id',
                'kode_kecamatan' =>'120708',
                'judul_website' => 'STM Hilir',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'stmhulu.deliserdangkab.go.id',
                'kode_kecamatan' =>'120711',
                'judul_website' => 'STM Hulu',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'sunggal.deliserdangkab.go.id',
                'kode_kecamatan' =>'120714',
                'judul_website' => 'Sunggal',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'percutseituan.deliserdangkab.go.id',
                'kode_kecamatan' =>'120717',
                'judul_website' => 'Percut Sei Tuan',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'gunungmeriah.deliserdangkab.go.id',
                'kode_kecamatan' =>'120701',
                'judul_website' => 'Gunung Meriah',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'patumbak.deliserdangkab.go.id',
                'kode_kecamatan' =>'120712',
                'judul_website' => 'Patumbak',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'batangkuis.deliserdangkab.go.id',
                'kode_kecamatan' =>'120718',
                'judul_website' => 'Batang Kuis',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'tanjungmorawa.deliserdangkab.go.id',
                'kode_kecamatan' =>'120702',
                'judul_website' => 'Tanjung Morawa',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'delitua.deliserdangkab.go.id',
                'kode_kecamatan' =>'120713',
                'judul_website' => 'Deli Tua',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'birubiru.deliserdangkab.go.id',
                'kode_kecamatan' =>'120707',
                'judul_website' => 'Biru Biru',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'lubukpakam.deliserdangkab.go.id',
                'kode_kecamatan' =>'120719',
                'judul_website' => 'Lubuk Pakam',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'pagarmerbau.deliserdangkab.go.id',
                'kode_kecamatan' =>'120720',
                'judul_website' => 'Pagar Merbau',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'namorambe.deliserdangkab.go.id',
                'kode_kecamatan' =>'120706',
                'judul_website' => 'Namorambe',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'pancurbatu.deliserdangkab.go.id',
                'kode_kecamatan' =>'120705',
                'judul_website' => 'Pancur Batu',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'beringin.deliserdangkab.go.id',
                'kode_kecamatan' =>'120722',
                'judul_website' => 'Beringin',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'pantailabu.deliserdangkab.go.id',
                'kode_kecamatan' =>'120721',
                'judul_website' => 'Pantai Labu',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'kutalimbaru.deliserdangkab.go.id',
                'kode_kecamatan' =>'120704',
                'judul_website' => 'Kutalimbaru',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'sibolangit.deliserdangkab.go.id',
                'kode_kecamatan' =>'120703',
                'judul_website' => 'Sibolangit',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'galang.deliserdangkab.go.id',
                'kode_kecamatan' =>'120710',
                'judul_website' => 'Galang',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'domain_kecamatan' => 'bangunpurba.deliserdangkab.go.id',
                'kode_kecamatan' =>'120709',
                'judul_website' => 'Bangun Purba',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]
    );
    }
}
