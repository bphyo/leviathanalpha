export type Database = {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: string;
          email: string;
          referral_source: string | null;
          user_type: string | null;
          created_at: string;
          ip_hash: string | null;
          user_agent: string | null;
        };
        Insert: {
          id?: string;
          email: string;
          referral_source?: string | null;
          user_type?: string | null;
          created_at?: string;
          ip_hash?: string | null;
          user_agent?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          referral_source?: string | null;
          user_type?: string | null;
          created_at?: string;
          ip_hash?: string | null;
          user_agent?: string | null;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};

export type WaitlistRow = Database["public"]["Tables"]["waitlist"]["Row"];
export type WaitlistInsert = Database["public"]["Tables"]["waitlist"]["Insert"];
