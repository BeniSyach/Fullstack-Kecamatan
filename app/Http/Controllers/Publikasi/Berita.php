<?php

namespace App\Http\Controllers\Publikasi;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Berita extends Controller
{
    public function index(){
        return Inertia::render('Publikasi/Berita',[
            'judul'=>'Berita'
        ]);
    }
}
