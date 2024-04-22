import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        let formContent = new Object();
        for (const key of formData.keys()) {
            if (key.endsWith("Array")) {
                formContent[key] = formData.getAll(key);
            }
            else {
                formContent[key] = formData.get(key);
            }
        }
        const { error } = await supabase.from("diagnosis_answers").insert(formContent);
        console.log(error)

        return error ? { error: error } : { success: true };
    },
};