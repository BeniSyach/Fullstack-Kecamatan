<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Kependudukan extends Controller
{
    public function index(){
        return Inertia::render('Profile/Kependudukan',[
            'judul'=>'Kependudukan',
            'Deskripsi' => 'djasldjsapkdmasklmdaslmdmnkfnaedinp'
        ]);
    }
}
