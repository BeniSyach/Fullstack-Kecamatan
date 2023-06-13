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
        Schema::create('tb_sejarah', function (Blueprint $table) {
            $table->id('idSejarah');
            $table->string('kode_kecamatan')->unique();
            $table->string('judul_sejarah');
            $table->string('Deskripsi_sejarah');
            $table->text('isi_sejarah');
            $table->string('penulis_sejarah');
            $table->string('jabatan_penulis_sejarah');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_sejarah');
    }
};
