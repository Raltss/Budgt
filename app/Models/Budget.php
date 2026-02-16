<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Budget extends Model
{
    /** @use HasFactory<\Database\Factories\BudgetFactory> */
    use HasFactory;

    protected $fillable = [
        "name",
        "start_date",
        "end_date",
    ];


    public function transactions()
{
    return $this->hasMany(Transaction::class);
}
}
