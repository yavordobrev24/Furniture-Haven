import supabase from "../config/supabaseClient";

export const getReviews = async (product_id) => {
  const { data } = await supabase
    .from("reviews")
    .select()
    .eq("product_id", product_id);
  return data;
};
export const createReview = async (newData) => {
  const { data } = await supabase.from("reviews").insert(newData);
  return data;
};

export const editReview = async (id, newData) => {
  const { data } = await supabase.from("reviews").update(newData).eq("id", id);
  return data;
};
export const deleteReview = async (id) => {
  const { data } = await supabase
    .from("reviews")
    .delete()
    .eq("id", id)
    .select();
  return data;
};
export const getSingleReview = async (id) => {
  const { data } = await supabase
    .from("reviews")
    .select()
    .eq("id", id)
    .single();
  return data;
};
