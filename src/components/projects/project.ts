export interface Project {
  titulo: string;
  tipo: string;
  descripcion: string;
  tecnologias: string[];
  link?: string;
  imagen?: string;
  plataformas?: string[];
  galeria?: {
    imagen: string;
    descripcion: string;
  }[];
}
