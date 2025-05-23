import { createClient } from '@/app/lib/utils/supabase/client';

export default async function isUserConnected() {
    const supabase = await createClient()
    
      const { data, error } = await supabase.auth.getUser()
      const metadata = data.user?.user_metadata.username;
      if (error || !data?.user) {
        console.log('Message Error : ', error);
        return [];
      }
    
    return metadata;
}