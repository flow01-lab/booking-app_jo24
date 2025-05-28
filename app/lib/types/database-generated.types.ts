import { MergeDeep } from 'type-fest';
import { Database as DatabaseGenerated } from './supabase_database.types';
export type { Json } from './supabase_database.types';

// Override the type for a specific column in a view:
export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Tables: {
        cart: {
          Row: {
            cartlog: string
            created_at: string | null
            eventtitle: string[] | null
            id: string
            offerrelat: string[] | null
            priceoot: number[] | null
            sumcartwt: number | null
            tax: number
            ticketsqty: number[] | null
            userref: string | null
          }
          Insert: {
            cartlog: string
            created_at?: string | null
            eventtitle?: string[] | null
            id?: string
            offerrelat?: string[] | null
            priceoot?: number[] | null
            sumcartwt?: number | null
            tax: number
            ticketsqty?: number[] | null
            userref?: string | null
          }
          Update: {
            cartlog?: string
            created_at?: string | null
            eventtitle?: string[] | null
            id?: string
            offerrelat?: string[] | null
            priceoot?: number[] | null
            sumcartwt?: number | null
            tax?: number
            ticketsqty?: number[] | null
            userref?: string | null
          }
          Relationships: []
        }
        events: {
          Row: {
            adressnum: number | null
            adressroad: string
            city: string
            created_at: string
            datetime: string
            description: string
            id: string
            location: string
            picto: string
            price: number
            sells: number | null
            stocks: number
            title: string
            updated_at: string
            zipcode: string
          }
          Insert: {
            adressnum?: number | null
            adressroad: string
            city: string
            created_at?: string
            datetime?: string
            description?: string
            id?: string
            location: string
            picto?: string
            price: number
            sells?: number | null
            stocks: number
            title: string
            updated_at?: string
            zipcode: string
          }
          Update: {
            adressnum?: number | null
            adressroad?: string
            city?: string
            created_at?: string
            datetime?: string
            description?: string
            id?: string
            location?: string
            picto?: string
            price?: number
            sells?: number | null
            stocks?: number
            title?: string
            updated_at?: string
            zipcode?: string
          }
        Relationships: []
      }

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
        
        tickets: {
          Row: {
            created_at: string
            eventadressnum: number
            eventadressroad: string
            eventcity: string
            eventdate: string
            eventid: number
            eventlocation: string
            eventzipcode: number
            id: string
            userkey: string
          }
          Insert: {
            created_at?: string
            eventadressnum: number
            eventadressroad: string
            eventcity: string
            eventdate: string
            eventid?: number
            eventlocation: string
            eventzipcode: number
            id?: string
            userkey: string
          }
          Update: {
            created_at?: string
            eventadressnum?: number
            eventadressroad?: string
            eventcity?: string
            eventdate?: string
            eventid?: number
            eventlocation?: string
            eventzipcode?: number
            id?: string
            userkey?: string
          }
        Relationships: []
      }

      }
    }
  }
>

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

    export type EventsTypes = Tables<'events'>;

    export type OffersTypes = Tables<'offers'>;

    export type TicketsTypes = Tables<'tickets'>;

    export type CartTypes = Tables<'cart'>;

    