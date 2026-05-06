import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  @IsNotEmpty({ message: 'A matrícula não pode estar vazia' })
  codigo_matricula: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  nome_completo: string;

  @IsOptional()
  @IsString()
  situacao?: string;

  @IsOptional()
  @IsString()
  acompanhamento?: string;
}
