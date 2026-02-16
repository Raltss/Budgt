<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    /** @use HasFactory<\Database\Factories\TransactionFactory> */
    use HasFactory;

    protected $fillable = [
        "budget_id",
        "type", 
        "amount",
        "category",
        "description",
        "transaction_date",
    ];

    public function budget()
{
    return $this->belongsTo(Budget::class);
}
}