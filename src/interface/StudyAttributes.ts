export default interface StudyAttributes {
  name: string;
  location: string;
  start: Date;
  end?: Date;
  specialization: Specialization[];
  mention?: string;
  projects?: Projects[];
}

export interface Projects {
  id: number;
  year: number;
  name: string;
}

export interface Specialization {
  id: number;
  name: string;
}
