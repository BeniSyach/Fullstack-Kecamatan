<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StrukturOrganisasi extends Controller
{
    public function index(){
        return Inertia::render('Profile/StrukturOrganisasi',[
            'judul' => 'Struktur Organisasi',
            'Deskripsi' => 'djklasdjiasfjiafnoap'
        ]);
    }
}
