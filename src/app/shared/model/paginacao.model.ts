export class PaginacaoRequestDTO {
  paginaAtual?: number;
  itensPorPagina?: number;
  camposOrdenacao?: String[]
}

export class PaginacaoResponseDTO {
  paginaAtual?: number;
  itensPorPagina?: number;
  quantidadePaginas?: number;
  totalItens?: number
}
