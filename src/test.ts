import { pipe } from 'fp-ts/function';
import * as D from 'io-ts/Decoder';
import * as E from 'fp-ts/Either';
import * as S from 'fp-ts/Show';
import * as n from 'fp-ts/number';

import { Alpha } from "./Alpha";
import { Empty } from "./Empty";


declare const alphaDecoder: <S extends string>() => D.Decoder<S, S & Alpha>
declare const emptyDecoder: <S extends string>() => D.Decoder<S, S & Empty>

const showable = <T extends unknown>({ show }: S.Show<T>) => D.map(show)

const alphaEmptyDecoder = pipe(
  D.number,
  showable(n.Show),
  D.compose(alphaDecoder()),
  D.compose(emptyDecoder())
)


pipe(
  D.number
)
const t = showable(n.Show)(D.number)


const fn = <T extends Empty>(str: T) => str;

pipe(
    alphaEmptyDecoder.decode({}),
    E.map(x => fn(x))
)
