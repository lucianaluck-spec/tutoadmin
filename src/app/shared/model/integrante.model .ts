import { EstiloMusicalDTO } from "./estiloMusical.model";
import { GrupoDTO } from "./grupo.model";
import { HabilitacaoDTO } from "./habilitacao.model";
import { HabitoAlimentarDTO } from "./habitoAlimentar.model";
import { LocalizacaoDTO } from "./localizacao.model";
import { PaginacaoRequestDTO, PaginacaoResponseDTO } from "./paginacao.model";
import { PoliticaDTO } from "./politica.model";
import { ProfissaoDTO } from "./profissao.model";
import { ReligiaoDTO } from "./religiao.model";
import { SignoDTO } from "./signo.model";
import { TemperamentoDTO } from "./temperamento.model";
import { TimeFutebolDTO } from "./timeFutebol.model";
import { TipoSanguineoDTO } from "./tipoSanguineo.model";

export class IntegranteDTO {
  id?: number;
  idProfissao?: number;
  idAncestral?: number;
  idGrupo?: number;
  idReligiao?: number;
  idSigno?: number;
  idTimeFutebol?: number;
  idLocalizacaoOrigem?: number;
  idLocalizacaoAtual?: number;
  idPolitica?: number;
  idTipoSanguineo?: number;
  idEstiloMusical?: number;
  idHabilitacao?: number;
  idHabitoAlimentar?: number;
  idTemperamento?: number;
  sequencia?: number;
  nomeAtual?: String;
  nomeSolteiro?: String;
  nomeConjugeAtual?: String;
  nomeConjugeAnterior?: String;
  observacao?: String;
  dataNascimento?: Date;
  dataFalecimento?: Date;
  email?: String;
  telefone?: String;
  nroCadastro?: String;
  idStatus?: number;
  sexo?: string;
  fotoString?: String;
  fotoStringConjuge?: String;
  nome1Ancestral?: String;
  nome2Ancestral?: String;
  motivoCancelamento?: String;
  aceito?: Boolean;
 }

export class IntegranteResponseDTO {
  id?: number;
  profissao?: ProfissaoDTO;
  religiao?: ReligiaoDTO;
  signo?: SignoDTO;
  timeFutebol?: TimeFutebolDTO;
  localizacaoOrigem?: LocalizacaoDTO;
  localizacaoAtual?: LocalizacaoDTO
  politica?: PoliticaDTO;
  estiloMusical?: EstiloMusicalDTO;
  temperamento?: TemperamentoDTO;
  tipoSanguineo?: TipoSanguineoDTO;
  habilitacao?: HabilitacaoDTO;
  habitoAlimentar?: HabitoAlimentarDTO;
  sequencia?: number;
  nomeAtual?: String;
  nomeSolteiro?: String;
  nomeConjugeAtual?: String;
  nomeConjugeAnterior?: String;
  dataNascimento?: Date;
  dataFalecimento?: Date;
  email?: String;
  telefone?: String;
  nroCadastro?: String;
  status?: StatusDTO;
  grupo?: GrupoDTO
  ancestral?: IntegranteAncestralResponseDTO;
  nomeAncestral?: String;
  nomeGrupo?: String;
  sexo?: string;
  fotoString?: String;
  fotoStringConjuge?: String;
  nomeCodigo?: String;
  nome1Ancestral?: String;
  nome2Ancestral?: String;
  motivoCancelamento?: String;
  nameStatus?: String;
  aceito?: Boolean;
}


export class StatusDTO {
  id?: number;
  nome?: String;
  descricao?: String;
}

export class IntegranteAncestralResponseDTO {
  id?: number;
  nomeAtual?: String;
  sequencia?: number;
  status?: StatusDTO;
  grupo?: GrupoDTO;
  fotoString?: string;
  fotoStringConjuge?: String;
}

export class IntegranteAvatarRequestDTO {
  id?: number;
  fotoString?: String;
  fotoStringConjuge?: String;
}

export class ConsultarIntegranteRequestDTO {
  paginacao?: PaginacaoRequestDTO;
  nomeAtual?: string;
  nomeConjuge?: string;
  idGrupo?: number;
  idAncestral?: number;
  idStatus?: number;
  aceito?: boolean;
 }


export class ConsultarImagemIntegranteRequestDTO {
  idIntegrante?: number;
  tipo?: String;
 }

export class ConsultarIntegranteResponseDTO {
  itens?: IntegranteDTO[];
  paginacao?: PaginacaoResponseDTO
}


export class IntegranteImagemDTO {
  id?: number;
  idIntegrante?: number;
  imagemString?: String;
  tipoDocumento?: String;
  usuarioCadastro?: String;
  dataCadastro?: Date;
  descricao?: String;
}

