import './styles.scss';

import React from 'react';

import type Props from './types';

export const QuoteCard = ({ data }: Props) => {
   

  return <div className='quote-card'>{data}</div>
}
