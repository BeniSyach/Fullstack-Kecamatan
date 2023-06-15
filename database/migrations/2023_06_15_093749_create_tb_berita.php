<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tb_berita', function (Blueprint $table) {
            $table->id('idBerita');
            $table->string('kode_kecamatan');
            $table->foreign('kode_kecamatan')->references('kode_kecamatan')->on('tb_domain_kecamatan');
            $table->string('judul_berita');
            $table->string('slug_berita');
            $table->string('gambar_berita');
            $table->text('isi_berita');
            $table->integer('kategori_berita_id');
            $table->foreign('kategori_berita_id')->references('idKategoriBerita')->on('tb_kategori_berita');
            $table->integer('penulis_berita');
            $table->foreign('penulis_berita')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_berita');
    }
};
