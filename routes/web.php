<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BudgetController;


Route::get('/', [BudgetController::class, 'index']);
Route::resource('/budget', BudgetController::class)->except('index');