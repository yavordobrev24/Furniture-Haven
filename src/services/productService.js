import supabase from "../config/supabaseClient";

export const getSingleProduct = async (id) => {
  const { data } = await supabase
    .from("products")
    .select()
    .eq("id", id)
    .single();
  return data;
};
export const updateProduct = async (id, updateData) => {
  const { data } = await supabase
    .from("products")
    .update(updateData)
    .eq("id", id);
  return data;
};
export const createProduct = async (newData) => {
  const { data } = await supabase.from("products").insert(newData);
  return data;
};
export const deleteProduct = async (id) => {
  const { data } = await supabase
    .from("products")
    .delete()
    .eq("id", id)
    .select();

  return data;
};
