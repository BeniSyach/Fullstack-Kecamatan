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
        Schema::create('tb_tupoksi', function (Blueprint $table) {
            $table->id('idTupoksi');
            $table->string('kode_kecamatan')->unique();
            $table->string('judul_tupoksi');
            $table->string('deskripsi_tupoksi');
            $table->text('isi_tupoksi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_tupoksi');
    }
};
