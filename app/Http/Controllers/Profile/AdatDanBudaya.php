<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdatDanBudaya extends Controller
{
    public function index(){
        return Inertia::render('Profile/AdatDanBudaya',[
            'judul'=>'Adat & Budaya',
            'Deskripsi'=>'ldnasodnasokdnaskndoasfbnsaknflaks'
        ]);
    }
}
