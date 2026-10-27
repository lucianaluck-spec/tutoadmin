import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ConsultarImagemIntegranteRequestDTO, ConsultarIntegranteRequestDTO, ConsultarIntegranteResponseDTO,
  IntegranteAvatarRequestDTO, IntegranteDTO, IntegranteImagemDTO,
  IntegranteResponseDTO, StatusDTO
} from '@/shared/model/integrante.model ';
import { APIConfig } from '../../../config/api.config';

@Injectable({ providedIn: 'root' })
export class IntegranteService {

  constructor(private http: HttpClient) { }

  private readonly ENDPOINT: string = 'integrantes';
  private readonly URL: string = APIConfig.CADASTROS_API_URL
    + "/"
    + APIConfig.CADASTROS_API_VERSION
    + "/"
    + this.ENDPOINT;
  private urlPrepared;

  public async listAll(paginateFilter: ConsultarIntegranteRequestDTO):
    Promise<ConsultarIntegranteResponseDTO> {
    this.urlPrepared = this.URL + "?paginacao.paginaAtual=" +
      paginateFilter.paginacao.paginaAtual +
      "&paginacao.itensPorPagina=" +
      paginateFilter.paginacao.itensPorPagina;
    if (paginateFilter.paginacao.camposOrdenacao.length > 0) {
      for (let i = 0; i < paginateFilter.paginacao.camposOrdenacao.length; i++) {
        this.urlPrepared = this.urlPrepared +
          "&paginacao.camposOrdenacao=" + paginateFilter.paginacao.camposOrdenacao[i];
      }
    }

    if (paginateFilter.nomeAtual !== null) {
      this.urlPrepared = this.urlPrepared +
        "&nomeAtual=" + paginateFilter.nomeAtual;
    }
    if (paginateFilter.nomeConjuge !== null) {
      this.urlPrepared = this.urlPrepared +
        "&nomeConjuge=" + paginateFilter.nomeConjuge;
    }
    if (paginateFilter.idGrupo !== null) {
      this.urlPrepared = this.urlPrepared +
        "&idGrupo=" + paginateFilter.idGrupo;
    }
    if (paginateFilter.idAncestral !== null) {
      this.urlPrepared = this.urlPrepared +
        "&idAncestral=" + paginateFilter.idAncestral;
    }
    if (paginateFilter.idStatus !== null) {
      this.urlPrepared = this.urlPrepared +
        "&idStatus=" + paginateFilter.idStatus;
    }
     if (paginateFilter.aceito !== null) {
      this.urlPrepared = this.urlPrepared +
        "&aceito=" + paginateFilter.aceito;
    }
    if (paginateFilter.idAncestral !== null) {
      this.urlPrepared = this.urlPrepared +
        "&idAncestral=" + paginateFilter.idAncestral;
    }
    return await this.http.get<any>(this.urlPrepared)
      .toPromise()
      .then(data => { return data; });
  }

  public async listAncestrais(): Promise<IntegranteDTO[]> {
    return await this.http.get<any>(this.URL + "/ancestrais/")
      .toPromise()
      .then(data => { return data; });
  }


  public async listAncestraisByGrupo(idgrupo: number): Promise<IntegranteDTO[]> {
    return await this.http.get<any>(this.URL + "/ancestrais_grupo/" + idgrupo)
      .toPromise()
      .then(data => { return data; });
  }

  public async listAncestraisByGeracao(geracao: number): Promise<IntegranteDTO[]> {
    return await this.http.get<any>(this.URL + "/geracao_grupo/" + geracao)
      .toPromise()
      .then(data => { return data; });
  }

  public async delete(id: number): Promise<void> {
    return await this.http.delete<any>(this.URL + "/" + id)
      .toPromise()
      .then(data => { return data; });
  }

  public async create(integrante: IntegranteDTO): Promise<IntegranteResponseDTO> {
    return await this.http.post<any>(this.URL, integrante)
      .toPromise()
      .then(data => { return data; });
  }

  public async update(integrante: IntegranteDTO): Promise<IntegranteResponseDTO> {
    return await this.http.put<any>(this.URL + "/" + integrante.id, integrante)
      .toPromise()
      .then(data => { return data; });
  }


  public async atualizaAvatars(atualizar: IntegranteAvatarRequestDTO): Promise<IntegranteResponseDTO> {
    return await this.http.put<any>(this.URL + "/avatar/ ", atualizar)
      .toPromise()
      .then(data => { return data; });
  }

  public async listDocumentosByIntegrante(idIntegrante: number): Promise<IntegranteImagemDTO[]> {
    return await this.http.get<any>(this.URL + "/docto/" + idIntegrante)
      .toPromise()
      .then(data => { return data; });
  }

  public async addImagem(item: IntegranteImagemDTO): Promise<IntegranteImagemDTO[]> {
    return await this.http.put<any>(this.URL + "/addimagem/", item)
      .toPromise()
      .then(data => { return data; });
  }

  public async deleteImagem(idImagem: number): Promise<void> {
    return await this.http.delete<any>(this.URL + "/imagem/" + idImagem)
      .toPromise()
      .then(data => { return data; });
  }


  public async listImagensByIntegrante(dto: ConsultarImagemIntegranteRequestDTO): Promise<IntegranteImagemDTO[]> {
    return await this.http.get<any>(this.URL + "/images/?tipo=" + dto.tipo + "&idIntegrante=" +
      dto.idIntegrante)
      .toPromise()
      .then(data => { return data; });
  }


} 
