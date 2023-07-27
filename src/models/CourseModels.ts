export interface Discipline {
  id: number;
  nome: string;
  descricao: string;
  cargaHoraria: number;
  ativo: boolean;
  dataCadastro: string;
  dataAtualizacao: string | null;
}

export interface AreaConhecimento {
  id: number;
  nome: string;
  descricao: string;
  ativo: boolean;
  dataCadastro: string;
  dataAtualizacao: string | null;
}

export interface Course {
  id: number;
  nome: string;
  descricao: string;
  cargaHoraria: number;
  disciplinas: Discipline[];
  areaConhecimento: AreaConhecimento;
  ativo: boolean;
  dataCadastro: string;
  dataAtualizacao: string | null;
}

// Interface for an array of courses
export interface CourseArray extends Array<Course> {}

// Interface for a single course or an array of courses
export type CourseOrArray = Course | CourseArray;
