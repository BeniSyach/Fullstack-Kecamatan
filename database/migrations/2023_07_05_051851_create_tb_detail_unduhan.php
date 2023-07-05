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
        Schema::create('tb_detail_unduhan', function (Blueprint $table) {
            $table->id('idDetailUnduhan');
            $table->string('kode_kecamatan');
            $table->foreign('kode_kecamatan')->references('kode_kecamatan')->on('tb_domain_kecamatan');
            $table->integer('unduhan_id')->unique();
            $table->foreign('unduhan_id')->references('idUnduhan')->on('tb_list_unduhan');
            $table->string('dokumen');
            $table->integer('jumlah_unduhan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_detail_unduhan');
    }
};
