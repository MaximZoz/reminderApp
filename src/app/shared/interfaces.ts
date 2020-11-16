export interface User {
  email: string;
  password: string;
}

export interface Post {
  note: string;
  date: Date;
}
export interface Reminder {
  id: string;
  note: string;
  date: Date;
}
