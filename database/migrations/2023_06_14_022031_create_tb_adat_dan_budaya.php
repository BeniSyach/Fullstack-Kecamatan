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
        Schema::create('tb_adat_dan_budaya', function (Blueprint $table) {
            $table->id('idAdatDanBudaya');
            $table->string('kode_kecamatan')->unique();
            $table->string('judul_adatDanBudaya');
            $table->string('deskripsi_adatDanBudaya');
            $table->text('isi_adatDanBudaya');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_adat_dan_budaya');
    }
};
