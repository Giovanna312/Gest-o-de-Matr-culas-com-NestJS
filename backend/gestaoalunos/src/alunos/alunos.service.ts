import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunosService {
  // Pilar POO: Encapsulamento - Armazenamento em memória
  private alunos: Aluno[] = [];

  create(createAlunoDto: CreateAlunoDto) {
    const novoAluno = new Aluno(createAlunoDto);

    this.alunos.push(novoAluno);
    return novoAluno;
  }

  findAll() {
    return this.alunos;
  }

  findOne(codigo_matricula: string) {
    return this.alunos.find(aluno => aluno.codigo_matricula === codigo_matricula);
  }

  update(codigo_matricula: string, dados: UpdateAlunoDto) {
    const index = this.alunos.findIndex(aluno => aluno.codigo_matricula === codigo_matricula);

    if (index >= 0) {
      this.alunos[index] = { ...this.alunos[index], ...dados };
      return this.alunos[index];
    }
    return `Aluno com matrícula ${codigo_matricula} não encontrado.`;
  }

  remove(codigo_matricula: string) {
    const index = this.alunos.findIndex(aluno => aluno.codigo_matricula === codigo_matricula);
    
    if (index >= 0) {
      this.alunos.splice(index, 1);
      return `Aluno com matrícula ${codigo_matricula} foi removido.`;
    }
    return `Aluno com matrícula ${codigo_matricula} não encontrado.`;
  }
}