import { SafeResourceUrl } from "@angular/platform-browser";

export class GrupoDTO {
  id?: number;
  descricao?: string;
  geracao?: number;
  tipoSequencia?: string;
  fotosString?: GrupoImagemDTO[];
}


export class GrupoRelacionamentoResponseDTO {
  id?: number;
  descricao?: string;
  geracao?: number;
  tipoSequencia?: string;
 
}

export class GrupoImagemDTO {
  idGrupo?: number;
  imagemString?: String;
  usuarioCadastro?: String;
  dataCadastro?: Date;
  descricao?: String;
  
}

export class ImagemView {
  previewImageSrc: SafeResourceUrl;
  thumbnailImageSrc: SafeResourceUrl;
  alt: String;
  title: String;
  origem: String;
  descricao: String;
  id: number;
}