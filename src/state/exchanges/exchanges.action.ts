

import {IParticipant} from '../../model';

export type ExchangesAction = GenerateAction;


// ----------------------------------------------------------------------------
export type GenerateAction = {
    type: 'GENERATE_EXCHANGE';
    participants: IParticipant[];
};
export const createActionGenerateExchange = (data: IParticipant[]): GenerateAction =>
    ({ type: 'GENERATE_EXCHANGE', participants: data });
