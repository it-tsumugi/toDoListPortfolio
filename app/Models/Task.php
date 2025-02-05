<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $table = 'tasks';
    protected $fillable = [
        'task','task_list_id',"order"
    ];

    public function task_list(){
        return $this->belongsTo("App\Models\TaskList");
    }
}
