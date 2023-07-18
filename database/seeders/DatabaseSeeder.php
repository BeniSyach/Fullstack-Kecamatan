<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            data_domain_kecamatan::class,
            data_adat_dan_budaya::class,
            data_agenda::class,
            data_kategori_berita::class,
            data_berita::class,
            data_list_pelayanan::class,
            data_list_unduhan::class,
            data_potensi::class,
            data_detail_pelayanan::class,
            data_detail_potensi::class,
            data_detail_unduhan::class,
            data_foto::class,
            data_kata_sambutan::class,
            data_kepegawaian::class,
            data_kependudukan::class,
            data_letak_geografis::class,
            data_prestasi::class,
            data_sejarah_kecamatan::class,
            data_slider::class,
            data_struktur_organisasi::class,
            data_tupoksi::class,
            data_video::class,
            data_visi_dan_misi::class,
            data_wisata::class,
        ]);
    }
}
