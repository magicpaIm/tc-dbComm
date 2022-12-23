import { Document } from 'mongodb';

export interface IHeatMap {
    data?: Date,
    channel?: string,
    messages?: Array<number>,
    interactions?: Array<number>,
    emojis?: Array<number>,
}

export interface IHeatMapModel extends IHeatMap, Document { }
