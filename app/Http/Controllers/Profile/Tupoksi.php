<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Tupoksi extends Controller
{
    public function index(){
        return Inertia::render('Profile/Tupoksi',[
            'judul' => 'Tupoksi',
            'Deskripsi' => 'djaskdnaosfnasoknfaoks'
        ]);
    }
}
