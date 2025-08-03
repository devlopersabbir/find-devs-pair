import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { prettifyError, ZodType } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodType) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { success, data, error } = this.schema.safeParse(value);
    if (!success) throw new BadRequestException(prettifyError(error));
    return data;
  }
}
