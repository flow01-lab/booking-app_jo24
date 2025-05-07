import { MergeDeep } from 'type-fest';
import { Database as DatabaseGenerated } from './database.types';
export type { Json } from './database.types';

// Override the type for a specific column in a view:
export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Tables: {
        offers: {
          Row: {
            created_at: string
            description: string
            id: number
            promo: number
            ticketsqty: number
            title: string
          }
          Insert: {
            created_at?: string
            description: string
            id?: number
            promo?: number
            ticketsqty: number
            title: string
          }
          Update: {
            created_at?: string
            description?: string
            id?: number
            promo?: number
            ticketsqty?: number
            title?: string
          }
          Relationships: []
        }
      }
    }
  }
>