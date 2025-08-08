export interface Sentiment {
    negative?: number;
    neutral?: number;
    positive?: number;
  }
  
  export interface Topic {
    id: string;
    label: string;
    volume: number;
    sentiment: Sentiment;
    sentimentScore: number;
  }