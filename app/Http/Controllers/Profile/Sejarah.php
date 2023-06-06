<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Sejarah extends Controller
{
    public function index(){
        return Inertia::render('Profile/Sejarah',[
            'judul'=>'Sejarah',
            'Deskripsi' => 'djasldjsapkdmasklmdaslmdmnkfnaedinp'
        ]);
    }
}
