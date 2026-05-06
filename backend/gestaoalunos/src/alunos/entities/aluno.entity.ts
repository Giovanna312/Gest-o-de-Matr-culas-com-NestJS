export class Aluno {
  codigo_matricula: string;
  nome_completo: string;
  situacao: string;
  acompanhamento: string;

  constructor(dados?: Partial<Aluno>) {
    if (dados) {
      Object.assign(this, dados);
    }

    this.situacao = dados?.situacao || 'Cursando';
  }
}
