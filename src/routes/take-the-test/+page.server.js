import { supabase } from "$lib/supabaseClient";

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
        const { error } = await supabase.from("test_answers").insert(formContent);
        // Process the form data and perform actions
        console.log(error)
        return error ? { error: error } : { success: true };
    },
};