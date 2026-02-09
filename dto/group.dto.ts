export interface CreateGroupDto {
  title: string;
  days: string;
  time: string;
  added_by: string;
  teacher_id: number
}

export interface UpdateGroupDto {
  title?: string;
  days?: string;
  time?: string;
  added_by?: number;
  teacher_id?: number
}
