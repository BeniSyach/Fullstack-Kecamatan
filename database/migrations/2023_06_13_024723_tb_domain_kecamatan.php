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
        Schema::create('tb_domain_kecamatan', function (Blueprint $table) {
            $table->id('idDomain');
            $table->string('domain_kecamatan')->unique();
            $table->string('kode_kecamatan')->unique();
            $table->string('judul_website')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_domain_kecamatan');
    }
};
