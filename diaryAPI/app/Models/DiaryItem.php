<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiaryItem extends Model
{
    use HasFactory;

    protected $fillable = ['diaryTitle', 'diaryDate', 'diaryText'];
}
