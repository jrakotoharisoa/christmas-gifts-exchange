export interface IParticipant {
    id: number;
    name: string;
    group: string;
    type: string;
}


export interface IGifsExchange {
    sender: string;
    receiver: string;
}

export type Criteria = (sender: IParticipant, receiver: IParticipant) => boolean;
