<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DiaryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'diaryTitle' => $this->diaryTitle,
            'diaryDate' => $this->diaryDate,
            'diaryText' => $this->diaryText,
        ];
    }
}
