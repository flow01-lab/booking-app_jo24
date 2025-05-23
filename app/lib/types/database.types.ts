export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
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
          created_at: string | null
          datetime: string | null
          description: string | null
          id: number
          location: string
          picto: string | null
          price: number
          sells: number | null
          stocks: number
          title: string
          zipcode: string
        }
        Insert: {
          adressnum?: number | null
          adressroad: string
          city: string
          created_at?: string | null
          datetime?: string | null
          description?: string | null
          id?: number
          location: string
          picto?: string | null
          price: number
          sells?: number | null
          stocks: number
          title: string
          zipcode: string
        }
        Update: {
          adressnum?: number | null
          adressroad?: string
          city?: string
          created_at?: string | null
          datetime?: string | null
          description?: string | null
          id?: number
          location?: string
          picto?: string | null
          price?: number
          sells?: number | null
          stocks?: number
          title?: string
          zipcode?: string
        }
        Relationships: []
      }
      offers: {
        Row: {
          created_at: string | null
          description: string
          id: number
          promo: number | null
          ticketsqty: number
          title: string
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: number
          promo?: number | null
          ticketsqty: number
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: number
          promo?: number | null
          ticketsqty?: number
          title?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          created_at: string | null
          id: string
          idcartlog: string
          issuccess: boolean | null
          state: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          idcartlog: string
          issuccess?: boolean | null
          state: string
        }
        Update: {
          created_at?: string | null
          id?: string
          idcartlog?: string
          issuccess?: boolean | null
          state?: string
        }
        Relationships: []
      }
      tickets: {
        Row: {
          created_at: string | null
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
          created_at?: string | null
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
          created_at?: string | null
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
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

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

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
