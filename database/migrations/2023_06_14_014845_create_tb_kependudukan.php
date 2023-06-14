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
        Schema::create('tb_kependudukan', function (Blueprint $table) {
            $table->id('idKependudukan');
            $table->string('kode_kecamatan')->unique();
            $table->string('judul_kependudukan');
            $table->string('deskripsi_kependudukan');
            $table->text('isi_kependudukan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_kependudukan');
    }
};
