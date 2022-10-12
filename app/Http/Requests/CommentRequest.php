<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|string|max:100',
            'body' => 'required|string|max:4000',
            'open' => 'required',
            'evaluation' => 'required|integer|min:0|max:200',
        ];
    }
}