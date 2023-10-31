import { Song } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { log } from "console";
import { cookies } from "next/headers";

const getSongsByUserId = async(): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies,
    });
    const { data: sessionData, error: sessionError} = await supabase.auth.getSession();

    if (sessionError) {
        console.log(sessionError.message);
    };

    const {data, error} = await supabase.from("songs").select("*")
    .eq("user_id", sessionData.session?.user.id);

    if (error) {
        console.log(error.message);
    };

    return (data as any) || []
};

export default getSongsByUserId;