import supabase from "../config/supabaseClient";

export const createCartItem = async (product_id, user_id) => {
  const { data } = await supabase
    .from("cart_item")
    .insert({ product_id, user_id })
    .select()
    .single();
  return data;
};
export const deleteCartItem = async (cart_id) => {
  const { data } = await supabase.from("cart_item").delete().eq("id", cart_id);
  return data;
};

export const getCartItems = async (userId) => {
  const { data } = await supabase
    .from("cart_item")
    .select("*, products (*)")
    .eq("user_id", userId);

  return data;
};
export const deleteCart = async (user_id) => {
  const { data } = await supabase
    .from("cart_item")
    .delete()
    .eq("user_id", user_id);

  return data;
};
