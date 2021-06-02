interface ContaCliente {
  lancamentoContaCorrenteCliente: LancamentoContaCorrenteCliente;
  dataEfetivaLancamento: string;
  dataLancamentoContaCorrenteCliente: string;
  numeroEvento: number;
  descricaoGrupoPagamento: string;
  codigoIdentificadorUnico: string;
  nomeBanco: string;
  quantidadeLancamentoRemessa: number;
  numeroRaizCNPJ: string;
  numeroSufixoCNPJ: string;
  valorLancamentoRemessa: number;
  dateLancamentoContaCorrenteCliente: number;
  dateEfetivaLancamento: number;
}

interface LancamentoContaCorrenteCliente {
  numeroRemessaBanco: number;
  nomeSituacaoRemessa: string;
  dadosDomicilioBancario: DadosDomicilioBancario;
  nomeTipoOperacao: string;
}
interface DadosDomicilioBancario {
  codigoBanco: number;
  numeroAgencia: number;
  numeroContaCorrente: string;
}
