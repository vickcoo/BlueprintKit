import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'My First Post' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'This is the content of my post', required: false })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({ example: false, required: false })
  @IsBoolean()
  @IsOptional()
  published?: boolean;
}
