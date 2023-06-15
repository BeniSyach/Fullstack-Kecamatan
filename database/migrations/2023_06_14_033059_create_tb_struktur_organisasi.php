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
        Schema::create('tb_struktur_organisasi', function (Blueprint $table) {
            $table->id('idStrukturOrganisasi');
            $table->string('kode_kecamatan')->unique();
            $table->foreign('kode_kecamatan')->references('kode_kecamatan')->on('tb_domain_kecamatan');
            $table->string('judul_struktur_organisasi');
            $table->string('deskripsi_struktur_organisasi');
            $table->text('isi_struktur_organisasi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_struktur_organisasi');
    }
};
