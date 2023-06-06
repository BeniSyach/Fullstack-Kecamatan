<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Letak_Geografis extends Controller
{
    public function index(){
        return Inertia::render('Profile/LetakGeografis',[
            'judul'=>'Letak Geografis',
            'Deskripsi' => 'djasldjsapkdmasklmdaslmdmnkfnaedinp'
        ]);
    }
    
}
