import { Injectable } from '@nestjs/common';
import { CreateSimpsonDto } from './create-simpson.dto';

export interface Simpson {
  id: number;
  name: string;
  surname: string;
}

const simpsonList: Simpson[] = [
  {
    id: 1,
    name: 'Homer',
    surname: 'Simpson',
  },
  {
    id: 2,
    name: 'Lisa',
    surname: 'Simpson',
  },
];

@Injectable()
export class AppService {
  getSimpsonList(): Simpson[] {
    return simpsonList;
  }

  addSimpson(simpson: CreateSimpsonDto): Simpson[] {
    return [...simpsonList, { id: simpsonList.length + 1, ...simpson }];
  }
}
