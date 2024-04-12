import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

async function save_answers(formContent) {
    const { error } = await supabase.from("test_answers").insert(formContent);
}


async function save_diagnosis(formContent) {
    const { error } = await supabase.from("diagnosis_answers").insert(formContent);
}

export { save_answers, save_diagnosis };
